import React, { useState ,useEffect } from 'react';
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
import s from '../components/pagesComponent/SignIn/SignIn.module.scss';
import useAuth  from 'src/hooks/useAuth';
import { useSnackbar } from 'notistack';
import MailIcon from '@material-ui/icons/Mail';
import withOutAuth from 'src/HOC/withOutAuth';
import ReactGA from 'react-ga';
const SignIn = () => {
  const router = useRouter();
  const [activeError,setActiveError]=useState(false)
  const [values, setValues] = React.useState({
    email: router.query.email,
    password: '',
    showPassword: false,
  });
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
const {login}=useAuth()
  const validationSchema = Yup.object().shape({
    email: Yup.string().email('Must be a valid email').required('Email is required'),
    password: Yup.string().required('Password is required'),
  });

  console.log(router.query.email)

  const {
    register,
    handleSubmit,
    setError,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
    mode: 'onBlur',
  });

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
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
      .post(`${process.env.NEXT_PUBLIC_baseUrl}login`, {
        email: value.email,
        password: value.password,

        domain:window.location.origin
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
   
        } else {
          enqueueSnackbar('This client is deactivaed by admin', {
            variant: 'error'})
         
        
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
      console.log(toastrMessage)
      if(toastrMessage=="User not exists with given email")
      setError("email",{type:"custom",message:toastrMessage})
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
  const responseGoogle =async (response) => {


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
        responseGooglesignup(response)
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



  const responseGooglesignup = async(response) => {

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
        setError("email",{type:"custom",message:toastrMessage})
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

  const responseGoogleFaliure=async(responseGoogle)=>{
    console.log(responseGoogle)
    enqueueSnackbar("Facing some issue with google signin", {
      variant: 'error'})
  }

  useEffect(() => {
    setValue("email",router.query.email)
    // console.log(router.query.email)
    // setValues({
    //   ...values,
    //   email: router.query.email,
    // });
  }, [router.query.email]);



  return (
    <div className={s.mainsignin}>
      <Container>
        <Grid container spacing={12} justify={'center'}>
          <Grid item md={7} justify={'center'} className={s.centerflex}>
            <Grid item>
              <Typography variant="h2" className={s.headingtext}>
                Great to have you back!
              </Typography>
              <Typography variant="p" className={s.mbnone}>
                You can sign in to Vimerse with your existing Vimerse account.
              </Typography>
            </Grid>
          </Grid>
          <Grid item md={5}>
           {activeError?<Paper className={s.papercarde}><center><MailIcon style={{fontSize:80}}/><br/>
<Typography variant='h4'>Email verification pending</Typography><br/>
<Typography variant="body">A verification link was sent to your registered email address. Please check and verify your email.</Typography>
</center> </Paper>: <Paper className={s.papercarde}>
              <div className={s.btngoogle}>
                <GoogleLogin
                  clientId="192443589622-qlgnnv0tfdh5us9booiofuqgje48bn50.apps.googleusercontent.com"
                  buttonText="Continue with Google"
                  onSuccess={responseGoogle}
                  onFailure={responseGoogleFaliure}
                  cookiePolicy={'single_host_origin'}
                />
              </div>
              <div className={s.divider}>
                <span>or</span>
              </div>
              <Typography variant="h3" className={s.marbtm15}>
                Sign In
              </Typography>
              <Grid spacing={2} justify="center">
                <Grid item>
                  <Grid className={s.formerControler}>
                    <form onSubmit={handleSubmit(onSubmitHandler)}>
                      <Grid container direction="column" spacing={2}>
                        {console.log('errrrrr', errors)}
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
                        <Grid item className={s.rightext}>
                          <Link href="/reset-password-by-mail" variant="body2">
                            Forgot Password?
                          </Link>
                        </Grid>
                        <Grid item>
                          <Button variant="contained" color="primary" type="submit" className={s.btnsignin}>
                            Sign In
                          </Button>
                        </Grid>
                        <Grid item className={s.centertext}>
                          New here?{' '}
                          <Link href="/signup" className={s.themetext} variant="body2">
                            Create a Vimerse account.
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
      <ToastContainer position="top-right"  />
    </div>
  );
};
export default withOutAuth(SignIn);
