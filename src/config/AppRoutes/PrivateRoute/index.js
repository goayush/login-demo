import React from 'react';
import PropTypes from 'prop-types';
import { Navigate } from 'react-router-dom';
import { appRoutes } from '@helper/globalConstants';
import { useAuth } from '@context/Auth';

export function PrivateRoute({ children }) {
	// context
	const { isUserLoggedIn } = useAuth();

	if (!isUserLoggedIn) {
		return <Navigate to={appRoutes.SIGNIN} />;
	}
	return children;
}

PrivateRoute.propTypes = {
	children: PropTypes.node.isRequired,
};

export default PrivateRoute;
