const helpers = require('./helpers');

const { getApiUrl } = helpers;

it('getApiUrl should do just that', () => {

	const params = {
		channelId: 'UCoebwHSTvwalADTJhps0emA',
	}

	const url = getApiUrl('search', params, 'testApiKey')

	expect(url).toBe('https://www.googleapis.com/youtube/v3/search?key=testApiKey&part=snippet&maxResults=50&channelId=UCoebwHSTvwalADTJhps0emA')

})