

import React from 'react';

import Layout from '../components/Layout';
import Form from '../components/Form';
import Footer from '../components/Footer';

import '../css/foundation.min.css';

class Index extends React.PureComponent {
	render() {
		return (
			<Layout>
				<Form />
				<Footer />
			</Layout>
		)
	}
}

export default Index;