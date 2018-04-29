import React from 'react';

const Breadcrumbs = () => {
	return (
		<nav aria-label="You are here:" role="navigation">
			<ul className="breadcrumbs">
				<li><a href="#">Home</a></li>
				<li>
					<span className="show-for-sr">Current: </span> Search
    				</li>
			</ul>
		</nav>
	)
}

export default Breadcrumbs;