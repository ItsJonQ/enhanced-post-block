import React from 'react';

export function PostTitle({ title, url }) {
	if (!title) return null;

	return (
		<h2 className="Post__Title">
			{url ? (
				<a href={url} className="Post__Title-link Post__Link">
					{title}
				</a>
			) : (
				title
			)}
		</h2>
	);
}
