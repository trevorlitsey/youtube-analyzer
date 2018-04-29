import React from 'react';
import Link from 'next/link'
import { Menu, MenuItem } from 'react-foundation';
import styled from 'styled-components';

const Container = styled.div`
	& > .menu a {
		padding: 0;
	}
`

const Wrapper = styled.div`
	max-width: 700px;
	margin: auto;
	padding: 10px;
`

const Layout = ({ children }) => {
	return (
		<Container>
			<Menu className="top-bar">
				<MenuItem className="menu-text"><Link href="/">YouTube Playlist Analyzer</Link></MenuItem>
			</Menu>
			<Wrapper>
				{children}
			</Wrapper>
		</Container >
	)
}

export default Layout;