import React from 'react';
import { Section, SectionHeader } from '../Section';
import { Column } from '../Column';
import { Post } from '../Post';

export function Bigline({ posts = [], title = 'Top Stories' }) {
	const columns = mapPostToColumns(posts);

	return (
		<Section className="Bigline">
			<SectionHeader title={title} />
			<div className="Bigline__Grid">
				{columns.map((column, index) => {
					return (
						<Column key={`col-${index}`} index={index}>
							{column.map(({ excerpt, ...post }) => (
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
