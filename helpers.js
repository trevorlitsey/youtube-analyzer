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

const helpers = {
	getApiUrl,
}

module.exports = helpers;