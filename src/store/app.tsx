import React, {
	createContext,
	useEffect,
	useReducer,
} from 'react'

import ja_JP from '../intl/ja_JP';
import en_US from '../intl/en_US';

export type LocaleType = "ja" | "en"

type IntlConfig = {
	locale: LocaleType
	messages: Record<string, string>
}

export enum AppActionType {
	UPDATE_LANGUAGE = "UPDATE_LANGUAGE",
}

export type AppAction = {
	type: AppActionType
	locale: LocaleType
}

type ContextValue = {
	state: AppState
	dispatch: (action: AppAction) => void
}

type AppState = typeof initialState

const initialState = {
	config: {
		locale: "ja",
		messages: ja_JP
	} as IntlConfig
}

export const AppStore = createContext({} as ContextValue)

export const AppProvider: React.FC<{}> = ({ children }) => {
	const [state, dispatch] = useReducer(
		(state: AppState, action: AppAction) => {
			switch (action.type) {
				case AppActionType.UPDATE_LANGUAGE:
					let messages = undefined
					switch (action.locale) {
						case 'ja': messages = ja_JP; break;
						case 'en': messages = en_US; break;
						default: messages = en_US; break;
					}
					return { config: { locale: action.locale, messages: messages } }
				default:
					throw new Error()
			};
		},
		initialState,
	)

	// for debug
	useEffect(() => {
		console.log("New App State: ", state)
	}, [state])

	return (
		<AppStore.Provider value={{ state, dispatch }}>
			{children}
		</AppStore.Provider>
	)
}