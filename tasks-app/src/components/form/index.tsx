import React from 'react';
import TextField from '@mui/material/TextField';
import {
  Button,
  FormControl,
  MenuItem,
  Select,
  useTheme,
  InputLabel,
  Typography,
  Card,
  styled,
  ButtonProps,
  createTheme,
  ThemeProvider,
  Grid2,
} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import {
  addNewTask,
  setSelectedTask,
  updateTask,
} from '../../redux/slices/tasks';
import { RootState } from '../../redux/store';

const CustomButton = styled(Button)<ButtonProps>(({ theme }) => {
  console.log(theme);
  return {
    marginTop: 20,
    marginLeft: 0,
    width: '100%',
    backgroundColor: theme.palette.secondary.main,
    color: 'white',
    transition: theme.transitions.create(['transform']),
    '&:hover': {
      transform: 'scale(1.05)',
    },
  };
});

function Form() {
  let theme = useTheme();
  theme = createTheme(theme, {
    palette: { secondary: { main: '#4ab63a' } },
  });
  const dispatch = useDispatch();
  const [title, setTitle] = React.useState('');
  const [status, setStatus] = React.useState('');
  const { selectedTask } = useSelector((state: RootState) => state.tasks);

  const handleReset = () => {
    setTitle('');
    setStatus('');
    dispatch(setSelectedTask());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedTask) {
      dispatch(updateTask({ id: selectedTask.id, title, status }));
    } else {
      dispatch(addNewTask({ id: crypto.randomUUID(), title, status }));
    }
    handleReset();
  };

  React.useEffect(() => {
    if (selectedTask) {
      setTitle(selectedTask.title);
      setStatus(selectedTask.status);
    }
  }, [selectedTask]);

  return (
    <ThemeProvider theme={theme}>
      <Grid2 container alignItems={'center'} flexDirection={'column'} size={12}>
        <Card
          sx={{
            width: '85%',
            maxWidth: 500,
            padding: 2,
          }}
        >
          <form onSubmit={handleSubmit}>
            <TextField
              fullWidth
              variant="outlined"
              value={title}
              label="عنوان تسک:"
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            ></TextField>

            <FormControl
              fullWidth
              sx={{ marginTop: 2, color: theme.palette.secondary.main }}
            >
              <InputLabel sx={{ bgcolor: 'white' }}>وضعیت</InputLabel>
              <Select
                fullWidth
                value={status}
                onChange={(e) => setStatus(e.target.value)}
              >
                <MenuItem value="ToDo">ToDo</MenuItem>
                <MenuItem value="Inprogress">Inprogress</MenuItem>
                <MenuItem value="Done">Done</MenuItem>
              </Select>
            </FormControl>

            <CustomButton type="submit" variant="contained">
              <Typography variant="body1">
                {selectedTask ? 'ویرایش' : 'ثبت'}
              </Typography>
            </CustomButton>
          </form>
        </Card>
      </Grid2>
    </ThemeProvider>
  );
}

export default Form;
