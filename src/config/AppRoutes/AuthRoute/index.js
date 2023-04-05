import React from 'react';
import PropTypes from 'prop-types';
import { Navigate } from 'react-router-dom';
import { appRoutes } from '@helper/globalConstants';
import { useAuth } from '@context/Auth';

export function AuthRoute({ children }) {
	// context
	const { isUserLoggedIn } = useAuth();

	if (isUserLoggedIn) {
		return <Navigate to={appRoutes.HOME} />;
	}
	return children;
}

AuthRoute.propTypes = {
	children: PropTypes.node.isRequired,
};

export default AuthRoute;
