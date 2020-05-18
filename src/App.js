import React, { useState, useLayoutEffect } from 'react';
import styled from '@emotion/styled';
import ViewportFrame from 'react-viewport-frame';
import { startCase } from 'lodash';
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
			<BodyView>
				<ContentView>
					<ViewportFrame height={initialHeight}>
						<style>{frameStyles}</style>
						<PostDisplayComponent posts={postData} />
					</ViewportFrame>
				</ContentView>
				<PreviewView>
					{postDisplayTypes.map((displayType) => {
						const DisplayTypePreview =
							postDisplayTypeComponents[displayType].Preview;
						const isSelected = postDisplayType === displayType;

						return (
							<DisplayItemView
								key={displayType}
								onClick={() => setPostDisplayType(displayType)}
							>
								<DisplayPreviewWrapperView
									isSelected={isSelected}
								>
									<DisplayTypePreview />
								</DisplayPreviewWrapperView>
								<div>
									<strong>{startCase(displayType)}</strong>
								</div>
							</DisplayItemView>
						);
					})}
				</PreviewView>
			</BodyView>
			<SettingsView>Sidebar Settings</SettingsView>
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
	max-width: calc(100vw - 265px);
	margin: 0 auto;

	> div > div:last-child > div {
		max-height: calc(100vh - 240px);
	}
`;

const PreviewView = styled.div`
	margin-top: 20px;
	padding: 20px;
	border-top: 1px solid #ddd;
	overflow-x: auto;
	width: 100%;
	min-height: 160px;
	display: flex;
`;

const SettingsView = styled.div`
	padding: 20px;
	border-left: 1px solid #ddd;
	overflow-y: auto;
	width: 265px;
`;

const DisplayItemView = styled.button`
	appearance: none;
	border: none;
	font-size: inherit;
	background: none;
	outline: none;
	padding: 0;
	margin: 0 1em 1em 0;
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
