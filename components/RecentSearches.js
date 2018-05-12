// @flow

import React from 'react';
import Link from 'next/link'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faSpinner from '@fortawesome/fontawesome-free-solid/faSpinner'

import type {
	RecentSearches as RecentSearchesType,
		RecentSearchItem as RecentSearchItemType
} from './types';

type Props = {
	recentSearches: RecentSearchesType
}

type State = {
	loading: string
}

class RecentSearches extends React.PureComponent<Props, State> {

	state = {
		loading: '',
	}

	render() {

		const { recentSearches } = this.props;

		const loaderIcon = <FontAwesomeIcon icon={faSpinner} spin style={{ marginLeft: 10 }} color="HSLA(204, 70%, 42%, 1.00)" />

		if (!recentSearches || !Object.keys(recentSearches).length) return null // don't even bother

		return (
			<div>
				<h5>Recent searches</h5>
				<ul>
					{Object.values(recentSearches)
						.sort((itemA: any, itemB: any) => itemB.date - itemA.date) // sorry, flow
						.map((item: any) =>
							<li onClick={() => this.setState({ loading: item.id })}>
								<Link href={`/search?${item.type}=${item.id}`}>
									<a>{item.channelTitle} – {item.type}: {item.id}</a>
								</Link>
								{this.state.loading === item.id && loaderIcon}
							</li>
						)
					}
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