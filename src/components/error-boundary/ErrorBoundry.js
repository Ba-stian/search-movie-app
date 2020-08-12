import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ErrorIndicator from '../error-indicator/ErrorIndicator';

class ErrorBoundary extends Component {
		state = {
			hasError: false,
		};

		componentDidCatch(error, info) {
			this.setState({ hasError: true });
			// eslint-disable-next-line no-console
			console.log(error, info);
		}

		render() {
			const { hasError } = this.state;
			const { children } = this.props;
			if (hasError) {
				return (
					<ErrorIndicator />
				);
			}
			return children;
		}
}

ErrorBoundary.propTypes = {
	children: PropTypes.node.isRequired,
};

export default ErrorBoundary;
