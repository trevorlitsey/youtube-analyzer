import React from 'react';
import Link from 'next/link'

class RecentSearches extends React.PureComponent {
	render() {

		// const recentSearch

		return (
			<div>
				<h5>Recent searches</h5>
				<ul>
					<li><Link href="http://localhost:3000/search?playlistId=PLu8EoSxDXHP5H-e74dRVbl2Tj76RagB74"><a>One</a></Link></li>
					<li><Link href="#"><a>Two</a></Link></li>
					<li><Link href="#"><a>Three</a></Link></li>
				</ul>
				<style jsx>{`

				h5 {
					text-decoration: underline;
				}

				ul {
					list-style: none;
					margin: 0;
				}

				li {
					margin: none;
				}

				div {
					margin-top: 50px;
					text-align: center;
				}

			`}</style>
			</div>
		)
	}
}

export default RecentSearches;