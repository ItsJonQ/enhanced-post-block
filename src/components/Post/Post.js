import React from 'react';
import cx from 'classnames';
import { PostThumbnail } from './Thumbnail';
import { PostTitle } from './Title';

export function Post({ className, title, excerpt, image, postIndex = 0, url }) {
	const classes = cx('Post', `Post-${postIndex}`, className);

	return (
		<div className={classes}>
			<PostThumbnail image={image} url={url} title={title} />
			<div className="Post__Content">
				<PostTitle url={url} title={title} />
				<p className="Post__Excerpt">{excerpt}</p>
			</div>
		</div>
	);
}
