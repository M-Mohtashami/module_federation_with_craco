import React from 'react';
import './App.css';
import { Button } from './components';
import { createTheme, ThemeProvider, Divider } from '@mui/material';
import { themeOptions } from './theme';
import { Button2, Form, TaskList } from 'tasks/components';

function App() {
  const theme = createTheme(themeOptions);
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Button />
        <Divider sx={{ my: 2 }} />
        <Button2 />
        <Divider sx={{ my: 2 }} />
        <Form />
        <Divider sx={{ my: 2 }} />
        <TaskList />
      </div>
    </ThemeProvider>
  );
}

export default App;
