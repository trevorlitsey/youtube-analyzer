// @flow

export type Video = {
	id: string,
	channelTitle: string,
	title: string,
	publishedAt: string,
	viewCount: number,
	duration: string,
	commentCount: number,
	likeCount: number,
	dislikeCount: number,
}

export type RecentSearchItem = {
	id: string,
	channelTitle: string,
	type: string,
	date: number,
}

export type RecentSearches = {
	[id: string]: RecentSearchItem
}