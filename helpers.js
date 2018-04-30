const axios = require('axios');

const getPlaylistIdFromUrl = (url) => {
	const parsed = getJsonFromUrl(url);
	return parsed.list;
}

const getChannelIdFromUrl = (url = '') => {
	const arr = url.split('/');
	return arr[arr.length - 1];
}

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

const getResultPages = async (url, params) => {

	const resultPages = [];

	// get first one
	await axios
		.get(url)
		.then(res => resultPages.push(res.data))
		.catch(err => console.error(err));

	if (resultPages.length) {
		while (resultPages[resultPages.length - 1].nextPageToken) {

			params.pageToken = resultPages[resultPages.length - 1].nextPageToken

			const url = getApiUrl('search', params)
			const newPage = await axios.get(url).then(res => res.data).catch(err => console.error(err))
			resultPages.push(newPage);

		}
	}

	return resultPages;

}

const getVideosFromPlaylistId = async (playlistId) => {

	const params = {
		playlistId,
		part: 'contentDetails,snippet',
	}

	const url = getApiUrl('playlistItems', params)

	const resultPages = await getResultPages(url, params)

	// video ids in [50, 50, remaining]
	const videoIds = resultPages
		.map(obj =>
			obj.items.map(item =>
				item.contentDetails.videoId
			))

	return videoIds;

}

const getVideosFromChannelId = async (channelId) => {

	let videoIds = [];

	const params = {
		channelId,
	}

	const url = getApiUrl('search', params)

	const resultPages = await getResultPages(url, params);

	if (resultPages.length) {
		// video ids in [50, 50, remaining]
		videoIds = resultPages
			.map(obj =>
				obj.items.map(item =>
					item.id.videoId
				))
	}

	return videoIds;
}

const processVideoIds = async (videoIds) => {

	const videoPromises = videoIds.map(page => {
		const id = page.join(',');
		const url = getApiUrl('videos', { part: 'statistics,snippet,contentDetails', id })
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
	getPlaylistIdFromUrl,
	getChannelIdFromUrl,
	getApiUrl,
	getVideosFromChannelId,
	getVideosFromPlaylistId,
	processVideoIds,
}

module.exports = helpers;






// ********
function getJsonFromUrl(url) {
	var query = url.split('?')[1];
	var result = {};
	query.split("&").forEach(function (part) {
		var item = part.split("=");
		result[item[0]] = decodeURIComponent(item[1]);
	});
	return result;
}