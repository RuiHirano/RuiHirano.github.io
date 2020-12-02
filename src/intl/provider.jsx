import React, { createContext, useContext } from 'react';
import { IntlProvider } from "react-intl";
import { AppStore } from 'store/app';
import { Button } from "@material-ui/core";

export const IntlContext = createContext('light');

export default ({ children }) => {
    const { state, dispatch } = useContext(AppStore);
    console.log("state", state)

    const changeLanguage = (loc) => {
        dispatch({ type: "UPDATE_LANGUAGE", locale: loc })

    }
    return (
        <IntlContext.Provider
            value={{
                changeLanguage
            }}
        >

            <IntlProvider
                locale={state.config.locale}
                messages={state.config.messages}
            >
                {children}
            </IntlProvider>
        </IntlContext.Provider>
    );
};
