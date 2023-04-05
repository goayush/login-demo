import React from 'react';
import { Container } from '@core/layout';
import { Text } from '@core/input';
import { Button } from '@core/util';
import { appRoutes } from '@helper/globalConstants';

export function Signup() {
	return (
		<div className="fixed inset-0 bg-primary -z-10 flex justify-center items-center">
			<Container>
				<form className="bg-secondary rounded p-6 w-80 space-y-6">
					<h1 className="text-yellowSubtle text-center text-xl font-semibold">Sign Up</h1>

					<Text className="bg-transparent" placeholder="Name" />
					<Text className="bg-transparent" placeholder="Email" />
					<Text type="password" className="bg-transparent" placeholder="Password" />
					<Button label="Register" />

					<div className="flex justify-end text-sm">
						<Button type="link" label="Signin" to={appRoutes.SIGNIN} className="text-darkSubtle hover:text-white" />
					</div>
				</form>
			</Container>
		</div>
	);
}

export default Signup;
