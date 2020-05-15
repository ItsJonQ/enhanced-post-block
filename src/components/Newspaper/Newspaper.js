import React from 'react';
import { Column } from '../Column';
import { Post } from '../Post';

export function Newspaper({ posts = [], title = 'Top Stories' }) {
	const columns = mapPostToColumns(posts);

	return (
		<div className="newspaper">
			{title && (
				<header className="newspaper__header">
					<h2 className="newspaper__title">{title}</h2>
				</header>
			)}
			<div className="newspaper__grid">
				{columns.map((column, index) => {
					return (
						<Column key={`col-${index}`} index={index}>
							{column.map((post, postIndex) => (
								<Post
									key={post.id}
									className={`post-${post.postIndex}`}
									{...post}
								>
									{post.title}
								</Post>
							))}
						</Column>
					);
				})}
			</div>
		</div>
	);
}

function mapPostToColumns(posts = []) {
	return posts.reduce((collection, post, index) => {
		if (index > 7) return collection;
		const chunk = Math.round(index / 3);

		if (!collection[chunk]) {
			collection[chunk] = [];
		}

		const postData = {
			...post,
			postIndex: index,
		};
		collection[chunk].push(postData);

		return collection;
	}, []);
}
