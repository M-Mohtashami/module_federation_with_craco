import React from 'react';
import './App.css';
import { ThemeProvider, createTheme, Box } from '@mui/material';
import { themeOptions } from './theme';
import { themeOptions as remoteTheme } from 'main/themeOptions';
import { Button2, Form, TaskList } from './components';
import { Button } from 'main/components';

// const Button = lazy(() => import('main/components'));

function App() {
  const theme = createTheme(themeOptions);
  const themeRemote = createTheme(remoteTheme);

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 2,
          margin: 16,
        }}
      >
        <Button />
        <Button2 />
        <ThemeProvider theme={themeRemote}>
          <Button />
          <Button2 />
        </ThemeProvider>
        <Form />
        <TaskList />
      </Box>
    </ThemeProvider>
  );
}

export default App;
