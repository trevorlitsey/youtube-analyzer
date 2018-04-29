import React from 'react';

const Results = (props) => {

	const { data } = props;

	if (!data) {
		return (
			<p>no data yet</p>
		)
	}

	// const results = [];

	// Object.values(data).map((obj) => {
	// 	results.push(...obj.items);
	// })

	return (
		<div>
			<h4>Totals</h4>
			<table>
				<thead>
					<tr>
						<th>Total videos</th>
						<th>Total views</th>
						<th>Some</th>
						<th>Results</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>????</td>
						<td>This is longer content Donec id elit non mi porta gravida at eget metus.</td>
						<td>Content Goes Here</td>
						<td>Content Goes Here</td>
					</tr>
				</tbody>
			</table>
			<h4>Details</h4>
			<table>
				<thead>
					<tr>
						<th>These</th>
						<th>Are</th>
						<th>Some</th>
						<th>Results</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>Content Goes Here</td>
						<td>This is longer content Donec id elit non mi porta gravida at eget metus.</td>
						<td>Content Goes Here</td>
						<td>Content Goes Here</td>
					</tr>
					<tr>
						<td>Content Goes Here</td>
						<td>This is longer Content Goes Here Donec id elit non mi porta gravida at eget metus.</td>
						<td>Content Goes Here</td>
						<td>Content Goes Here</td>
					</tr>
					<tr>
						<td>Content Goes Here</td>
						<td>This is longer Content Goes Here Donec id elit non mi porta gravida at eget metus.</td>
						<td>Content Goes Here</td>
						<td>Content Goes Here</td>
					</tr>
				</tbody>
			</table>
		</div>
	)
}

export default Results;