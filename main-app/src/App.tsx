import React from 'react';
import './App.css';
import { Form, TaskList, Button } from './components';
import { useSelector } from 'react-redux';
import { ITasks } from './redux/types';
import { createTheme, ThemeProvider, Divider } from '@mui/material';
import { themeOptions } from './theme';
import { Button2 } from 'tasks/components';

function App() {
  const theme = createTheme(themeOptions);
  const { tasks } = useSelector((state: { tasks: ITasks }) => state.tasks);
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Button />
        <Divider sx={{ my: 2 }} />
        <Button2 />
        <Divider sx={{ my: 2 }} />
        <Form />
        <TaskList tasks={tasks} />
      </div>
    </ThemeProvider>
  );
}

export default App;
