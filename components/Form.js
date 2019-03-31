// @flow

import React from 'react';
import propTypes from 'prop-types';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faSync from '@fortawesome/fontawesome-free-solid/faSync';
import { isURL, isEmpty } from 'validator';

import { getPlaceHolderTest } from './helpers';

type Props = {
  handleSubmit: any,
};

type State = {
  loading: boolean,
  placeholder: string,
  errorMessage: string,
};

class Form extends React.PureComponent<Props, State> {
  state = {
    loading: false,
    placeholder: getPlaceHolderTest('playlistUrl'),
    errorMessage: '',
  };

  updatePlaceholder = () => {
    const placeholder = getPlaceHolderTest(
      this.refs.option && this.refs.option.value
    );
    this.setState({ placeholder });
  };

  handleSubmit = (e: SyntheticEvent<HTMLButtonElement>) => {
    e.preventDefault();

    const option = this.refs.option.value;
    const text = this.refs.text.value;

    // is empty
    if (isEmpty(text)) {
      const thing = option.includes('Url') ? 'a url' : 'an id';
      return this.setState({ errorMessage: `Please enter ${thing}` });
    }

    // is url
    if (option.includes('Url') && !isURL(text)) {
      return this.setState({ errorMessage: 'Please enter a valid url!' });
    }

    // is id
    else if (option.includes('Id') && isURL(text)) {
      return this.setState({ errorMessage: 'Please enter a valid ID!' });
    }

    // all good
    this.props.handleSubmit({ option, text });
    this.setState({ loading: true });
  };

  render() {
    const { loading, errorMessage, placeholder } = this.state;

    const loaderIcon = (
      <FontAwesomeIcon icon={faSync} spin style={{ marginLeft: 10 }} />
    );

    return (
      <div className="wrapper">
        <form onSubmit={this.handleSubmit}>
          <h3 className="title">YouTube Analyzer</h3>
          <select onChange={this.updatePlaceholder} ref="option" name="options">
            <option value="playlistUrl">Playlist URL</option>
            <option value="playlistId">Playlist ID</option>
            <option value="channelUrl">Channel URL</option>
            <option value="channelId">Channel ID</option>
          </select>
          <div>
            <input type="text" ref="text" placeholder={placeholder} />
            <span className="form-error is-visible" id="uuid">
              {errorMessage}
            </span>
          </div>
          <button className="primary button" type="submit">
            Submit {loading && loaderIcon}
          </button>
        </form>
        <style jsx>{`
          .wrapper {
            padding: 30px 20px;
            max-width: 700px;
            border: 1px solid rgba(0, 0, 0, 0.2);
            margin: 50px auto 0;
          }

          form {
            display: grid;
            grid-template-columns: 2fr 3fr;
            grid-gap: 10px;
          }

          form > button.primary {
            grid-column: 1 / -1;
          }

          .title {
            grid-column: 1 / -1;
            text-align: center;
          }
        `}</style>
      </div>
    );
  }
}

export default Form;
