import React from 'react';
import Link from 'next/link'

const Breadcrumbs = () => {
	return (
		<nav aria-label="You are here:" role="navigation">
			<ul className="breadcrumbs">
				<li><Link href="/"><a href="#">Home</a></Link></li>
				<li>
					<span className="show-for-sr">Current: </span> Search
    				</li>
			</ul>
		</nav>
	)
}

export default Breadcrumbs;