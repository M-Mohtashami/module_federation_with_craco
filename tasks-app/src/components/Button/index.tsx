import React from 'react';
import { Box, ButtonBase, useTheme } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { increment2 } from '../../redux/slices/counter';

function Button2() {
  const { counter } = useSelector((state: RootState) => state.counter2);
  const dispatch = useDispatch();
  const theme = useTheme();
  return (
    <Box>
      <ButtonBase
        onClick={() => dispatch(increment2())}
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
