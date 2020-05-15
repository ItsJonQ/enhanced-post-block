import React from 'react';

export function PostThumbnail({ image, url, title }) {
	if (!image) return null;

	const imageMarkup = <img className="post__image" src={image} alt={title} />;

	return (
		<div className="post__thumbnail">
			{url ? (
				<a href={url} className="post__thumbnail-link post__link">
					{imageMarkup}
				</a>
			) : (
				imageMarkup
			)}
		</div>
	);
}
