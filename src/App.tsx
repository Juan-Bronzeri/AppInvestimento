import React from 'react';
import { useTheme } from './hooks/theme';

import { ThemeProvider } from 'styled-components';

import GlobalStyles from './styles/GlobalStyles';
import Routes from './routes'

import { Provider } from 'react-redux';
import { store } from './store';

const App: React.FC = () => {
    const { theme } = useTheme()
    return (
        <ThemeProvider theme={theme}>
            <Provider store={store}>
                <GlobalStyles />
                <Routes />
            </Provider>
        </ThemeProvider>
    );
}

export default App;