import React from 'react';
import { Container } from '@core/layout';
import { Link } from 'react-router-dom';
import { appRoutes } from '@helper/globalConstants';
import { Button } from '@core/util';

export default function Navbar() {
	return (
		<div className="bg-secondary shadow-md shadow-black">
			<Container className="p-3">
				<div className="flex justify-between items-center text-white">
					<div>
						<Link to={appRoutes.HOME}>
							<p className="text-yellowSubtle">Demo App</p>
						</Link>
					</div>
					<div>
						<Button type="link" label="Login" to={appRoutes.SIGNIN} />
					</div>
				</div>
			</Container>
		</div>
	);
}
