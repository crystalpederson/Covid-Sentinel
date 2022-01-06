import React, { useState } from 'react';
import Homepage from './Homepage';
import Loader from './Spinner';
import Footer from './Footer';

const App = () => {
	const [loading, setLoading] = useState(true);

	return (
		<>
			{loading ? <Loader /> : ' '}

			<h1>Hello there</h1>
			<Homepage />
			<Footer />
		</>
	);
};

export default App;
