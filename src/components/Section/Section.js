import React from 'react';
import cx from 'classnames';

export function Section({ className, children }) {
	const classes = cx('Section', className);
	return <div className={classes}>{children}</div>;
}
