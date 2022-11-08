import { Box } from '@mui/material';
import React from 'react';

const Header = () => {
  return (
    <div>
      <Box sx={{ display: 'flex', gap: '5px' }}>
        <Box
          sx={{
            background: 'rgba(0, 82, 53, 0.1)',
            width: '30px',
            height: '40px',
            textAlign: 'center',
          }}>
          <p style={{ textAlign: 'center', fontSize: '12px' }}>№</p>
        </Box>
        <Box
          sx={{
            background: 'rgba(0, 82, 53, 0.1)',
            width: '40px',
            height: '40px',
            textAlign: 'center',
            fontSize: '12px',
          }}></Box>
        <Box
          sx={{
            background: 'rgba(0, 82, 53, 0.1)',
            width: '125px',
            height: '40px',
            textAlign: 'center',
            fontSize: '12px',
          }}>
          <p>ФИО</p>
        </Box>
        <Box
          sx={{
            background: 'rgba(0, 82, 53, 0.1)',
            width: '64px',
            height: '40px',
            textAlign: 'center',
            fontSize: '12px',
          }}>
          <p>Номер</p>
        </Box>
        <Box
          sx={{
            background: 'rgba(0, 82, 53, 0.1)',
            width: '130px',
            height: '40px',
            textAlign: 'center',
            fontSize: '12px',
          }}>
          <p>Позиция</p>
        </Box>
        <Box
          sx={{
            background: 'rgba(0, 82, 53, 0.1)',
            width: '55px',
            height: '40px',
            textAlign: 'center',
            fontSize: '12px',
          }}>
          <p>Голы</p>
        </Box>
        <Box
          sx={{
            background: 'rgba(0, 82, 53, 0.1)',
            width: '55px',
            height: '40px',
            textAlign: 'center',
            fontSize: '12px',
          }}>
          <p>Фолы</p>
        </Box>
        <Box
          sx={{
            background: 'rgba(0, 82, 53, 0.1)',
            width: '55px',
            height: '40px',
            textAlign: 'center',
            fontSize: '12px',
          }}>
          <p>MVP</p>
        </Box>
        <Box
          sx={{
            background: 'rgba(0, 82, 53, 0.1)',
            width: '55px',
            height: '40px',
            textAlign: 'center',
            fontSize: '12px',
          }}>
          <p>Assist</p>
        </Box>
        <Box
          sx={{
            background: 'rgba(0, 82, 53, 0.1)',
            width: '55px',
            height: '40px',
          }}>
          <div
            style={{
              width: '20px',
              height: '20px',
              background: '#F21E1E',
              margin: '10px auto',
            }}></div>
        </Box>
        <Box
          sx={{
            background: 'rgba(0, 82, 53, 0.1)',
            width: '55px',
            height: '40px',
            textAlign: 'center',
            fontSize: '12px',
          }}>
          <div
            style={{
              width: '20px',
              height: '20px',
              background: '#FFC403',
              margin: '10px auto',
            }}></div>
        </Box>
        <Box
          sx={{
            background: 'rgba(0, 82, 53, 0.1)',
            width: '40px',
            height: '40px',
            textAlign: 'center',
            fontSize: '12px',
          }}>
          <p>Цвет</p>
        </Box>
      </Box>
    </div>
  );
};

export default Header;
