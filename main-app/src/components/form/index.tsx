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
import { useDispatch } from 'react-redux';
import { addNewTask } from '../../redux/slices/tasks';

function Form() {
  const theme = useTheme();
  const dispatch = useDispatch();
  const [title, setTitle] = React.useState('');
  const [status, setStatus] = React.useState('');

  const handleReset = () => {
    setTitle('');
    setStatus('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addNewTask({ title, status }));
    handleReset();
  };
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
          <Typography variant="body1">ثبت</Typography>
        </Button>
      </form>
    </Card>
  );
}

export default Form;
