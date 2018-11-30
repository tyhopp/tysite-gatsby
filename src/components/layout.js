import React from 'react'
import styled from 'styled-components'
import Helmet from 'react-helmet'
import Header from '../components/header'
import Footer from '../components/footer'
import { selectFavicon } from '../utils/favicon'
import '../utils/layout.css'

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
						href="https://tyhopp.com/HKGroteskPro-Regular.woff2"
						type="font/woff2"
						crossorigin="anonymous"
						as="font"
					/>
					<link
						rel="preload"
						href="https://tyhopp.com/QuincyCF-ExtraBold.woff2"
						type="font/woff2"
						crossorigin="anonymous"
						as="font"
					/>
				</Helmet>
				{selectFavicon(this.props.location)}
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
