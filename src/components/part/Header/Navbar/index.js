import React from 'react';
import { Container } from '@core/layout';
import { Link } from 'react-router-dom';
import { appRoutes } from '@helper/globalConstants';
import { Button } from '@core/util';
import { useAuth } from '@context/Auth';

export default function Navbar() {
	// context
	const { isUserLoggedIn, onSignOut } = useAuth();

	return (
		<div className="bg-secondary shadow-md shadow-black">
			<Container className="p-3">
				<div className="flex justify-between items-center text-white">
					<div>
						<Link to={appRoutes.HOME}>
							<p className="text-yellowSubtle text-2xl">Demo App</p>
						</Link>
					</div>
					<div>
						{isUserLoggedIn ? (
							<Button type="button" label="Logout" onClick={onSignOut} />
						) : (
							<Button type="link" label="Login" to={appRoutes.SIGNIN} />
						)}
					</div>
				</div>
			</Container>
		</div>
	);
}
