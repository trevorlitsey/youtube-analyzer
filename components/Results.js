import React from 'react';
import { parse, toSeconds } from 'iso8601-duration';

import { secondsToHms } from './helpers';

const Results = (props) => {

	const { videoDetails } = props;

	if (!videoDetails) {
		return (
			<p>no data yet</p>
		)
	}

	const statistics = {
		viewCount: 0,
		commentCount: 0,
		likeCount: 0,
		dislikeCount: 0,
	}

	videoDetails.forEach((video) => {
		Object.entries(video.statistics).forEach(([key, value]) => {
			statistics[key] = statistics[key] + Number(value);
		})
	})

	const duration = videoDetails.reduce((acc, video) =>
		acc += toSeconds(parse(video.contentDetails.duration)), 0)

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
						<td className="dropdown">{videoDetails.length.toLocaleString()}</td>
						<td>{statistics.viewCount.toLocaleString()}</td>
						<td>{secondsToHms(Math.round(duration))}</td>
						<td>{statistics.commentCount.toLocaleString()}</td>
						<td>{statistics.likeCount.toLocaleString()}</td>
						<td>{statistics.dislikeCount.toLocaleString()}</td>
					</tr>
				</tbody>
			</table>

			<h4>Details</h4>
			<table>
				<thead>
					<tr>
						<th>#</th>
						<th>Title</th>
						<th>Views</th>
						<th>Duration</th>
						<th>Comments</th>
						<th>Likes</th>
						<th>Dislikes</th>
					</tr>
				</thead>
				<tbody>
					{videoDetails.map((video, index) =>
						<tr key={video.id}>
							<td>{index + 1}</td>
							<td><a href={`https://www.youtube.com/watch?v=${video.id}`} target="blank">{video.snippet.title}</a></td>
							<td>{Number(video.statistics.viewCount).toLocaleString()}</td>
							<td>{secondsToHms(Math.round(toSeconds(parse(video.contentDetails.duration))))}</td>
							<td>{Number(video.statistics.commentCount).toLocaleString()}</td>
							<td>{Number(video.statistics.likeCount).toLocaleString()}</td>
							<td>{Number(video.statistics.dislikeCount).toLocaleString()}</td>
						</tr>
					)}
				</tbody>
			</table>
		</div>
	)
}

export default Results;