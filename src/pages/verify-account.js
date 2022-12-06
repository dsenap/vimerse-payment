import Typography from '@material-ui/core/Typography';

import { ButtonBase } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import { useEffect, useState } from 'react';
import { ArrowBack, ArrowForward } from '@material-ui/icons';
import axios from 'axios';
import { useRouter } from 'next/router';
import useAuth from 'src/hooks/useAuth';

function VerifyAccount(props) {
  const [loading, setLoading] = useState(true);
  const [isVerified, setIsVerified] = useState(false);
  const router = useRouter();
  const { login } = useAuth();

  useEffect(() => {
    if (router.query.token)
      axios
        .post(`${process.env.NEXT_PUBLIC_baseUrl}users/verifyAccount`, {
          token: router.query.token,
          domain: window.location.origin,
        })
        .then((res) => {
          setIsVerified(true);
          setLoading(false);

          login(res.data.accessToken, res.data.refreshToken, res.data.user);
          if (res.data?.user?.usertype == 'client') {
            router.push('/dashboard');
          } else {
            router.push('/admin');
          }
        })
        .catch((err) => {
          console.log(err);
          setLoading(false);
          // toast.error(err.response.data.message);
        });
  }, [router.query.token]);

  return (
    <Box display="flex" justifyContent="center" height="80vh">
      <Box display="flex" justifyContent="center" flexDirection="column">
        {isVerified ? (
          <Box>
            <Typography variant="h2" align="center">
              Success !
            </Typography>
            <br />
            <br />
            <Typography variant="h6" align="center">
              Your Account is Verified
            </Typography>
          </Box>
        ) : (
          <Box>
            <Typography variant="h2" align="center" color="secondary">
              {loading ? 'Verifying you email....' : 'Error!'}
            </Typography>
            <br />
            <br />
            <Typography variant="h6" align="center">
              {!loading && 'Invalid or expired verification link'}
            </Typography>
          </Box>
        )}
      </Box>
    </Box>
  );
}

export default VerifyAccount;
