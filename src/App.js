import React, { useState, useLayoutEffect } from 'react';
import styled from '@emotion/styled';
import ViewportFrame from 'react-viewport-frame';
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
	const [frameStyles, setFrameStyles] = useState('');

	useLayoutEffect(() => {
		const styles = [];
		const stylesheets = Object.values(document.styleSheets);
		stylesheets.forEach((sheet) => {
			Object.values(sheet.cssRules).forEach((rule) => {
				styles.push(rule.cssText);
			});
		});

		const compiledStyles = styles.join('\n');
		setFrameStyles(compiledStyles);
	}, []);

	const initialHeight = window.innerHeight * 0.8;

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
					<ViewportFrame height={initialHeight}>
						<style>{frameStyles}</style>
						<PostDisplayComponent posts={postData} />
					</ViewportFrame>
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
	flex: 1;
`;

const ContentView = styled.div`
	max-width: calc(100vw - 240px);
	margin: 0 auto;
`;

const SidebarView = styled.div`
	padding: 20px;
	border-right: 1px solid #ddd;
	overflow-y: auto;
	width: 240px;
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
