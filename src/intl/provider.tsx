import React, { createContext, useContext } from 'react';
import { IntlProvider as ReactIntlProvider } from "react-intl";
import { AppActionType, AppStore } from '../store/app';
import { Button } from "@material-ui/core";
import { LocaleType } from '../store/app';

type ContextValue = {
    changeLanguage: (loc: LocaleType) => void
}

export const IntlContext = createContext({} as ContextValue);

const IntlProvider: React.FC = ({ children }) => {
    const { state, dispatch } = useContext(AppStore);
    console.log("state", state)

    const changeLanguage = (loc: LocaleType) => {
        dispatch({ type: AppActionType.UPDATE_LANGUAGE, locale: loc })

    }
    return (
        <IntlContext.Provider
            value={{
                changeLanguage
            }}
        >

            <ReactIntlProvider
                locale={state.config.locale}
                messages={state.config.messages}
            >
                {children}
            </ReactIntlProvider>
        </IntlContext.Provider>
    );
};

export default IntlProvider