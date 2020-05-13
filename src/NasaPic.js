import React from 'react';

const imageContainter = (props) => {
	const { apiData } = props;

	return (
		<section className="NasaPic">
			<div>
				<p>NASA Photo of the day 🚀</p>
			</div>
			<div>
				<img src={apiData.hdurl} />
			</div>
			<div>
				<h2>{apiData.title}</h2>
				<p>{apiData.explanation}</p>
			</div>
		</section>
	);
};

export default imageContainter;
