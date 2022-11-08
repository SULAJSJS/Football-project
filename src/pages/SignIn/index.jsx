import { Google } from '@mui/icons-material';
import { Button, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { UserAuth } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const SignIn = () => {
  const { googleSignIn, user } = UserAuth();
  const navigate = useNavigate();

  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
      navigate('/');
    } catch (error) {
      throw error;
    }
  };

  React.useEffect(() => {
    if (user != null) {
      navigate('/');
    }
  }, [user]);

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
        Зарегайся чтобы посмотреть сайт!
      </Typography>
      <Button
        onClick={handleGoogleSignIn}
        sx={{ width: '200px', height: '40px', textAlign: 'center' }}
        startIcon={<Google color="default" />}
        variant="contained">
        Sign In
      </Button>
    </Box>
  );
};

export default SignIn;
