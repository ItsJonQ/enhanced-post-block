import React from 'react';
import { posts as postData } from './data';
import { Bigline, Gridlike, Newspaper } from './components';
import './styles';
import './components/style.scss';
import './App.css';

function App() {
	return (
		<div className="App">
			<Gridlike posts={postData} />
			<Bigline posts={postData} />
			<Newspaper posts={postData} />
		</div>
	);
}

export default App;
