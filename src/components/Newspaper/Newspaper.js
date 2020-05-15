import React from 'react';
import styled from '@emotion/styled';
import { Preview as BasePreview } from '../Preview';

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

const PreviewView = styled(BasePreview)`
	display: flex;
	flex-wrap: wrap;
`;

const ColView = styled.div`
	&:nth-child(1),
	&:nth-child(3) {
		width: 20%;
	}
	&:nth-child(2) {
		width: 60%;
		padding: 0 5px;
	}
`;

function Preview() {
	return (
		<PreviewView>
			<ColView>
				<BasePreview.Post height={45} />
				<BasePreview.Post height={15} />
				<BasePreview.Post height={15} />
			</ColView>
			<ColView>
				<BasePreview.Post height={50} />
				<BasePreview.Post height={30} />
			</ColView>
			<ColView>
				<BasePreview.Post height={45} />
				<BasePreview.Post height={15} />
				<BasePreview.Post height={15} />
			</ColView>
		</PreviewView>
	);
}

Newspaper.Preview = Preview;
