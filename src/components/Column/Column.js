import React from 'react';
import cx from 'classnames';

export function Column({ className, index, children }) {
	const classes = cx('column', `column-${index}`, className);
	return <div className={classes}>{children}</div>;
}
