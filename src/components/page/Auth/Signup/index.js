import React from 'react';
import { Formik } from 'formik';
import { Container } from '@core/layout';
import { Text } from '@core/input';
import { Button } from '@core/util';
import { appRoutes } from '@helper/globalConstants';
import { useAuth } from '@context/Auth';

export function Signup() {
	// context
	const { signUpInitialValues, signUpValdations, onSignUpFormSubmit } = useAuth();
	return (
		<div className="fixed inset-0 bg-primary -z-10 flex justify-center items-center">
			<Container>
				<Formik initialValues={signUpInitialValues} validationSchema={signUpValdations} onSubmit={onSignUpFormSubmit}>
					{({ values: { name, email, password }, errors, touched, handleChange, handleBlur, handleSubmit }) => (
						<form className="bg-secondary rounded p-6 w-80 space-y-6" onSubmit={handleSubmit}>
							<h1 className="text-yellowSubtle text-center text-xl font-semibold">Sign Up</h1>
							<Text
								className="bg-transparent"
								placeholder="Name"
								id="name"
								name="name"
								value={name}
								onChange={handleChange}
								onBlur={handleBlur}
							/>
							{errors.name && touched.name ? <span className="text-red-300">{errors.name}</span> : null}
							<Text
								className="bg-transparent"
								placeholder="Email"
								id="email"
								name="email"
								value={email}
								onChange={handleChange}
								onBlur={handleBlur}
							/>
							{errors.email && touched.email ? <span className="text-red-300">{errors.email}</span> : null}
							<Text
								type="password"
								className="bg-transparent"
								placeholder="Password"
								id="password"
								name="password"
								value={password}
								onChange={handleChange}
								onBlur={handleBlur}
							/>
							{errors.password && touched.password ? <span className="text-red-300">{errors.password}</span> : null}
							<Button type="submit" label="Register" />

							<div className="flex justify-end text-sm">
								<Button type="link" label="Signin" to={appRoutes.SIGNIN} className="text-darkSubtle hover:text-white" />
							</div>
						</form>
					)}
				</Formik>
			</Container>
		</div>
	);
}

export default Signup;
