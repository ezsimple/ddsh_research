import React from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import AppRoute from './route/AppRoute';

const GlobalStyle = createGlobalStyle`
  html{
    box-sizing: border-box;
    background: #F5F4F0;
    display:block;
    height: 100%;
    max-width: 440px;
    margin:0 auto;
    padding: 0;
  }

  body{
    background-color:#fafafa;
    min-height:100vh;
    font-family: Verdana;
    padding: 0;
    margin: 0;
  }
`;

const theme = {
  colors: {
    primary: '#fafafa',
  },
};

const App = (props) => {
  return (
    <React.Fragment>
      {/* <GlobalStyle /> */}
      <ThemeProvider theme={theme}>
        <AppRoute {...props}></AppRoute>
      </ThemeProvider>
    </React.Fragment>
  );
};

export default App;
