import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export function Button({ type, label, to, onClick, className }) {
	if (type === 'link') {
		return (
			<Link to={to}>
				<p className={`transition ${className}`}>{label}</p>
			</Link>
		);
	}

	if (type === 'button') {
		return (
			<button type="button" className={`transition ${className}`} onClick={onClick}>
				{label}
			</button>
		);
	}

	if (type === 'submit') {
		return (
			<button type="submit" className={`w-full rounded bg-white hover:bg-opacity-90 transition text-lg ${className}`}>
				{label}
			</button>
		);
	}
}

Button.propTypes = {
	type: PropTypes.string,
	label: PropTypes.string,
	to: PropTypes.string,
	onClick: PropTypes.func,
	className: PropTypes.string,
};

Button.defaultProps = {
	type: 'submit',
	label: 'Submit',
	to: '',
	onClick: () => {},
	className: '',
};

export default Button;
