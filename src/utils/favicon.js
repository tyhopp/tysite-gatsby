import React from 'react'
import Helmet from 'react-helmet'

// Function to change favicons based on matching routes
export const selectFavicon = location => {
	// If route is index, return box favicon
	if (location.pathname === '/') {
		return (
			<Helmet>
				<link
					rel="apple-touch-icon-precomposed"
					sizes="180x180"
					href="https://tyhopp.com/boxAppleTouchIcon.png"
				/>
				<link
					rel="apple-touch-icon"
					sizes="180x180"
					href="https://tyhopp.com/boxAppleTouchIcon.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="48x48"
					href="https://tyhopp.com/boxFavicon-48x48.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="32x32"
					href="https://tyhopp.com/boxFavicon-32x32.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="16x16"
					href="https://tyhopp.com/boxFavicon-16x16.png"
				/>
				<link rel="shortcut icon" href="https://tyhopp.com/boxFavicon.ico" />
			</Helmet>
		)

		// If route is blog or blog post, return hand favicon
	} else if (location.pathname.substring(0, 5) === '/blog') {
		return (
			<Helmet>
				<link
					rel="apple-touch-icon-precomposed"
					sizes="180x180"
					href="https://tyhopp.com/handAppleTouchIcon.png"
				/>
				<link
					rel="apple-touch-icon"
					sizes="180x180"
					href="https://tyhopp.com/handAppleTouchIcon.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="48x48"
					href="https://tyhopp.com/handFavicon-48x48.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="32x32"
					href="https://tyhopp.com/handFavicon-32x32.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="16x16"
					href="https://tyhopp.com/handFavicon-16x16.png"
				/>
				<link rel="shortcut icon" href="https://tyhopp.com/handFavicon.ico" />
			</Helmet>
		)
	}
}
