import React from 'react';
import Link from 'next/link'
import { Menu, MenuItem } from 'react-foundation';
import styled from 'styled-components';

const Layout = ({ children }) => {
	return (
		<div>
			<Menu className="top-bar">
				<MenuItem className="menu-text"><Link href="/"><a style={{ padding: 0 }}>YouTube Analyzer</a></Link></MenuItem>
			</Menu>
			<div className="wrapper">
				{children}
			</div>
			<style jsx>{`

			.wrapper {
				max-width: 1000px;
				margin: auto;
				padding: 50px 10px;
			}

			`}</style>
		</div>
	)
}

export default Layout;