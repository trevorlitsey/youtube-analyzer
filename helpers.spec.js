const helpers = require('./helpers');

const { getPlaylistIdFromUrl, getApiUrl } = helpers;

it('should get playlist id from url', () => {
	const url = 'https://www.youtube.com/watch?v=yznVkCuohGg&list=PLu8EoSxDXHP5CIFvt9-ze3IngcdAc2xKG&index=4'
	const id = getPlaylistIdFromUrl(url);
	expect(id).toBe('PLu8EoSxDXHP5CIFvt9-ze3IngcdAc2xKG')
})

it('getApiUrl should do just that', () => {

	const params = {
		channelId: 'UCoebwHSTvwalADTJhps0emA',
	}

	const url = getApiUrl('search', params, 'testApiKey')

	expect(url).toBe('https://www.googleapis.com/youtube/v3/search?key=testApiKey&part=snippet&maxResults=50&channelId=UCoebwHSTvwalADTJhps0emA')

})