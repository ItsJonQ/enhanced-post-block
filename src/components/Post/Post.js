import React from 'react';
import cx from 'classnames';
import { PostThumbnail } from './Thumbnail';
import { PostTitle } from './Title';

export function Post({ className, children, title, excerpt, image, url }) {
	const classes = cx('post', className);

	return (
		<div className={classes}>
			<PostThumbnail image={image} url={url} title={title} />
			<div className="post__content">
				<PostTitle url={url} title={title} />
				<p className="post__excerpt">{excerpt}</p>
			</div>
		</div>
	);
}
