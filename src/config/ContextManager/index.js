import React from 'react';
import PropTypes from 'prop-types';
import { AuthContextProvider } from '@context/Auth';

export function ContextManager({ children }) {
	return <AuthContextProvider>{children}</AuthContextProvider>;
}

ContextManager.propTypes = {
	children: PropTypes.node.isRequired,
};

export default ContextManager;
