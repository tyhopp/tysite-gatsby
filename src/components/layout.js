import React from 'react'
import '../utils/layout.css'
import Helmet from 'react-helmet'
import faviconApple from '../assets/favicon/apple-touch-icon.png'
import favicon32 from '../assets/favicon/favicon-32x32.png'
import favicon16 from '../assets/favicon/favicon-16x16.png'
import maskIcon from '../assets/favicon/safari-pinned-tab.svg'
import shortcutIcon from '../assets/favicon/favicon.ico'
import HKGroteskPro from '../assets/fonts/HKGroteskPro-Regular.woff2'
import QuincyCF from '../assets/fonts/QuincyCF-ExtraBold.woff2'

class Layout extends React.Component {
	render() {
		const { children } = this.props
		return (
			<div>
				<Helmet>
					<meta charSet="utf-8" />
					<html lang="en" />
					<meta httpEquiv="X-UA-Compatible" content="IE=edge" />
					<meta
						name="viewport"
						content="width=device-width, initial-scale=1.0, viewport-fit=cover"
					/>
					<link rel="apple-touch-icon" sizes="180x180" href={faviconApple} />
					<link rel="icon" type="image/png" sizes="32x32" href={favicon32} />
					<link rel="icon" type="image/png" sizes="16x16" href={favicon16} />
					<link rel="mask-icon" href={maskIcon} color="#FFFFFF" />
					<link rel="shortcut icon" href={shortcutIcon} />
					<link
						rel="preload"
						href={HKGroteskPro}
						type="font/woff2"
						crossorigin="anonymous"
						as="font"
					/>
					<link
						rel="preload"
						href={QuincyCF}
						type="font/woff2"
						crossorigin="anonymous"
						as="font"
					/>
					<meta
						name="msapplication-config"
						content={`../assets/favicon/browserconfig.xml`}
					/>
					<meta name="msapplication-TileColor" content="#2d89ef" />
					<meta name="theme-color" content="#ffffff" />
				</Helmet>
				{children}
			</div>
		)
	}
}

export default Layout
