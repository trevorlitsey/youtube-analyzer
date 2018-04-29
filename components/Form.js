import React from 'react';
import { Button } from 'react-foundation';
import styled from 'styled-components';

const Wrapper = styled.div`
	padding: 20px;
	border: 1px solid rgba(0,0,0,.2);
	margin: 50px auto 0;
	border-radius: 6px;
	display: grid;
	grid-template-columns: 2fr 3fr;
	grid-gap: 10px;

	.title {
		grid-column: 1 / -1;
		text-align: center;
	}
	
	.submit {
		grid-column: 1 / -1;
	}

`

class Form extends React.PureComponent {
	render() {
		return (
			<Wrapper>
				<h3 className="title">YouTube Playlist Analyzer</h3>
				<select name="options">
					<option value="one">Playlist URL</option>
					<option value="two">Channel URL</option>
					<option value="three">Channel Username</option>
					<option value="three">Channel ID</option>
					<option value="three">Playlist ID</option>
				</select>
				<input type="text" />
				<Button className="submit" type="submit">Submit</Button>
			</Wrapper>
		)
	}
}

export default Form;