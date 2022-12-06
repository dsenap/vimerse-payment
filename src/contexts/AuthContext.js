/*
 Copyright ©. All Rights Reserved. Confidential and proprietary.
 XYZ. Contact address: XYZ@xyz.pa .
 */
import PropTypes from 'prop-types';
import { createContext, useEffect, useReducer, useState } from 'react';
import { addJWTInterceptor } from 'src/utils/interceptor';
import { useRouter } from 'next/router';
import axios from 'axios';
// ----------------------------------------------------------------------

const initialState = {
  isAuthenticated: false,
  isInitialized: false,
  loading: true,
  accessToken: '',
  refreshToken: '',
  user: null,
  locale: {},
};

const reducer = (state, action) => {
  if (action.type === 'INITIALISE') {
    const { isAuthenticated, user, accessToken, refreshToken } = action.payload;
    return {
      ...state,
      isAuthenticated,
      isInitialized: true,
      user,
      accessToken,
      refreshToken,
    };
  }

  return state;
};

const AuthContext = createContext({
  ...initialState,

  login: () => Promise.resolve(),
  register: () => Promise.resolve(),

  logout: () => Promise.resolve(),
});

AuthProvider.propTypes = {
  children: PropTypes.node,
};

function AuthProvider({ children }) {
  const [profile, setProfile] = useState(null);
  const [state, dispatch] = useReducer(reducer, initialState);
  let router = useRouter();

  useEffect(() => {
    let accessToken = localStorage.getItem('accessToken');
    let refreshToken = localStorage.getItem('refreshToken');
    let user = localStorage.getItem('user');
    dispatch({
      type: 'INITIALISE',
      payload: { accessToken, refreshToken, user: JSON.parse(user) },
    });
    //addJWTInterceptor(accessToken)
  }, []);

  const login = (accessToken, refreshToken, user) => {
    localStorage.setItem('accessToken', accessToken);
    localStorage.setItem('refreshToken', refreshToken);
    localStorage.setItem('user', JSON.stringify(user));
    localStorage.setItem('role', user.usertype);
    //  axios.defaults.headers.common = {
    //   "Authorization": `Bearer ${accessToken}`,

    // };
    dispatch({
      type: 'INITIALISE',
      payload: { accessToken, refreshToken, user: user },
    });
  };

  const loginWithGoogle = () => {};

  const resendEmailVerification = () => {
    //return state.user.sendEmailVerification();
  };

  const updateProfile = (data) => {};

  const register = (email, password, firstName, lastName, phoneNumber, allValues) => {};

  const logout = async () => {
    localStorage.clear();
    window.location = '/';
  };

  const resetPassword = async (email) => {};

  return (
    <AuthContext.Provider
      value={{
        accessToken: state.accessToken || '',
        refreshToken: state.refreshToken || '',
        user: {
          clickupids: state.user?.clickupids || '',
          email: state.user?.email || '',
          firstname: state.user?.firstname || '',
          id: state.user?.id || '',
          isactive: state.user?.isactive || '',
          isverified: state.user?.isverified || '',
          jotformlink: state.user?.jotformlink || '',
          lastname: state.user?.lastname || '',

          usertype: state.user?.usertype || '',

          ...state.user,
        },
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthProvider };
