import React, { useState } from 'react';
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
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import useAuth from 'src/hooks/useAuth';
import { useSnackbar } from 'notistack';
import withOutAuth from 'src/HOC/withOutAuth';
import s from '../components/pagesComponent/SignIn/SignIn.module.scss';

const SignIn = () => {
  const router = useRouter();
  const [values, setValues] = React.useState({
    email: '',
  });
  const [isMailSent, setMailSent] = useState(false);
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const { login } = useAuth();
  const validationSchema = Yup.object().shape({
    email: Yup.string().email('Must be a valid email').required('Email is required'),
  });

  const {
    register,
    handleSubmit,
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
    try {
      const data = await axios.post(`${process.env.NEXT_PUBLIC_baseUrl}users/send-resetpass-mail`, {
        email: value.email,
        domain: window.location.origin,
      });

      if (data && data.status == 200) {
        setMailSent(true);
        enqueueSnackbar('Password reset instructions sent successfully', {
          variant: 'success',
        });
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
        <Grid container spacing={12} maxWidth="lg" justify={'center'}>
          <Grid item md={5}>
            <Paper className={s.papercarde}>
              <Typography variant="h4" className={s.marbtm32}>
                Reset Password
              </Typography>
              <Grid spacing={6} justify="center">
                <Grid item>
                  <Grid className={s.formerControler}>
                    {isMailSent ? (
                      <center>
                        <MailOutlineIcon style={{ fontSize: 80 }} />
                        <br />
                        <br />
                        <Typography variant="h6">
                          Password reset instruction have been sent to your email address
                        </Typography>
                      </center>
                    ) : (
                      <form onSubmit={handleSubmit(onSubmitHandler)}>
                        <Grid container direction="column" spacing={8}>
                          {console.log('errrrrr', errors)}
                          <Grid item>
                            <label>Registered Email</label>
                            <TextField
                              type="email"
                              placeholder=""
                              fullWidth
                              helperText={!errors.email && 'Please enter your registered email addresss'}
                              {...register('email')}
                              name="email"
                              variant="outlined"
                            />
                            <Typography variant="inherit" className={s.errors}>
                              {errors?.email?.message}
                            </Typography>
                          </Grid>

                          <Grid item>
                            <Button variant="contained" color="primary" type="submit" className={s.btnsignin}>
                              Reset Password
                            </Button>
                          </Grid>
                        </Grid>
                      </form>
                    )}
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
export default withOutAuth(SignIn);
