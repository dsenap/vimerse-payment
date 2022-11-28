import { useRouter } from 'next/router';
import useAuth from 'src/hooks/useAuth';
const withAuth = (WrappedComponent) => {
  // const { userData, login, logoutUser } = useAuth();
  return (props) => {
const {user}=useAuth()
    // checks whether we are on client / browser or server.
    if (typeof window !== 'undefined') {
      const router = useRouter();

      if (!localStorage.getItem('accessToken')||localStorage.getItem('role')!=="admin") {
        router.replace('/');
        return null;
      }

      return <WrappedComponent {...props} />;
    }

    // If we are on server, return null
    return null;
  };
};

export default withAuth;
