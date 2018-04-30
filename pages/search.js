import React from 'react';
import axios from 'axios';
import Router from 'next/router'

import { getApiUrl, getVideosFromChannelId, processVideoIds, getVideosFromPlaylistId } from '../helpers';

import Layout from '../components/Layout';
import BadRequest from '../components/BadRequest';
import Breadcrumbs from '../components/Breadcrumbs';
import Progress from '../components/Progress';
import Results from '../components/Results';

class Search extends React.PureComponent {

	static async getInitialProps({ req, query }) {

		let videoIds;
		let videoDetails;

		const { channelId, playlistId } = query;

		if (channelId) {
			videoIds = await getVideosFromChannelId(channelId);
		} else if (playlistId) {
			videoIds = await getVideosFromPlaylistId(playlistId);
		}

		// uh oh
		if (!videoIds) {
			return {}
		}

		videoDetails = await processVideoIds(videoIds);

		return { videoDetails }
	}

	render() {

		const { videoDetails, url } = this.props;

		if (!videoDetails.length) {
			// bad request!
			return (
				<Layout>
					<BadRequest query={url.query.channelId || url.query.playlistId} />
				</Layout>
			)
		}

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