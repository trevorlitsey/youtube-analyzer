import React from 'react';
import axios from 'axios';
import Router from 'next/router';

import {
  getApiUrl,
  getVideosFromChannelId,
  processVideoIds,
  getVideosFromPlaylistId,
  getVideoTotals,
} from '../helpers';

import Layout from '../components/Layout';
import BadRequest from '../components/BadRequest';
import Breadcrumbs from '../components/Breadcrumbs';
import Progress from '../components/Progress';
import VideoTotals from '../components/VideoTotals';
import VideoList from '../components/VideoList';

class Search extends React.PureComponent {
  static async getInitialProps({ req, query }) {
    let videoIds;
    let videoDetails;
    let playlistName;

    const { channelId, playlistId } = query;

    if (channelId) {
      videoIds = await getVideosFromChannelId(channelId);
    } else if (playlistId) {
      videoIds = await getVideosFromPlaylistId(playlistId);
    }

    // uh oh
    if (!videoIds) {
      return {};
    }

    videoDetails = await processVideoIds(videoIds);
    const videoTotals = getVideoTotals(videoDetails);

    return { videoDetails, videoTotals, channelId, playlistId };
  }

  componentDidMount = () => {
    const { channelId, playlistId, videoDetails } = this.props;

    const id = channelId || playlistId;

    if (videoDetails && videoDetails.length) {
      const recentSearches = JSON.parse(
        window.localStorage.getItem('youtubeAnalyzer') || '{}'
      );

      if (!recentSearches[id]) {
        recentSearches[id] = {
          id,
          channelTitle: videoDetails[0].channelTitle || '',
          type: channelId ? 'channelId' : 'playlistId',
          date: Date.now(),
        };
      } else {
        recentSearches[id].date = Date.now();
      }
      window.localStorage.setItem(
        'youtubeAnalyzer',
        JSON.stringify(recentSearches)
      );
    }
  };

  render() {
    const {
      videoDetails,
      videoTotals,
      url,
      channelId,
      playlistId,
    } = this.props;

    if (!videoDetails || !videoDetails.length) {
      // bad request!
      return (
        <Layout>
          <BadRequest query={url.query.channelId || url.query.playlistId} />
        </Layout>
      );
    }

    return (
      <Layout>
        <Breadcrumbs pages={['home', 'search']} />
        <h2 style={{ textDecoration: 'underline' }}>
          {videoDetails[0].channelTitle}
        </h2>
        <h5>
          {channelId ? 'Channel: ' + channelId : ''}
          {playlistId ? 'Playlist: ' + playlistId : ''}
        </h5>
        <VideoTotals {...videoTotals} />
        <VideoList videoDetails={videoDetails} />
      </Layout>
    );
  }
}

export default Search;
