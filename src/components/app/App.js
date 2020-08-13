import React from 'react';
import './app.css';
import { Provider } from 'react-redux';
import ErrorBoundary from '../error-boundary/ErrorBoundry';
import store from '../../redux/store';
import AppRouter from '../app-router/AppRouter';

const App = () => (
	<>
		<Provider store={store}>
			<ErrorBoundary>
				<AppRouter />
			</ErrorBoundary>
		</Provider>
	</>
);

export default App;
