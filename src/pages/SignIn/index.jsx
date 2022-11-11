import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import Form from '../../components/Form';
import { setUser } from '../../store/auth/auth';
import { GoogleAuthProvider, signInWithRedirect, signOut, onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../firebase';
import { setAccount } from '../../store/auth/auth';
import { useSelector } from 'react-redux';

const SignIn = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // const { user } = useSelector((state) => state.auth);
  // const googleSignIn = () => {
  //   const provider = new GoogleAuthProvider();
  //   // signInWithPopup(auth, provider);
  //   signInWithRedirect(auth, provider);
  // };

  // React.useEffect(() => {
  //   const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
  //     dispatch(setAccount(currentUser));
  //     console.log(user);
  //   });

  //   return () => {
  //     unsubscribe();
  //   };
  // }, []);

  const handleLogin = (email, password) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        console.log(user);
        dispatch(
          setUser({
            email: user.email,
            id: user.uid,
            token: user.accessToken,
          }),
        );
        navigate('/');
      })
      .catch((error) => console.log(error));
  };

  return (
    <Box
      sx={{
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        gap: '60px',
        alignItems: 'center',
      }}>
      <Typography
        sx={{
          fontFamily: 'Roboto',
          fontWeight: 500,
        }}
        variant="h2">
        Войди чтобы посмотреть сайт!
      </Typography>
      <Form
        title="Вход"
        title1="Войти"
        title2="Войти"
        title3="У вас еще нет аккаунта?"
        title4="Зарегистрироваться"
        handleLogin={handleLogin}
        sign="/signup"
      />
    </Box>
  );
};

export default SignIn;
