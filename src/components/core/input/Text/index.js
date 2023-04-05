import React, { useState } from 'react';
import PropTypes from 'prop-types';

export function Text({ type, placeholder, id, name, value, onChange, onKeyDown, inputRef, className }) {
	const [isPasswordVisible, setIsPasswordVisible] = useState(false);

	if (type === 'password') {
		return (
			<div className="space-y-3">
				<input
					type={isPasswordVisible ? 'text' : 'password'}
					placeholder={placeholder}
					id={id}
					name={name}
					className={`rounded outline-none border-2 border-darkSubtle focus:border-white transition w-full p-1 text-white ${className}`}
				/>
				<div className="flex space-x-3 text-darkSubtle text-sm">
					<input type="checkbox" onClick={() => setIsPasswordVisible(!isPasswordVisible)} />
					<p>Show Password</p>
				</div>
			</div>
		);
	}

	if (type === 'otp') {
		return (
			<input
				type="number"
				value={value === undefined || value === null ? '' : value}
				onChange={onChange}
				onKeyDown={onKeyDown}
				ref={inputRef}
				className={`rounded outline-none border-2 border-darkSubtle focus:border-white transition w-full p-1 text-white number-input-style ${className}`}
			/>
		);
	}

	return (
		<input
			type={type}
			placeholder={placeholder}
			id={id}
			name={name}
			className={`rounded outline-none border-2 border-darkSubtle focus:border-white transition w-full p-1 text-white ${className}`}
		/>
	);
}

Text.propTypes = {
	type: PropTypes.string,
	placeholder: PropTypes.string,
	id: PropTypes.string,
	name: PropTypes.string,
	value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	onChange: PropTypes.func,
	onKeyDown: PropTypes.func,
	inputRef: PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
	className: PropTypes.string,
};

Text.defaultProps = {
	type: 'text',
	placeholder: '',
	id: '',
	name: '',
	value: '',
	onChange: () => {},
	onKeyDown: () => {},
	inputRef: {},
	className: '',
};

export default Text;
