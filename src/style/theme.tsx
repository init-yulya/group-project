import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#5A9BFF',
      contrastText: 'white',
    },
    secondary: {
      main: '#B5B5B7',
    },
    error: {
      main: '#FF0200',
    },
  },
  typography: {
    // fontFamily: "Lato, Arial",
    fontSize: 16,
  },
  /* overrides: {
    MuiAppBar: {
      colorPrimary: {
        backgroundColor: "#EEEEEE",
      },
    },
    MuiButton: {
      label: {
        color: "#f1f1f1",
      },
    },
  }, */
});

export default theme;
