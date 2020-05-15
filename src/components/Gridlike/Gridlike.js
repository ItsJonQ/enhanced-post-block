import React from 'react';
import { Section, SectionHeader } from '../Section';
import { Post } from '../Post';

export function Gridlike({ posts = [], title = 'Top Stories' }) {
	const entries = mapPostToEntries(posts);

	return (
		<Section className="Gridlike">
			<SectionHeader title={title} />
			<div className="Gridlike__Grid">
				{entries.map(({ excerpt, ...post }) => {
					return (
						<Post key={post.id} {...post}>
							{post.title}
						</Post>
					);
				})}
			</div>
		</Section>
	);
}

function mapPostToEntries(posts = []) {
	return posts.reduce((collection, post, index) => {
		if (index > 6) return collection;

		const postData = {
			...post,
			postIndex: index,
		};

		return [...collection, postData];
	}, []);
}
