import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home, PageNotFound } from '@page/index';
import { Signin, Signup } from '@page/Auth';
import { appRoutes } from '@helper/globalConstants';
import { PrivateRoute } from '@config/AppRoutes/PrivateRoute';
import { AuthRoute } from '@config/AppRoutes/AuthRoute';
import { Header } from '@part/index';

export function AppRoutes() {
	return (
		<>
			<Header />
			<Routes>
				{/* Auth Routes */}
				<Route
					path={appRoutes.SIGNIN}
					element={
						<AuthRoute>
							<Signin />
						</AuthRoute>
					}
				/>
				<Route
					path={appRoutes.SIGNUP}
					element={
						<AuthRoute>
							<Signup />
						</AuthRoute>
					}
				/>

				{/* Private Routes */}
				<Route
					path={appRoutes.HOME}
					element={
						<PrivateRoute>
							<Home />
						</PrivateRoute>
					}
				/>

				{/* Public Routes */}
				<Route path={appRoutes.PAGE_NOT_FOUND} element={<PageNotFound />} />
				<Route path="*" element={<PageNotFound />} />
			</Routes>
		</>
	);
}

export default AppRoutes;
