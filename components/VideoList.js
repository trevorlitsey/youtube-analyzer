import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faSortUp from '@fortawesome/fontawesome-free-solid/faSortUp';
import faSortDown from '@fortawesome/fontawesome-free-solid/faSortDown';
import { parse, toSeconds } from 'iso8601-duration';
import { format } from 'date-fns';

import { secondsToHms, tableMediaQueries } from './helpers';

import VideoListRow from './VideoListRow';

class VideoList extends React.Component {
  state = {
    sortColumn: 'publishedAt',
    sortDirection: true,
  };

  updateOrder = key => {
    const { sortColumn, sortDirection } = { ...this.state };
    if (key === sortColumn) {
      this.setState({ sortDirection: !sortDirection });
    } else {
      this.setState({ sortColumn: key, sortDirection: true });
    }
  };

  sort = (a, b) => {
    const { sortColumn, sortDirection } = this.state;

    let result;

    switch (sortColumn) {
      case 'publishedAt':
        result = sortDirection
          ? new Date(a.publishedAt) - new Date(b.publishedAt)
          : new Date(b.publishedAt) - new Date(a.publishedAt);
        break;
      case 'title':
        if (sortDirection) {
          result = a.title.toUpperCase() > b.title.toUpperCase() ? 1 : -1;
        } else {
          result = a.title.toUpperCase() < b.title.toUpperCase() ? 1 : -1;
        }
        break;
      case 'duration':
        const [one, two] = [
          Math.round(toSeconds(parse(a.duration))),
          Math.round(toSeconds(parse(b.duration))),
        ];
        result = sortDirection ? one - two : two - one;
        break;
      default:
        result = sortDirection
          ? a[sortColumn] - b[sortColumn]
          : b[sortColumn] - a[sortColumn];
    }

    return result;
  };

  render() {
    const { videoDetails } = { ...this.props };
    const { sortColumn, sortDirection } = this.state;

    const sortIcon = (
      <FontAwesomeIcon icon={sortDirection ? faSortDown : faSortUp} />
    );

    if (!videoDetails) {
      return <p>no data yet</p>;
    }

    return (
      <div>
        <h4>Details</h4>
        <div className="overflow-scroll">
          <table>
            <thead>
              <tr>
                <th>#</th>
                <th onClick={() => this.updateOrder('publishedAt')}>
                  Release date {sortColumn === 'publishedAt' && sortIcon}
                </th>
                <th onClick={() => this.updateOrder('title')}>
                  Title {sortColumn === 'title' && sortIcon}
                </th>
                <th onClick={() => this.updateOrder('viewCount')}>
                  Views {sortColumn === 'viewCount' && sortIcon}
                </th>
                <th onClick={() => this.updateOrder('duration')}>
                  Duration {sortColumn === 'duration' && sortIcon}
                </th>
                <th onClick={() => this.updateOrder('commentCount')}>
                  Comments {sortColumn === 'commentCount' && sortIcon}
                </th>
                <th onClick={() => this.updateOrder('likeCount')}>
                  Likes {sortColumn === 'likeCount' && sortIcon}
                </th>
                <th onClick={() => this.updateOrder('dislikeCount')}>
                  Dislikes {sortColumn === 'dislikeCount' && sortIcon}
                </th>
              </tr>
            </thead>
            <tbody>
              {videoDetails
                .sort(this.sort)
                .map((video, index) => (
                  <VideoListRow key={video.id} {...video} index={index} />
                ))}
            </tbody>
          </table>
        </div>
        <style jsx>{`
          th:hover {
            cursor: pointer;
          }

          .overflow-scroll {
            overflow: scroll;
          }
        `}</style>
        {tableMediaQueries}
      </div>
    );
  }
}

export default VideoList;
