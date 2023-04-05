import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from '@config/AppRoutes';
import { ThemeProvider } from '@theme/index';
import { ContextManager } from '@config/ContextManager';

function App() {
	return (
		<BrowserRouter>
			<ThemeProvider>
				<ContextManager>
					<AppRoutes />
				</ContextManager>
			</ThemeProvider>
		</BrowserRouter>
	);
}

export default App;
