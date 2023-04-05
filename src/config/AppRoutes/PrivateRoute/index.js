import React from 'react';
import PropTypes from 'prop-types';
import { Navigate } from 'react-router-dom';
import { appRoutes } from '@helper/globalConstants';

export function PrivateRoute({ children }) {
	const isUserLoggedIn = false;
	if (!isUserLoggedIn) {
		return <Navigate to={appRoutes.SIGNIN} />;
	}
	return children;
}

PrivateRoute.propTypes = {
	children: PropTypes.node.isRequired,
};

export default PrivateRoute;
