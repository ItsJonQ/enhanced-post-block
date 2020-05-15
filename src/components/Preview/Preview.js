import styled from '@emotion/styled';
import { css } from '@emotion/core';

const PreviewView = styled.div`
	box-sizing: border-box;
	background: #ddd;
	width: 180px;
	height: 110px;
	overflow: hidden;
	padding: 10px;

	* {
		box-sizing: border-box;
	}
`;

const PostView = styled.div`
	box-sizing: border-box;
	background: white;
	box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
	border-radius: 2px;
	margin-bottom: 5px;

	${({ height }) => css({ height })}
`;

export const Preview = PreviewView;
Preview.Post = PostView;
