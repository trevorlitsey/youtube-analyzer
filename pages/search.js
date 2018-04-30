import React from 'react';
import axios from 'axios';

import { getApiUrl, getVideosFromChannelId, processVideoIds } from '../helpers';

import Layout from '../components/Layout';
import Breadcrumbs from '../components/Breadcrumbs';
import Progress from '../components/Progress';
import Results from '../components/Results';

class Search extends React.PureComponent {

	static async getInitialProps({ req, query }) {

		const { channelId } = query;

		const videoIds = await getVideosFromChannelId(channelId);
		const videoDetails = await processVideoIds(videoIds)

		return { videoDetails }
	}

	render() {

		const { videoDetails } = this.props;

		return (
			<Layout>
				<Breadcrumbs />
				<h2 style={{ textDecoration: 'underline' }}>{videoDetails[0].snippet.channelTitle}</h2>
				<Results videoDetails={videoDetails} />
			</Layout>
		)
	}
}

export default Search;