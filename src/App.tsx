import React from 'react';
import { useTheme } from './hooks/theme';

import { ThemeProvider } from 'styled-components';

import GlobalStyles from './styles/GlobalStyles';
import Routes from './routes'

const App: React.FC = () => {
    const { theme } = useTheme()
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            <Routes />
        </ThemeProvider>
    );
}

export default App;