import React from 'react';
import { Button } from 'react-foundation';
import styled from 'styled-components';

const Wrapper = styled.div`
	padding: 30px 20px;
	max-width: 700px;
	border: 1px solid rgba(0,0,0,.2);
	margin: 50px auto 0;
	border-radius: 6px;

	& > form {
		display: grid;
		grid-template-columns: 2fr 3fr;
		grid-gap: 10px;
	}

	.title {
		grid-column: 1 / -1;
		text-align: center;
	}
	
	.primary.button {
		grid-column: 1 / -1;
	}

`

class Form extends React.PureComponent {

	handleSubmit = (e) => {
		e.preventDefault();

		const { option, text } = this.refs;

		this.props.handleSubmit({
			option: option.value,
			text: text.value,
		})

	}

	render() {
		return (
			<Wrapper>
				<form onSubmit={this.handleSubmit}>
					<h3 className="title">YouTube Analyzer</h3>
					<select ref="option" name="options">
						<option value="playlistUrl">Playlist URL</option>
						<option value="channelUrl">Channel URL</option>
						<option value="channelId">Channel ID</option>
						<option value="playlistId">Playlist ID</option>
					</select>
					<input type="text" ref="text" />
					<Button className="primary button" type="submit" data-loading-end>Submit</Button>
				</form>
			</Wrapper>
		)
	}
}

export default Form;