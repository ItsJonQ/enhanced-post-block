import React from 'react';

export function PostTitle({ title, url }) {
	if (!title) return null;

	return (
		<h2 className="post__title">
			{url ? (
				<a href={url} className="post__title-link post__link">
					{title}
				</a>
			) : (
				title
			)}
		</h2>
	);
}
