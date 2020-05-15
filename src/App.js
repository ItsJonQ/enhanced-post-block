import React, { useState } from 'react';
import styled from '@emotion/styled';
import { posts as postData } from './data';
import { Bigline, Gridlike, Newspaper } from './components';
import './styles';
import './components/style.scss';
import './App.css';

const postDisplayTypeComponents = {
	newspaper: Newspaper,
	bigline: Bigline,
	gridlike: Gridlike,
};

const postDisplayTypes = Object.keys(postDisplayTypeComponents);

function App() {
	const [postDisplayType, setPostDisplayType] = useState(postDisplayTypes[0]);
	const PostDisplayComponent = postDisplayTypeComponents[postDisplayType];

	return (
		<WrapperView>
			<SidebarView>
				{postDisplayTypes.map((displayType) => {
					const DisplayTypePreview =
						postDisplayTypeComponents[displayType].Preview;
					const isSelected = postDisplayType === displayType;

					return (
						<DisplayItemView
							key={displayType}
							onClick={() => setPostDisplayType(displayType)}
						>
							<DisplayPreviewWrapperView isSelected={isSelected}>
								<DisplayTypePreview />
							</DisplayPreviewWrapperView>
							<h5>{displayType}</h5>
						</DisplayItemView>
					);
				})}
			</SidebarView>
			<BodyView>
				<ContentView>
					<PostDisplayComponent posts={postData} />
				</ContentView>
			</BodyView>
		</WrapperView>
	);
}

const WrapperView = styled.div`
	height: 100vh;
	display: flex;
	box-sizing: border-box;

	* {
		box-sizing: border-box;
	}
`;

const BodyView = styled.div`
	padding: 20px;
	overflow-y: auto;
	flex: 1;
`;

const ContentView = styled.div`
	max-width: 1200px;
	margin: 0 auto;
`;

const SidebarView = styled.div`
	padding: 20px;
	border-right: 1px solid #ddd;
	overflow-y: auto;
	width: 300px;
`;

const DisplayItemView = styled.button`
	appearance: none;
	margin-bottom: 1em;
	border: none;
	font-size: inherit;
	background: none;
`;

const DisplayPreviewWrapperView = styled.div`
	display: inline-block;
	${({ isSelected }) =>
		isSelected &&
		`
		box-shadow: 0 0 0 2px blue;
	`}
`;

export default App;
