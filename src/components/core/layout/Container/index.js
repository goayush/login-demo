import React from 'react';
import PropTypes from 'prop-types';

export function Container({ children, className }) {
	return <div className={`max-w-screen-xl mx-auto ${className}`}>{children}</div>;
}

Container.propTypes = {
	children: PropTypes.node.isRequired,
	className: PropTypes.string,
};
Container.defaultProps = {
	className: '',
};

export default Container;
