// @flow

import React from 'react';
import { secondsToHms, tableMediaQueries } from './helpers';

type Props = {
	totalVideos: number,
	viewCount: number,
	duration: number,
	commentCount: number,
	likeCount: number,
	dislikeCount: number,
}

const VideoTotals = (props: Props) => {

	const { totalVideos, viewCount, duration, commentCount, likeCount, dislikeCount } = props;

	return (
		<div>
			<div className="container">
				<h4>Totals</h4>
				<p className="info">expand window to see more stats --></p>
			</div>
			<table>
				<thead>
					<tr>
						<th>Total videos</th>
						<th>Total views</th>
						<th>Total duration</th>
						<th className="break-point-sm">Total comments</th>
						<th className="break-point-md">Total likes</th>
						<th className="break-point-lg">Total dislikes</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>{totalVideos ? totalVideos.toLocaleString() : '–'}</td>
						<td>{viewCount ? viewCount.toLocaleString() : '–'}</td>
						<td>{duration ? secondsToHms(Math.round(duration)) : '–'}</td>
						<td className="break-point-sm">{commentCount ? commentCount.toLocaleString() : '–'}</td>
						<td className="break-point-md">{likeCount ? likeCount.toLocaleString() : '–'}</td>
						<td className="break-point-lg">{dislikeCount ? dislikeCount.toLocaleString() : '–'}</td>
					</tr>
				</tbody>
			</table>
			<style jsx>{`
				.container {
					display: flex;
					justify-content: space-between;	
				}

				.info {
					color: gray;
				}

				@media (min-width: 700px) {
					.info {
						display: none;
					}
				}

			`}</style>
			{tableMediaQueries}
		</div>
	)
}

export default VideoTotals;