import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ThemeProvider } from './hooks/theme';
import { AuthProvider } from './hooks/auth';
import { Provider } from 'react-redux';
import { store } from './store';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider>
        <AuthProvider>
          <App />
        </AuthProvider>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);