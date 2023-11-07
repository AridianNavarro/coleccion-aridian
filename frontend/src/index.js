//Aridian Navarro Remedios
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Provider } from 'react-redux'
import store from './store/index'

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#d390ff',
      light: '#ea2b9d',
      dark: '#480c6f',
    },
    secondary: {
      main: '#ff6496',
      light: '#ffadca',
    },
    error: {
      main: '#ff1744',
    },
    warning: {
      main: '#ff8100',
      dark: '#cba224',
    },
    info: {
      main: '#0227d1',
    },
    success: {
      main: '#17e820',
    },
  },
  typography: {
    h3: {
      fontFamily: 'Droid Sans',
      fontSize: '2.4rem',
    },
    fontFamily: 'Open Sans',
    fontSize: 13,
    fontWeightLight: 200,
    fontWeightRegular: 500,
    fontWeightMedium: 700,
    htmlFontSize: 12,
    fontWeightBold: 600,
  },
})
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CssBaseline />
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <App />
      </Provider>
    </ThemeProvider>
  </React.StrictMode>
);
