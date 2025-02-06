import React from 'react';
import './App.css';
// import { useSelector } from 'react-redux';
// import { ITasks } from 'main/types';
import { ThemeProvider, createTheme, Box } from '@mui/material';
import { themeOptions } from './theme';
import { Button } from 'main/components';
import { themeOptions as remoteTheme } from 'main/themeOptions';
import { Button2 } from './components';

// const Form = lazy(() => import('main/form'));

function App() {
  console.log('task-app');
  const theme = createTheme(themeOptions);
  const themeRemote = createTheme(remoteTheme);
  // const { tasks } = useSelector((state: ITasks) => state.tasks);

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
        {/* <Form /> */}
        {/* <TaskList tasks={tasks} /> */}
        <ThemeProvider theme={themeRemote}>
          <Button />
          <Button2 />
        </ThemeProvider>
      </Box>
    </ThemeProvider>
  );
}

export default App;
