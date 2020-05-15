import React from 'react';
import { posts as postData } from './data';
import { Bigline, Newspaper } from './components';
import './styles';
import './components/style.scss';
import './App.css';

function App() {
	return (
		<div className="App">
			<Bigline posts={postData} />
			<Newspaper posts={postData} />
		</div>
	);
}

export default App;
