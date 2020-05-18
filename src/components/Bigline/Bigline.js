import React from 'react';
import styled from '@emotion/styled';
import { Preview as BasePreview } from '../Preview';

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

const PreviewView = styled(BasePreview)`
	display: flex;
	flex-wrap: wrap;
`;

const ColView = styled.div`
	&:first-child {
		width: 65%;
		padding-right: 10px;
	}
	&:last-child {
		width: 35%;
	}
`;

function Preview() {
	return (
		<PreviewView>
			<ColView>
				<BasePreview.Post height={10} />
				<BasePreview.Post height={45} />
			</ColView>
			<ColView>
				<BasePreview.Post height={10} />
				<BasePreview.Post height={10} />
				<BasePreview.Post height={10} />
				<BasePreview.Post height={10} />
			</ColView>
		</PreviewView>
	);
}

Bigline.Preview = Preview;
