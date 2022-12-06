import React, { useEffect } from 'react';
import {
  Container,
  Button,
  TextField,
  Grid,
  Typography,
  Checkbox,
  InputAdornment,
  IconButton,
} from '@material-ui/core';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
// import {toast } from 'react-nextjs-toast';
import { useSnackbar } from 'notistack';
import { VisibilityOff, Visibility } from '@material-ui/icons';
import useAuth from 'src/hooks/useAuth';
import axios from '../utils/axios';
import s from '../components/pagesComponent/Profile/Profile.module.scss';

const Profile = () => {
  const { user } = useAuth();
  const router = useRouter();
  const [values, setValues] = React.useState({
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    showPassword: false,
    id: '',
  });
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const [userData, setUser] = React.useState(null);
  const rePass = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/;
  const validationSchema = Yup.object().shape({
    email: Yup.string().email('Must be a valid email').required('Email is required'),
    firstname: Yup.string().required('Firstname is required'),
    lastname: Yup.string().required('Lastname is required'),
    // password:Yup.string().matches(rePass,"Password should include at least one number, one uppercase letter, and one lowercase letter"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
    mode: 'onChange',
  });

  useEffect(() => {
    console.log(user);
    if (!userData && (user.id || user._id)) {
      getUserProfileData();
    }
  }, [userData, user]);
  const onSubmitHandler = (value) => {
    submitForm(value);
  };
  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };
  const submitForm = async (value) => {
    const data = await axios
      .put(`${process.env.NEXT_PUBLIC_baseUrl}users`, {
        ...values,
        id: values._id,
        firstname: value.firstname,
        lastname: value.lastname,
        // email: value.email,
        password: value.password,
        id: userData.id,
      })
      .catch((error) => {
        if (error.response) {
          // Request made and server responded
          const errorMessage = error.response.data;
          // toastrMessage = errorMessage.error;
          console.log(' if toastrMessage', errorMessage.error);
          enqueueSnackbar(error.message, {
            variant: 'error',
          });
        } else if (('else if', error.request)) {
          // The request was made but no response was received
          console.log('error', error.request);
        } else {
          console.log('esle', error.message);
          enqueueSnackbar(error.message, {
            variant: 'error',
          });
        }
      });
    if (data && data.status === 200) {
      console.log('data', data.data);
      enqueueSnackbar('Profile update successfully', { variant: 'success' });
      user.firstname = data.data.firstname;
      user.lastname = data.data.lastname;
      user.password = '';
      localStorage.setItem('user', JSON.stringify(user));
      setTimeout(() => {
        router.push('/dashboard');
      }, 3000);
    }
  };
  const onSubmitCancel = () => {
    router.push('/dashboard');
  };
  const getUserProfileData = async () => {
    const query = user.id || user._id;
    const data = await axios.get(`${process.env.NEXT_PUBLIC_baseUrl}users/byid?id=${query}`, {}).catch((error) => {
      if (error.response) {
        // Request made and server responded
        const errorMessage = error.response.data;
        console.log(' if toastrMessage', errorMessage.error);
      } else if (('else if', error.request)) {
        // The request was made but no response was received
        console.log('error', error.request);
      } else {
        console.log('esle', error.message);
        // toastrMessage = error.message;
      }
    });
    if (data && data.status === 200) {
      console.log('data for ', data);
      setValues({
        ...data.data,
        firstname: data.data.firstname,
        lastname: data.data.lastname,
        email: data.data.email,
        password: data.data.password,
        // id:data.data._id
      });
      setTimeout(
        () =>
          setUser({
            firstname: data.data.firstname,
            lastname: data.data.lastname,
            email: data.data.email,
            password: data.data.password,
            id: data.data._id,
          }),
        1000
      );

      console.log('hhh', userData);
    }
  };

  const onInputchange = (event) => {
    setValues({
      [event.target.firstname]: event.target.value,
      [event.target.lastname]: event.target.value,
      [event.target.password]: event.target.value,
    });
  };
  return (
    <>
      <div className={s.mainprofile}>
        <Container>
          <Grid container spacing={12} justify={'start'}>
            <Grid item md={12} justify={'start'} className={s.centerflex}>
              <div>My Profile</div>
            </Grid>
            <div className={s.divider}>
              <hr />
            </div>

            <Grid item md={12} justify={'start'} className={s.centerflex}>
              <div className={s.formerControler}>
                {userData && (
                  <form onSubmit={handleSubmit(onSubmitHandler)}>
                    <Grid container className={s.containeritem} direction="row" spacing={2}>
                      <Grid item>
                        <label>First Name</label>
                        <TextField
                          type="text"
                          placeholder=""
                          fullWidth
                          {...register('firstname')}
                          // defaultValue={values.firstname}

                          name="firstname"
                          variant="outlined"
                          defaultValue={userData.firstname}
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
                          name="lastname"
                          {...register('lastname')}
                          defaultValue={values.lastname}
                          variant="outlined"
                        />
                        <Typography variant="inherit" className={s.errors}>
                          {errors?.lastname?.message}
                        </Typography>
                      </Grid>
                    </Grid>
                    <Grid container className={s.containeritem} direction="row" spacing={2}>
                      <Grid item>
                        <label>Email</label>
                        <TextField
                          type="email"
                          placeholder=""
                          fullWidth
                          defaultValue={values.email}
                          name="email"
                          {...register('email')}
                          variant="outlined"
                          InputProps={{ readOnly: true }}
                        />
                      </Grid>
                      <Grid item>
                        <label>Password</label>
                        <TextField
                          type={values.showPassword ? 'text' : 'password'}
                          {...register('password')}
                          defaultValue={values.password}
                          placeholder=""
                          fullWidth
                          name="password"
                          variant="outlined"
                          InputProps={{
                            endAdornment: (
                              <InputAdornment className={s.btneyes} position="end">
                                <IconButton aria-label="toggle password visibility" onClick={handleClickShowPassword}>
                                  {values?.showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                              </InputAdornment>
                            ),
                          }}
                        />

                        {/* <Input className={s.passtextbox}
                            type="password"
                            endAdornment={
                              <InputAdornment className={s.btneyes} position="end">
                                <Button>CHANGE</Button>
                              </InputAdornment>
                            }
                          /> */}
                        <Typography variant="inherit" className={s.errors}>
                          {errors?.password?.message}
                        </Typography>
                        {/* <Button variant="outlined" className={s.changebtn} onClick={handleClickShowPassword}>
                        CHANGE
                      </Button> */}
                      </Grid>
                    </Grid>
                    <Grid container className={`${s.containeritem} ${s.checkbox}`} direction="row" spacing={2}>
                      <Grid item>
                        <Checkbox defaultChecked />I would like to receive email notifications about updates and
                        commercial offers from Vimerse.
                      </Grid>
                    </Grid>
                    <Grid container className={`${s.containeritem} ${s.savecancel}`} direction="row" spacing={2}>
                      <Grid item className={s.btncancel}>
                        <div onClick={() => onSubmitCancel()}>Cancel</div>
                      </Grid>
                      <Grid item>
                        <Button variant="contained" color="primary" type="submit" className={s.btnsave}>
                          Save Changes
                        </Button>
                      </Grid>
                    </Grid>
                  </form>
                )}
              </div>
            </Grid>
          </Grid>
        </Container>
      </div>
    </>
  );
};
export default Profile;
