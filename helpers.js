


export const getApiUrl = (section, userParams) => {

	const params = {
		part: 'snippet',
		apiKey: process.env.YOUTUBE_API_KEY,
		maxResults: 50,
		...userParams,
	}

	const baseUrl = 'https://www.googleapis.com/youtube/v3/';

	const url = Object.entries(([key, value], acc) => {
		acc += '&' + key + '=' + value
	}, baseUrl + section + '?' + apiKey)

	return url;

}