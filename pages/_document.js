// ./pages/_document.js
import Document, { Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
	render() {
		return (
			<html>
				<Head>
					<link rel="stylesheet" href="/static/foundation.min.css" />
					<title>YouTube Analyzer</title>
					<link rel="icon" type="image/ico" href="/static/favicon.ico" />
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</html>
		)
	}
}