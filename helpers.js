const axios = require('axios');

const getApiUrl = (section, userParams, apiKey = process.env.YOUTUBE_API_KEY) => {

	const params = {
		part: 'snippet',
		maxResults: 50,
		...userParams,
	}

	const baseUrl = `https://www.googleapis.com/youtube/v3/${section}?key=${apiKey}`

	const paramsUrl = Object.entries(params).map(([key, value]) => {
		return `&${key}=${value}`
	}).join('')

	return baseUrl + paramsUrl;

}

const getVideosFromChannelId = async (channelId) => {
	const params = {
		channelId,
	}

	const url = getApiUrl('search', params)

	const channelPages = [];

	// get first one
	await axios
		.get(url)
		.then(res => channelPages.push(res.data))
		.catch(err => console.error(err));

	while (channelPages[channelPages.length - 1].nextPageToken) {

		params.pageToken = channelPages[channelPages.length - 1].nextPageToken

		const url = getApiUrl('search', params)
		const newPage = await axios.get(url).then(res => res.data).catch(err => console.error(err))
		channelPages.push(newPage);

	}

	// video ids in [50, 50, remaining]
	const videoIds = channelPages
		.map(obj =>
			obj.items.map(item =>
				item.id.videoId
			))

	return videoIds;

}

const getVideoDetails = (ids) => {
	// TODO
}

const helpers = {
	getApiUrl,
	getVideosFromChannelId,
}

module.exports = helpers;