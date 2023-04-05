import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';
import * as Yup from 'yup';
import PropTypes from 'prop-types';

export const AuthContext = createContext();

export function AuthContextProvider({ children }) {
	// state
	const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
	const [userAccounts, setUserAccounts] = useState({});
	const [isLoading, setIsLoading] = useState(true);

	// storing data on signup form submit
	const signUpInitialValues = {
		name: '',
		email: '',
		password: '',
	};
	const signUpValdations = Yup.object().shape({
		name: Yup.string().min(2, 'Too Short!').max(20, 'Too Long!').required('Required'),
		email: Yup.string().email('Invalid email').required('Required'),
		password: Yup.string().min(8, 'Min 8 char required!').max(20, 'Password too Long!').required('Required'),
	});
	const [signUpForm, setSignUpForm] = useState(signUpInitialValues);

	// functions
	const onSignUpFormSubmit = async (values) => {
		// validate form & store account details in local db
		try {
			setIsLoading(true);
			const params = values;
			console.log(params);
			setIsLoading(false);
			return params;
		} catch (error) {
			console.log(error);
			setIsLoading(false);
			return false;
		}
	};

	// hooks
	useEffect(() => {
		console.log(isUserLoggedIn);
	}, [isUserLoggedIn]);

	// wraping stuff in useMemo
	const contextPayload = useMemo(
		() => ({
			// states
			isUserLoggedIn,
			setIsUserLoggedIn,
			userAccounts,
			setUserAccounts,
			isLoading,
			setIsLoading,

			// form states
			signUpForm,
			setSignUpForm,

			// form initial states & validations
			signUpInitialValues,
			signUpValdations,

			// functions
			onSignUpFormSubmit,
		}),
		[
			// states
			isUserLoggedIn,
			setIsUserLoggedIn,
			userAccounts,
			setUserAccounts,
			isLoading,
			setIsLoading,

			// form states
			signUpForm,
			setSignUpForm,

			// form initial states & validations
			signUpInitialValues,
			signUpValdations,

			// functions
			onSignUpFormSubmit,
		]
	);

	return <AuthContext.Provider value={contextPayload}>{children}</AuthContext.Provider>;
}

AuthContextProvider.propTypes = {
	children: PropTypes.node.isRequired,
};

export const useAuth = () => useContext(AuthContext);

export default AuthContext;
