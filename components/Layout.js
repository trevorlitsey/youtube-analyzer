import React from 'react';
import Link from 'next/link'
import { Menu, MenuItem } from 'react-foundation';
import styled from 'styled-components';

const contentStyles = {
	maxWidth: 1000,
	margin: 'auto',
	padding: '50px 10px',
}

const Layout = ({ children }) => {
	return (
		<div>
			<Menu className="top-bar">
				<MenuItem className="menu-text"><Link href="/"><a style={{ padding: 0 }}>YouTube Analyzer</a></Link></MenuItem>
			</Menu>
			<div style={contentStyles}>
				{children}
			</div>
		</div>
	)
}

export default Layout;