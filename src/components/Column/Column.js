import React from 'react';
import cx from 'classnames';

export function Column({ className, index, children }) {
	const classes = cx('Column', `Column-${index}`, className);
	return <div className={classes}>{children}</div>;
}
