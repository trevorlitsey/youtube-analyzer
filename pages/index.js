

import React from 'react';
import Router from 'next/router'

import Layout from '../components/Layout';
import Form from '../components/Form';
import Footer from '../components/Footer';

import '../css/foundation.min.css';

class Index extends React.PureComponent {

	handleSubmit = ({ option, text }) => {

		switch (option) {
			case 'playlistUrl':

			case 'channelUrl':

			case 'channelId':
				Router.push({
					pathname: '/search',
					query: { channelId: text }
				})

			case 'playlistId':

		}
	}

	render() {
		return (
			<Layout>
				<Form handleSubmit={this.handleSubmit} />
				<Footer />
			</Layout>
		)
	}
}

export default Index;