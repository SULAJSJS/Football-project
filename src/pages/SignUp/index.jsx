import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
// import { UserAuth } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';

import Form from '../../components/Form';
// import { UserAuth } from '../../context/AuthContext';
import { setUser } from '../../store/auth/auth';

const SignUp = () => {
  //   const { googleSignIn, user } = UserAuth();
  const navigate = useNavigate();

  //   const handleGoogleSignIn = async () => {
  //     try {
  //       await googleSignIn();
  //       navigate('/');
  //     } catch (error) {
  //       throw error;
  //     }
  //   };

  //   React.useEffect(() => {
  //     if (user != null) {
  //       navigate('/');
  //     }
  //   }, [user]);

  const dispatch = useDispatch();

  const handleRegister = (email, password) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
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
      .catch((error) => console.log('Error', error));
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
        Зарегистрируйся чтобы посмотреть сайт!
      </Typography>
      <Form
        title="Регистрация"
        title1="Зарегистрироваться"
        title2="Регистрация"
        handleLogin={handleRegister}
        title3="У вас есть аккаунт?"
        sign="/signin"
        title4="Войти"
      />
    </Box>
  );
};

export default SignUp;
