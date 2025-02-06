import React from 'react';
import { Box, ButtonBase, useTheme } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { increment } from '../../redux/slices/counter';
import { RootState } from '../../redux/store';

function Button() {
  const { counter } = useSelector((state: RootState) => state.counter);
  const dispatch = useDispatch();
  const theme = useTheme();
  return (
    <Box>
      <ButtonBase
        onClick={() => dispatch(increment())}
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
