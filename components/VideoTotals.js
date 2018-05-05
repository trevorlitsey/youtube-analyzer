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
						<th className="hide-when-extra-extra-small">Total comments</th>
						<th className="hide-when-extra-small">Total likes</th>
						<th className="hide-when-small">Total dislikes</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>{totalVideos && totalVideos.toLocaleString()}</td>
						<td>{viewCount && viewCount.toLocaleString()}</td>
						<td>{duration && secondsToHms(Math.round(duration))}</td>
						<td className="hide-when-extra-extra-small">{commentCount && commentCount.toLocaleString()}</td>
						<td className="hide-when-extra-small">{likeCount && likeCount.toLocaleString()}</td>
						<td className="hide-when-small">{dislikeCount && dislikeCount.toLocaleString()}</td>
					</tr>
				</tbody>
			</table>
			<style jsx>{`

			@media (max-width: 680px) {
				.hide-when-small {
					display: none;
				}
			}

			@media (max-width: 600px) {
				.hide-when-extra-small {
					display: none;
				}
			}

			@media (max-width: 540px) {
				.hide-when-extra-extra-small {
					display: none;
				}
			}

			`}</style>
		</div>
	)
}

export default VideoTotals;