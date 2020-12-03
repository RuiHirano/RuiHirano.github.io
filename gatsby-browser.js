import React from 'react';
import ThemeProvider from 'providers/ThemeProvider';
import { default as IntlProvider } from "./src/intl/provider";
import StoreProvider from './src/store';

export const onServiceWorkerUpdateReady = () => window.location.reload(true);

export const wrapRootElement = ({ element }) => (

    <StoreProvider>
        <IntlProvider>
            <ThemeProvider>
                {element}
            </ThemeProvider>
        </IntlProvider>
    </StoreProvider>
);
