import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from "./styles/global";
import  theme  from "./styles/theme";

import { AuthProvider } from './hooks/auth';

import { Routes } from "./routes"
import { SearchProvider } from './hooks/search';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles/>
      <AuthProvider>
        <SearchProvider>
          <Routes />
        </SearchProvider>
      </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>
);
