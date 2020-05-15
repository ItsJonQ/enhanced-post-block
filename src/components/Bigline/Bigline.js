import React from 'react';
import { SectionHeader } from '../Section';
import { Column } from '../Column';
import { Post } from '../Post';

export function Bigline({ posts = [], title = 'Top Stories' }) {
	const columns = mapPostToColumns(posts);

	return (
		<div className="bigline">
			<SectionHeader title={title} />
			<div className="bigline__grid">
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
		if (index > 4) return collection;
		const chunk = index === 0 ? 0 : 1;

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
