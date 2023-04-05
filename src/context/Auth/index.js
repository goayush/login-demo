import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import PropTypes from 'prop-types';
import { appRoutes } from '../../helper/globalConstants';

export const AuthContext = createContext();

export function AuthContextProvider({ children }) {
	// state
	const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
	const [userAccounts, setUserAccounts] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	// context
	const navigate = useNavigate();

	// storing data in state on signup form submit
	const signUpInitialValues = {
		name: '',
		email: '',
		password: '',
	};
	const signUpValdations = Yup.object().shape({
		name: Yup.string().min(3, 'Too Short!').max(20, 'Too Long!').required('Required'),
		email: Yup.string().email('Invalid email').required('Required'),
		password: Yup.string().min(8, 'Min 8 char required!').max(20, 'Password too Long!').required('Required'),
	});
	const [signUpForm, setSignUpForm] = useState(signUpInitialValues);

	// storing data in state on signin form submit
	const signInInitialValues = {
		email: '',
		password: '',
	};
	const signInValdations = Yup.object().shape({
		email: Yup.string().email('Invalid email').required('Required'),
		password: Yup.string().min(8, 'Min 8 char required!').max(20, 'Password too Long!').required('Required'),
	});
	const [signInForm, setSignInForm] = useState(signInInitialValues);

	// functions
	// validate form & store account details in local db
	const onSignUpFormSubmit = async (values) => {
		try {
			setIsLoading(true);
			const { name, email, password } = values;

			// check if user is already registered
			const isUserFound = await userAccounts.filter((user) => user.email === email);

			// storing details
			if (isUserFound.length === 0) {
				userAccounts.push({ name, email, password });
				setUserAccounts([...userAccounts]);
				await localStorage.setItem('accounts', JSON.stringify(userAccounts));
				alert('Account created successfully..');
				setIsLoading(false);
				navigate('/auth/signin');
			} else {
				alert('Account already exist!!');
			}

			setIsLoading(false);
			return true;
		} catch (error) {
			console.log(error);
			setIsLoading(false);
			return false;
		}
	};

	// validate form & check account details from local db
	const onSignInFormSubmit = async (values) => {
		try {
			setIsLoading(true);
			const { email, password } = values;

			// check if local db exist user account
			const accounts = JSON.parse(localStorage.getItem('accounts'));

			let isUserFound = [];
			if (accounts === null || accounts === undefined) {
				isUserFound = await userAccounts.filter((user) => user.email === email && user.password === password);
			} else {
				isUserFound = await accounts.filter((user) => user.email === email && user.password === password);
			}

			if (isUserFound.length > 0) {
				const username = isUserFound[0].name;
				await localStorage.setItem('activeUser', JSON.stringify({ name: username, email }));
				setIsUserLoggedIn(true);
				alert('Login successfull..');
				setIsLoading(false);
				navigate('/');
			} else {
				alert('Account not found!!');
			}

			setIsLoading(false);
			return true;
		} catch (error) {
			console.log(error);
			setIsLoading(false);
			return false;
		}
	};

	const onSignOut = async () => {
		await localStorage.removeItem('activeUser');
		await setIsUserLoggedIn(false);
		await navigate(appRoutes.SIGNIN);
	};

	// hooks
	useEffect(() => {
		const isActiveUser = JSON.parse(localStorage.getItem('activeUser'));
		if (isActiveUser) {
			setIsUserLoggedIn(true);
		}
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
			signInForm,
			setSignInForm,

			// form initial states & validations
			signUpInitialValues,
			signUpValdations,
			signInInitialValues,
			signInValdations,

			// functions
			onSignUpFormSubmit,
			onSignInFormSubmit,
			onSignOut,
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
			signInForm,
			setSignInForm,

			// form initial states & validations
			signUpInitialValues,
			signUpValdations,
			signInInitialValues,
			signInValdations,

			// functions
			onSignUpFormSubmit,
			onSignInFormSubmit,
			onSignOut,
		]
	);

	return <AuthContext.Provider value={contextPayload}>{children}</AuthContext.Provider>;
}

AuthContextProvider.propTypes = {
	children: PropTypes.node.isRequired,
};

export const useAuth = () => useContext(AuthContext);

export default AuthContext;
