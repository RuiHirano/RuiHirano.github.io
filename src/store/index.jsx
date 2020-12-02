import React from 'react'
import { AppProvider } from './app'

const StoreProvider = ({ children }) => {

	return (
		<AppProvider>
			{children}
		</AppProvider>
	)
}

export default StoreProvider