import React from 'react';
import { Section, SectionHeader } from '../Section';
import { Column } from '../Column';
import { Post } from '../Post';

export function Newspaper({ posts = [], title = 'Top Stories' }) {
	const columns = mapPostToColumns(posts);

	return (
		<Section className="Newspaper">
			<SectionHeader title={title} />
			<div className="Newspaper__Grid">
				{columns.map((column, index) => {
					return (
						<Column key={`col-${index}`} index={index}>
							{column.map((post, postIndex) => (
								<Post key={post.id} {...post}>
									{post.title}
								</Post>
							))}
						</Column>
					);
				})}
			</div>
		</Section>
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
