import React, { PropTypes } from 'react';

const Button = ( props ) => {

	const { label, onClick } = props;

	return <button onClick={onClick || null} >{ label }</button>;

};

Button.propTypes = {
	label: PropTypes.string.isRequired,
	onClick: PropTypes.func,
};

Button.defaultProps = {
	label: 'Test..',
};

export default Button;
