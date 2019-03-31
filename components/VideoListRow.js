import React from 'react';
import { parse, toSeconds } from 'iso8601-duration';
import { format } from 'date-fns';

import { secondsToHms, tableMediaQueries } from './helpers';

const VideoListRow = props => {
  const {
    id,
    publishedAt,
    viewCount,
    title,
    duration,
    commentCount,
    likeCount,
    dislikeCount,
    index,
  } = props;
  const noData = '-';

  return (
    <tr key={id}>
      <td>{index + 1}</td>
      <td>{publishedAt ? format(publishedAt, 'YY.MM.DD') : noData}</td>
      <td>
        <a href={`https://www.youtube.com/watch?v=${id}`} target="blank">
          {title ? title : noData}
        </a>
      </td>
      <td>{viewCount ? Number(viewCount).toLocaleString() : noData}</td>
      <td>
        {duration
          ? secondsToHms(Math.round(toSeconds(parse(duration))))
          : noData}
      </td>
      <td>{Number(commentCount ? commentCount : noData).toLocaleString()}</td>
      <td>{likeCount ? Number(likeCount).toLocaleString() : noData}</td>
      <td>{dislikeCount ? Number(dislikeCount).toLocaleString() : noData}</td>
      {tableMediaQueries}
    </tr>
  );
};

export default VideoListRow;
