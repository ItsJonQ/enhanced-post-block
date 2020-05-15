import React from 'react';
import { posts as postData } from './data';
import { Newspaper } from './components';
import './styles';

function App() {
	return (
		<div className="App">
			<Newspaper posts={postData} />
		</div>
	);
}

export default App;
