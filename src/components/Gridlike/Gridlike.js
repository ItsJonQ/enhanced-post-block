import React from 'react';
import styled from '@emotion/styled';
import { Preview as BasePreview } from '../Preview';

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

const PreviewView = styled(BasePreview)`
	display: flex;
	flex-wrap: wrap;
`;

const ColView = styled.div`
		padding: 0 2px;
		width: calc(100% / 3);

		&:nth-child(1),
		&:nth-child(4) {
			width: calc(2 / 3 * 100%);
		}
	}
`;

function Preview() {
	return (
		<PreviewView>
			<ColView>
				<BasePreview.Post height={26} />
			</ColView>
			<ColView>
				<BasePreview.Post height={26} />
			</ColView>
			<ColView>
				<BasePreview.Post height={26} />
			</ColView>
			<ColView>
				<BasePreview.Post height={26} />
			</ColView>
			<ColView>
				<BasePreview.Post height={26} />
			</ColView>
			<ColView>
				<BasePreview.Post height={26} />
			</ColView>
			<ColView>
				<BasePreview.Post height={26} />
			</ColView>
		</PreviewView>
	);
}

Gridlike.Preview = Preview;
