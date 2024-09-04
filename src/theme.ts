// src/theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: 'rgb(240, 142, 128)', // pink
    },
    secondary: {
      main: 'rgb(253, 240, 230)', // white pink
    },
    background: {
      default: 'rgb(11, 13, 99)', // blue
    },
  },
  components: {
    // Customize MUI components here
    MuiButton: {
      styleOverrides: {
        root: {
          // Customize button styles
          borderRadius: '8px',
        },
      },
    },
    // Add more component customizations if needed
  },
});

export default theme;
