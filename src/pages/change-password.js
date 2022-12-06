import React, { useState } from 'react';
import { Container, Button, TextField, Grid, Paper, Input, Typography } from '@material-ui/core';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { Visibility, VisibilityOff } from '@material-ui/icons';
import { GoogleLogin } from 'react-google-login';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import axios from 'axios';
import { ToastContainer, toast } from 'react-nextjs-toast';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import useAuth from 'src/hooks/useAuth';
import { useSnackbar } from 'notistack';
import withOutAuth from 'src/HOC/withOutAuth';
import jwt_decode from 'jwt-decode';
import s from '../components/pagesComponent/SignIn/SignIn.module.scss';

const SignIn = () => {
  const router = useRouter();
  const [values, setValues] = React.useState({
    password: '',
    confirmpassword: '',
  });
  const [isMailSent, setMailSent] = useState(true);
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const { login } = useAuth();
  const rePass = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/;
  const validationSchema = Yup.object().shape({
    confirmpassword: Yup.string()
      .required('Password is required')
      .oneOf([Yup.ref('password'), null], 'Passwords must match'),
    password: Yup.string()
      .min(8, 'Password should contain at least 8 characters')
      .matches(rePass, 'Should contain 1 numeric and 1 uppercase letter and 1 lowercase letter')
      .required('Password is required'),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
    mode: 'onBlur',
  });

  const onSubmitHandler = (value) => {
    console.log('value', value);
    submitForm(value);
  };

  const submitForm = async (value) => {
    try {
      const data = await axios.post(`${process.env.NEXT_PUBLIC_baseUrl}users/reset-password`, {
        token: router.query.token,
        password: value.password,
      });

      if (data && data.status == 200) {
        enqueueSnackbar('Password changed successfully', {
          variant: 'success',
        });

        router.push(`/signin?email=${jwt_decode(router.query.token)?.email}`);
      }
    } catch (error) {
      if (error.response) {
        const errorMessage = error.response.data;
        const toastrMessage = errorMessage.error;

        enqueueSnackbar(toastrMessage, {
          variant: 'error',
        });
      } else if (error.request) {
        // The request was made but no response was received
        console.log(error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.log('Error', error.message);
      }
    }
  };

  return (
    <div className={s.mainsignin}>
      <Container>
        <Grid container spacing={8} maxWidth="lg" justify={'center'}>
          <Grid item md={5}>
            <Paper className={s.papercarde}>
              <Typography variant="h4" className={s.marbtm32}>
                Reset Password
              </Typography>
              <Grid spacing={2} justify="center">
                <Grid item>
                  <Grid className={s.formerControler}>
                    <form onSubmit={handleSubmit(onSubmitHandler)}>
                      <Grid container direction="column" spacing={2}>
                        {console.log('errrrrr', errors)}

                        <Grid item>
                          <label>New Password</label>
                          <Input
                            className={s.passtextbox}
                            type={'password'}
                            {...register('password')}
                            // endAdornment={
                            //   <InputAdornment className={s.btneyes} position="end">
                            //     <IconButton
                            //       aria-label="toggle password visibility"
                            //       onClick={handleClickShowPassword}
                            //       onMouseDown={handleMouseDownPassword}
                            //     >
                            //       {values?.showPassword ? <VisibilityOff /> : <Visibility />}
                            //     </IconButton>
                            //   </InputAdornment>
                            // }
                          />
                          <Typography variant="inherit" className={s.errors}>
                            {errors?.password?.message}
                          </Typography>
                        </Grid>
                        <Grid item>
                          <label>Confirm New Password</label>
                          <Input
                            className={s.passtextbox}
                            type={'password'}
                            {...register('confirmpassword')}
                            // endAdornment={
                            //   <InputAdornment className={s.btneyes} position="end">
                            //     <IconButton
                            //       aria-label="toggle password visibility"
                            //       onClick={handleClickShowPassword}
                            //       onMouseDown={handleMouseDownPassword}
                            //     >
                            //       {values?.showPassword ? <VisibilityOff /> : <Visibility />}
                            //     </IconButton>
                            //   </InputAdornment>
                            // }
                          />
                          <Typography variant="inherit" className={s.errors}>
                            {errors?.confirmpassword?.message}
                          </Typography>
                        </Grid>

                        <Grid item>
                          <Button variant="contained" color="primary" type="submit" className={s.btnsignin}>
                            Reset Password
                          </Button>
                        </Grid>
                      </Grid>
                    </form>
                  </Grid>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </Container>
      <ToastContainer position="top-right" />
    </div>
  );
};
export default SignIn;
