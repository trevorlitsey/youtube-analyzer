// @flow

import React from "react";
import { secondsToHms, tableMediaQueries } from "./helpers";

type Props = {
  totalVideos: number,
  viewCount: number,
  duration: number,
  commentCount: number,
  likeCount: number,
  dislikeCount: number,
};

const VideoTotals = (props: Props) => {
  const {
    totalVideos,
    viewCount,
    duration,
    commentCount,
    likeCount,
    dislikeCount,
  } = props;

  return (
    <div>
      <div className="container">
        <h4>Totals</h4>
      </div>
      <div className="overflow-scroll">
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
              <td>{totalVideos ? totalVideos.toLocaleString() : "–"}</td>
              <td>{viewCount ? viewCount.toLocaleString() : "–"}</td>
              <td>{duration ? secondsToHms(Math.round(duration)) : "–"}</td>
              <td>{commentCount ? commentCount.toLocaleString() : "–"}</td>
              <td>{likeCount ? likeCount.toLocaleString() : "–"}</td>
              <td>{dislikeCount ? dislikeCount.toLocaleString() : "–"}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <style jsx>{`
        .container {
          display: flex;
          justify-content: space-between;
        }
        .overflow-scroll {
          overflow: scroll;
        }
      `}</style>
      {tableMediaQueries}
    </div>
  );
};

export default VideoTotals;
