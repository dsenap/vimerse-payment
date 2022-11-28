import React, { useEffect ,useState } from 'react';
import {
  Container,
  Button,
  TextField,
  Grid,
  Paper,
  Input,
  InputAdornment,
  IconButton,
  Typography,
} from '@material-ui/core';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { Visibility, VisibilityOff } from '@material-ui/icons';
import { GoogleLogin } from 'react-google-login';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import axios from 'axios';
import { ToastContainer, toast } from 'react-nextjs-toast';
import s from '../components/pagesComponent/SignUp/SignUp.module.scss';
import MailIcon from '@material-ui/icons/Mail';
import { useSnackbar } from 'notistack';
import withOutAuth from 'src/HOC/withOutAuth';
import useAuth  from 'src/hooks/useAuth';
import ReactGA from 'react-ga';
const SignUp = () => {
  const router = useRouter();
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const [isRegistered,setIsRegistered]=useState(false)
  const {login}=useAuth()
  const [values, setValues] = React.useState({
    email: router.query.email,
    firstname: '',
    lastname: '',
    password: '',
    confirmpassword: '',
    showPassword: false,
    showConfirmPassword: false,
  });
  const rePass = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/;
  const validationSchema = Yup.object().shape({
    email: Yup.string().email('Must be a valid email').required('Email is required'),
    firstname: Yup.string().required('Firstname is required'),
    lastname: Yup.string(),
    password: Yup.string().min(8,"Password should contain at least 8 characters").max(12,"Password should be less than 12 characters").matches(rePass,"Password should include at least one number, one uppercase letter, and one lowercase letter").required('Password is required'),
    confirmpassword: Yup.string()
      .required('Confirm password is required')
      .oneOf([Yup.ref('password')], 'Your passwords do not match.'),
  });

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
    setValue,
  } = useForm({
    resolver: yupResolver(validationSchema),
    mode: 'onChange',
  });

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleClickShowConfirmPassword = () => {
    setValues({
      ...values,
      showConfirmPassword: !values.showConfirmPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const onSubmitHandler = (value) => {
    console.log('value', value);
    submitForm(value);
  };


  const submitForm = async (value) => {

    try{
      const data = await axios
      .post(`${process.env.NEXT_PUBLIC_baseUrl}users/signup`, {
        email: value.email,
        password: value.password,
        firstname: value.firstname,
        lastname: value.lastname,
        usertype: 'client',
        domain:window.location.origin
      })
      if (data && data.status === 200) {
        setIsRegistered(true)
        ReactGA.event({
          category: 'signup',
          action: 'signup',
          label:'signup',
          value: 1
        });
      
      }
    }
    catch(error){
      if (error.response) {
      
          const errorMessage = error.response.data;
          const toastrMessage = errorMessage.error;
          console.log('toastrMessage', errorMessage);
          if(toastrMessage=="This email address is already registered.")
          setError("email",{type:"custom",message:toastrMessage})
        else
          enqueueSnackbar(toastrMessage, {
          variant: 'error'})
        
      } else{
        enqueueSnackbar("Internal server error!", {
          variant: 'error'})
      }
    }
    
    
  
  };
  const responseGoogle = async(response) => {

    try{
      const data = await axios
      .post(`${process.env.NEXT_PUBLIC_baseUrl}users/signup/google`, {
        token:response.tokenId
      })
      if (data && data.status == 200) {
        console.log('data.data', data.data);
        const { usertype } = data.data.user;
        const { isactive } = data.data.user;
        ReactGA.event({
          category: 'signup',
          action: 'signup',
          label:'signup',
          value: 1
        });
        if (usertype == 'client') {
    
           
           
            login(data.data.accessToken,data.data.refreshToken,data.data.user)
            
              router.push('/dashboard');
              toast.remove();
     
         
        } 
        else if (usertype == 'admin') {
       
            login(data.data.accessToken,data.data.refreshToken,data.data.user)
         window.location="/admin"
        
              router.push('/admin');
        
        } 
        
     
      }
    }catch(error){
     console.log(error)
  if(error.response.status==422){
    setActiveError(true)
    return
  }
  
      if (error.response) {
        const errorMessage = error.response.data;
        const toastrMessage = errorMessage.error;
        console.log('toastrMessage', errorMessage);
        if(toastrMessage=="This email address is already registered.")
        {
          responseGoogleSignin(response)
        }
      else
        enqueueSnackbar(toastrMessage, {
        variant: 'error'})
      } else if (error.request) {
        // The request was made but no response was received
        console.log(error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.log('Error', error.message);
      }
    }





  };


  const responseGoogleSignin =async (response) => {


    try{
    const data = await axios
    .post(`${process.env.NEXT_PUBLIC_baseUrl}login/google`, {
      token:response.tokenId
    })
    if (data && data.status == 200) {
      console.log('data.data', data.data);
      const { usertype } = data.data.user;
      const { isactive } = data.data.user;

      if (usertype == 'client') {
        if (isactive) {
        
          login(data.data.accessToken,data.data.refreshToken,data.data.user)
          
            router.push('/dashboard');
            toast.remove();
   
        } 
      } 
      else if (usertype == 'admin') {
        if (isactive) {
         
         
          login(data.data.accessToken,data.data.refreshToken,data.data.user)
       window.location="/admin"
      
            router.push('/admin');
            toast.remove();
   
        } 
      } 
      
      
   
    }
  }catch(error){
   
if(error.response.status==422){
  setActiveError(true)
  return
}

    if (error.response) {
      const errorMessage = error.response.data;
      const toastrMessage = errorMessage.error;
      console.log('toastrMessage', errorMessage);
      if(toastrMessage=="User not exists with given email")
      {
        
      }
    else
    if(toastrMessage=="Incorrect Password")
      setError("password",{type:"custom",message:toastrMessage})
      else
      enqueueSnackbar(toastrMessage, {
      variant: 'error'})
    } else if (error.request) {
      // The request was made but no response was received
      console.log(error.request);
    } else {
      // Something happened in setting up the request that triggered an Error
      console.log('Error', error.message);
    }
  }
  };

  useEffect(() => {
    setValue("email",router.query.email)
    // console.log(router.query.email)
    // setValues({
    //   ...values,
    //   email: router.query.email,
    // });
  }, [router.query.email]);

  return (
    <div className={s.mainsignup}>
      <Container>
        <Grid container spacing={12} justify={'center'}>
          <Grid item md={7} justify={'center'} className={s.centerflex}>
            <Grid item>
              <Typography variant="h2" className={s.headingtext}>
                Welcome to Vimerse!
              </Typography>
              <div className={s.mbnone}>
                <Typography variant="p" className={s.lineheight21}>
                  Sign up to get the first video editing service for free. <br />
                  Get your video edited exactly as you would like.
                </Typography>
              </div>
            </Grid>
          </Grid>
          <Grid item md={5}>
        { isRegistered?
        
        <Paper className={s.papercarde}>

<center><MailIcon style={{fontSize:80}}/><br/>
<Typography variant='h4'>Please verify your email</Typography><br/>
<Typography variant="body">We sent you an account verification email to the registered email address. If you do not see the verification email, please wait a few minutes or check the spam folder.</Typography>
</center>  </Paper>
        : <Paper className={s.papercarde}>
              <div className={s.btngoogle}>
                <GoogleLogin
                  clientId="192443589622-qlgnnv0tfdh5us9booiofuqgje48bn50.apps.googleusercontent.com"
                  buttonText="Continue with Google"
                  onSuccess={responseGoogle}
                  onFailure={responseGoogle}
                  cookiePolicy={'single_host_origin'}
                />
              </div>
              <div className={s.divider}>
                <span>or</span>
              </div>
              <Typography variant="h3" className={s.marbtm15}>
                Sign Up
              </Typography>
              <Grid spacing={2} justify="center">
                <Grid item>
                  <Grid className={s.formerControler}>
                    <form onSubmit={handleSubmit(onSubmitHandler)}>
                      <Grid container direction="column" spacing={2}>
                        <Grid item>
                          <label>Email</label>
                          <TextField
                            type="email"
                            placeholder=""
                            fullWidth
                            {...register('email')}
                            name="email"
                            variant="outlined"
                            defaultValue={values.email}
                          />
                          <Typography variant="inherit" className={s.errors}>
                            {errors?.email?.message}
                          </Typography>
                        </Grid>

                        <Grid item>
                          <label>First Name</label>
                          <TextField
                            type="text"
                            placeholder=""
                            fullWidth
                            {...register('firstname')}
                            name="firstname"
                            variant="outlined"
                          />
                          <Typography variant="inherit" className={s.errors}>
                            {errors?.firstname?.message}
                          </Typography>
                        </Grid>

                        <Grid item>
                          <label>Last Name</label>
                          <TextField
                            type="text"
                            placeholder=""
                            fullWidth
                            {...register('lastname')}
                            name="lastname"
                            variant="outlined"
                          />
                          <Typography variant="inherit" className={s.errors}>
                            {errors?.lastname?.message}
                          </Typography>
                        </Grid>
                        <Grid item>
                          <label>Password</label>
                          <Input
                            className={s.passtextbox}
                            type={values.showPassword ? 'text' : 'password'}
                            {...register('password')}
                            endAdornment={
                              <InputAdornment className={s.btneyes} position="end">
                                <IconButton
                                  aria-label="toggle password visibility"
                                  onClick={handleClickShowPassword}
                                  onMouseDown={handleMouseDownPassword}
                                >
                                  {values?.showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                              </InputAdornment>
                            }
                          />
                          <Typography variant="inherit" className={s.errors}>
                            {errors?.password?.message}
                          </Typography>
                        </Grid>

                        <Grid item>
                          <label>Confirm Password</label>
                          <Input
                            className={s.passtextbox}
                            type={values.showConfirmPassword ? 'text' : 'password'}
                            {...register('confirmpassword')}
                            endAdornment={
                              <InputAdornment className={s.btneyes} position="end">
                                <IconButton
                                  aria-label="toggle password visibility"
                                  onClick={handleClickShowConfirmPassword}
                                  onMouseDown={handleMouseDownPassword}
                                >
                                  {values?.showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                              </InputAdornment>
                            }
                          />
                          <Typography variant="inherit" className={s.errors}>
                            {errors?.confirmpassword?.message}
                          </Typography>
                        </Grid>

                        <Grid item>
                          <Button variant="contained" color="primary" type="submit" className={s.btnsignin}>
                            Sign Up
                          </Button>
                        </Grid>
                        <Grid item className={s.centertext}>
                          Already have an accountt?{' '}
                          <Link href="/signin" className={s.themetext} variant="body2">
                            Sign in
                          </Link>
                        </Grid>
                      </Grid>
                    </form>
                  </Grid>
                </Grid>
              </Grid>
            </Paper>}
          </Grid>
        </Grid>
      </Container>
      <ToastContainer position="top-right" delay={3000} />
    </div>
  );
};
export default withOutAuth(SignUp);
