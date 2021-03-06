import React from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';
import 'antd/dist/antd.css';

const App = ({ Component }) => {
	return (
		<>
		<Head>
			<title>NodeBird</title>
		</Head>
			<Component />
		</>
	);
};
App.PropTypes = {
	Component: PropTypes.elementType.isRequired,
}

export default App;