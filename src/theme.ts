import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: '#639a30',
    },
    secondary: {
      main: 'rgb(255,165,0)',
    },
    error: {
      main: red.A400,
    },
  },
});

export default theme;
