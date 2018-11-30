import React from 'react'
import styled from 'styled-components'
import Helmet from 'react-helmet'
import Header from '../components/header'
import Footer from '../components/footer'
import '../utils/layout.css'

import HKGroteskPro from '../assets/fonts/HKGroteskPro-Regular.woff2'
import QuincyCF from '../assets/fonts/QuincyCF-ExtraBold.woff2'

class Layout extends React.Component {
	render() {
		const { children } = this.props
		return (
			<Master>
				<Helmet>
					<meta charSet="utf-8" />
					<html lang="en" />
					<meta httpEquiv="X-UA-Compatible" content="IE=edge" />
					<meta
						name="viewport"
						content="width=device-width, initial-scale=1.0, viewport-fit=cover"
					/>
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
				<Header location={this.props.location} />
				{children}
				{this.props.location.pathname === '/blog' ||
				this.props.location.pathname === '/lists' ? null : (
					<Footer />
				)}
			</Master>
		)
	}
}

const Master = styled.div`
	margin: 5em 0 0 0;
`

export default Layout
