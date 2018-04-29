import React from 'react';
import axios from 'axios';

import { getApiUrl, getVideosFromChannelId } from '../helpers';

import Layout from '../components/Layout';
import Breadcrumbs from '../components/Breadcrumbs';
import Progress from '../components/Progress';
import Results from '../components/Results';

const apiKey = 'AIzaSyAlAtI54mpJ7iDblL-pisPlQr8F6vmTy0A';

class Search extends React.PureComponent {

	state = {
		videos: [],
		progress: 0,
	}

	static async getInitialProps({ req, query }) {

		const videos = await getVideosFromChannelId('UCoebwHSTvwalADTJhps0emA');

		return { videos }
	}

	componentDidMount = async () => {

		// const { data } = { ...this.props };

		// const totalPages = Math.ceil(data[0].pageInfo.totalResults / data[0].pageInfo.resultsPerPage);

		// while (data[data.length - 1].nextPageToken) {

		// 	const params = {
		// 		channelId: 'UCoebwHSTvwalADTJhps0emA',
		// 		pageToken: data[data.length - 1].nextPageToken,
		// 	}

		// 	const url = getApiUrl('search', params, apiKey)
		// 	const data = await axios.get(url).then(res => res.data)
		// 	const videoIds = data.items.map((item) => item.id.videoId)

		// 	const videoData = await axios.get(url).then(res => res.data)

		// 	data.push(nextData);

		// 	this.setState({
		// 		videoIds,
		// 		progress: data.length / totalPages * 100,
		// 		pagesLeft: totalPages - data.length,
		// 	})
		// }

		// this.setState({ progress: 100, pagesLeft: 0 })

	}



	render() {

		const { progress, data } = this.state;

		return (
			<Layout>
				<Breadcrumbs />
				<Progress progress={progress} />
				<Results data={data} />
			</Layout>
		)
	}
}

export default Search;