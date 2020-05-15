import React from 'react';
import cx from 'classnames';

export function Column({ className, index, children }) {
	const classes = cx('col', `col-${index}`, className);
	return <div className={classes}>{children}</div>;
}
