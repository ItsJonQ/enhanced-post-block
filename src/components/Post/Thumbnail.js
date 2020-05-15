import React from 'react';

export function PostThumbnail({ image, url, title }) {
	if (!image) return null;

	const imageMarkup = <img className="Post__Image" src={image} alt={title} />;

	return (
		<div className="Post__Thumbnail">
			{url ? (
				<a href={url} className="Post__ThumbnailLink Post__Link">
					{imageMarkup}
				</a>
			) : (
				imageMarkup
			)}
		</div>
	);
}
