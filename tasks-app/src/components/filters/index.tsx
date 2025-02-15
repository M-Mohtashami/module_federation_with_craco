import { Chip, Grid2, styled } from '@mui/material';
import { grey } from '@mui/material/colors';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { toggleFilter } from '../../redux/slices/tasks';

const StyledChip = styled(Chip)<{ isActive: boolean }>(
  ({ theme, isActive }) => ({
    color: isActive ? theme.palette.primary.main : 'unset',
    backgroundColor: isActive ? theme.palette.secondary.main : grey[200],
    '&:hover': {
      backgroundColor: theme.palette.secondary.light,
    },
  })
);

const Filters = () => {
  const { filters, selectedFilters } = useSelector(
    (state: RootState) => state.tasks
  );
  const dispatch = useDispatch();

  return (
    <Grid2 container gap={2}>
      {filters.map((f) => (
        <StyledChip
          label={f}
          isActive={selectedFilters.includes(f)}
          onClick={() => dispatch(toggleFilter(f))}
        />
      ))}
    </Grid2>
  );
};

export default Filters;
