import React, {
	createContext,
	useEffect,
	useReducer,
} from 'react'

import ja_JP from './../intl/ja_JP';
import en_US from './../intl/en_US';

const initialState = {
	config: {
		locale: "ja",
		messages: ja_JP
	}
}

export const AppStore = createContext({})

export const AppProvider = ({ children }) => {
	const [state, dispatch] = useReducer(
		(state, action) => {
			switch (action.type) {
				case "UPDATE_LANGUAGE":
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