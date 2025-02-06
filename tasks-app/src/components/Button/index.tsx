import React, { useState } from 'react';
import { Box, ButtonBase, useTheme } from '@mui/material';

function Button2() {
  const [counter, setCounter] = useState(0);
  const theme = useTheme();
  return (
    <Box>
      <ButtonBase
        onClick={() => setCounter((prev) => prev + 2)}
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
      >{`Tasks App : ${counter}`}</ButtonBase>
    </Box>
  );
}

export default Button2;
