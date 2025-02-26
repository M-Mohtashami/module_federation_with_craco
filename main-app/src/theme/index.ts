import { ThemeOptions } from '@mui/material/styles';

export const themeOptions: ThemeOptions = {
  palette: {
    mode: 'light',
    primary: {
      main: '#00538a',
      light: '#4da5b5',
    },
    secondary: {
      main: '#f19e3c',
    },
  },
  typography: {
    h1: {
      fontSize: '6rem',
    },
    h2: {
      fontSize: '5rem',
    },
    h3: {
      fontSize: '4rem',
    },

    subtitle1: {
      fontSize: '3rem',
    },

    subtitle2: {
      fontSize: '2.5rem',
    },
    body1: {
      fontSize: '1.5rem',
    },

    body2: {
      fontSize: '1rem',
    },
  },
  spacing: 8,
};
