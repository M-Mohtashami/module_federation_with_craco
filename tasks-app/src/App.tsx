import React from 'react';
import './App.css';
import { ThemeProvider, createTheme, Grid2 } from '@mui/material';
import { themeOptions } from './theme';
import { Button2, Form, TaskList } from './components';
const { themeOptions: remoteTheme } = await import('main/themeOptions');
const { Button } = await import('main/components');

// const Button = lazy(() => import('main/components'));

function App() {
  const theme = createTheme(themeOptions);
  const themeRemote = createTheme(remoteTheme);

  return (
    <ThemeProvider theme={theme}>
      <Grid2
        container
        size={{ xs: 12, md: 6 }}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 2,
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
      </Grid2>
    </ThemeProvider>
  );
}

export default App;
