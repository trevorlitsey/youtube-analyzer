// @flow

import React from 'react';
import { secondsToHms } from './helpers';

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
			<h4>Totals</h4>
			<table>
				<thead>
					<tr>
						<th>Total videos</th>
						<th>Total views</th>
						<th>Total duration</th>
						<th>Total comments</th>
						<th>Total likes</th>
						<th>Total dislikes</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>{totalVideos && totalVideos.toLocaleString()}</td>
						<td>{viewCount && viewCount.toLocaleString()}</td>
						<td>{duration && secondsToHms(Math.round(duration))}</td>
						<td>{commentCount && commentCount.toLocaleString()}</td>
						<td>{likeCount && likeCount.toLocaleString()}</td>
						<td>{dislikeCount && dislikeCount.toLocaleString()}</td>
					</tr>
				</tbody>
			</table>
		</div>
	)
}

export default VideoTotals;