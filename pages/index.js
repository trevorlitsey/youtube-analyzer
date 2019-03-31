import React from 'react';
import Router from 'next/router';

import Layout from '../components/Layout';
import Form from '../components/Form';
import RecentSearches from '../components/RecentSearches';
import Footer from '../components/Footer';

import { getPlaylistIdFromUrl, getChannelIdFromUrl } from '../helpers';

class Index extends React.PureComponent {
  state = {
    recentSearches: {},
  };

  componentDidMount = () => {
    const recentSearches = JSON.parse(
      window.localStorage.getItem('youtubeAnalyzer') || '{}'
    );
    this.setState({ recentSearches });
  };

  handleSubmit = ({ option, text }) => {
    let query;

    switch (option) {
      case 'playlistUrl':
        const playlistId = getPlaylistIdFromUrl(text);
        query = { playlistId };
        break;

      case 'playlistId':
        query = { playlistId: text };
        break;

      case 'channelUrl':
        const channelId = getChannelIdFromUrl(text);
        query = { channelId };
        break;

      case 'channelId':
        query = { channelId: text };
        break;
    }

    // all good
    Router.push({
      pathname: '/search',
      query,
    });
  };

  render() {
    const { recentSearches } = this.state;

    return (
      <Layout>
        <Form handleSubmit={this.handleSubmit} />
        <RecentSearches recentSearches={recentSearches} />
        <Footer />
      </Layout>
    );
  }
}

export default Index;
