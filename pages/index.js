

import React from 'react';
import Router from 'next/router'

import Layout from '../components/Layout';
import Form from '../components/Form';
import Footer from '../components/Footer';

import { getPlaylistIdFromUrl, getChannelIdFromUrl } from '../helpers';

class Index extends React.PureComponent {

	handleSubmit = ({ option, text }) => {

		let query;

		switch (option) {
			case 'playlistUrl':
				const playlistId = getPlaylistIdFromUrl(text);
				query = { playlistId }
				break;

			case 'playlistId':
				query = { playlistId: text }
				break;

			case 'channelUrl':
				const channelId = getChannelIdFromUrl(text);
				query = { channelId }
				break;

			case 'channelId':
				query = { channelId: text }
				break;
		}

		console.log(query);


		// all good
		Router.push({
			pathname: '/search',
			query,
		})

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