import React, { useState } from 'react';
import {
  FormControl,
  FormHelperText,
  Button,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
  ThemeProvider,
  Typography,
  Box,
} from '@mui/material';
import { Google, Visibility, VisibilityOff } from '@mui/icons-material';
import styles from './Form.module.scss';
import { Link, useNavigate } from 'react-router-dom';
import google from '../../assets/google.png';
import { useSelector } from 'react-redux';

const Form = ({ title, title1, handleLogin, title3, sign, title4 }) => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  // const { user } = useSelector((state) => state.auth);

  // const handleGoogleSignIn = async () => {
  //   try {
  //     await googleSignIn();
  //     navigate('/');
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  //   React.useEffect(() => {
  //     if (user != null) {
  //       navigate('/');
  //     }
  //   }, [user]);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <Box className={styles.root}>
      <FormControl className={styles.form}>
        <Typography variant="h2" color="">
          {title}:
        </Typography>
        <TextField
          type="email"
          label="Почта"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          focused
          aria-describedby="my-helper-text"
          className={styles.input}
          placeholder="Введите почту"
        />
        <OutlinedInput
          type={showPassword ? 'text' : 'password'}
          value={pass}
          id="outlined-adornment-password"
          onChange={(e) => setPass(e.target.value)}
          className={styles.input}
          placeholder="Введите пароль"
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end">
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
        />
        <Typography>
          {title3} <Link to={sign}>{title4}</Link>
        </Typography>
        <Button
          onClick={() => handleLogin(email, pass)}
          sx={{ height: '60px', width: '350px', fontSize: '18px' }}
          variant="contained">
          {title1}
        </Button>
        <Box>
          <Typography variant="p" sx={{ fontSize: '20px', fontWeight: 500 }}>
            {title1} через:
          </Typography>
          <Box sx={{ mt: 1, cursor: 'pointer' }}>
            <img src={google} alt="" />
          </Box>
        </Box>
      </FormControl>
    </Box>
  );
};

export default Form;
