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
} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import {
  addNewTask,
  setSelectedTask,
  updateTask,
} from '../../redux/slices/tasks';
import { RootState } from '../../redux/store';

function Form() {
  const theme = useTheme();
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
    <Card
      sx={{
        width: '100%',
        maxWidth: 500,
        bgcolor: 'background.paper',
        padding: 2,
        margin: 2,
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

        <Button
          type="submit"
          variant="contained"
          sx={{
            marginTop: 2,
            minWidth: 250,
            bgcolor: theme.palette.primary.main,
            color: 'white',
          }}
        >
          <Typography variant="body1">
            {selectedTask ? 'ویرایش' : 'ثبت'}
          </Typography>
        </Button>
      </form>
    </Card>
  );
}

export default Form;
