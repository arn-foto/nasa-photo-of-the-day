import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './Header';
import ImageContainter from './NasaPic';
import Footer from './Footer';
import './App.css';

function App() {
	const [ apiData, setApi ] = useState({});
	const [ setId ] = useState(0);
	const [ projectData, setProjectData ] = useState({});

	useEffect(() => {
		axios
			.get('https://api.nasa.gov/planetary/apod?api_key=cWTK4r9piRG3T6hJgM0P82LKe1qDJ4QChOieFAzv')
			.then((response) => {
				console.log('yay!');
				setApi(response.data);
			})
			.catch((error) => {
				console.log('nope!');
			});
	}, []);

	return (
		<div className="App">
			<ImageContainter apiData={apiData} />
		</div>
	);
}
export default App;
