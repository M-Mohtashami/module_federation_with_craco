import React, { useState } from 'react';
import { Box, ButtonBase, useTheme } from '@mui/material';

function Button() {
  const [counter, setCounter] = useState(0);
  const theme = useTheme();
  return (
    <Box>
      <ButtonBase
        onClick={() => setCounter((prev) => ++prev)}
        sx={{
          padding: 4,
          borderRadius: 5,
          bgcolor: theme.palette.primary.main,
          color: theme.palette.secondary.main,
          fontSize: theme.typography.subtitle2,
          '&:hover': {
            bgcolor: theme.palette.primary.light,
          },
        }}
      >{`Main App : ${counter}`}</ButtonBase>
    </Box>
  );
}

export default Button;
