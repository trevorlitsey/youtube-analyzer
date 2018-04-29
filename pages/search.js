import React from 'react';
import axios from 'axios';

import Dump from '../components/Dump';

const apiKey = process.env.YOUTUBE_API_KEY;

class Search extends React.PureComponent {

	static async getInitialProps({ req }) {

		const data = await axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=UCoebwHSTvwalADTJhps0emA&maxResults=50&key=${apiKey}`).then(res => res.data)

		return { data }
	}

	render() {

		const { data } = this.props;

		return (
			<Dump data={data} />
		)
	}
}

export default Search;