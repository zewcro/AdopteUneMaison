import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
// react icons*
import { flexCenter } from 'themes/commonStyles';
import { orange } from '@mui/material/colors';

const Logo = () => {
  return (
    <Box sx={flexCenter}>
      <Typography
        sx={{
          ml: 1,
          color: (theme) => theme.palette.secondary.main,
          fontSize: '20px',
          fontWeight: 'bold',
        }}
        component="h3"
      >
        AUM
      </Typography>
    </Box>
  );
};

export default Logo;
