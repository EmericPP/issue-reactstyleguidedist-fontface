import React from 'react';
import PropTypes from 'prop-types';

/**
 * An example-less button.
 */
export default function PushButton({ color, size, children }) {
	let styles = {
		color,
		fontSize: PushButton.sizes[size],
	};

	return (
		<button className={'test'} style={styles}>
			{children}
		</button>
	);
}

PushButton.propTypes = {
	/**
	 * PushButton label.
	 */
	children: PropTypes.string.isRequired,
	color: PropTypes.string,
	size: PropTypes.oneOf(['small', 'normal', 'large']),
};
PushButton.defaultProps = {
	color: '#333',
	size: 'normal',
};
PushButton.sizes = {
	small: '10px',
	normal: '14px',
	large: '18px',
};
