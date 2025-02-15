import { ThemeOptions } from '@mui/material/styles';

export const themeOptions: ThemeOptions = {
  palette: {
    mode: 'light',
    primary: {
      main: '#f19e3c',
      light: '#e6d459',
    },
    secondary: {
      main: '#205bdc',
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
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: '2px 2px 19px -6px rgba(66, 68, 90, 1)',
          borderRadius: 14,
        },
      },
    },
  },
};
