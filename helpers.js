const axios = require('axios');

const getApiUrl = (section, userParams, apiKey = 'AIzaSyAlAtI54mpJ7iDblL-pisPlQr8F6vmTy0A') => {

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

const processVideoIds = async (videoIds) => {

	const videoPromises = videoIds.map(page => {
		const id = page.join(',');
		const url = getApiUrl('videos', { part: 'statistics', id })
		return axios.get(url)
	})

	const res = await Promise.all(videoPromises);

	const videoDetails = [];
	res
		.map(res => res.data)
		.map(res => res.items)
		.forEach(page => videoDetails.push(...page));

	return videoDetails
}

const helpers = {
	getApiUrl,
	getVideosFromChannelId,
	processVideoIds,
}

module.exports = helpers;