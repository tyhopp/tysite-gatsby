import React from 'react'
import Helmet from 'react-helmet'

// Card box favicon
import boxFaviconApple from '../assets/favicon/boxAppleTouchIcon.png'
import boxFavicon32 from '../assets/favicon/boxFavicon-32x32.png'
import boxFavicon16 from '../assets/favicon/boxFavicon-16x16.png'
import boxShortcutIcon from '../assets/favicon/boxFavicon.ico'

// Writing hand favicon
import handFaviconApple from '../assets/favicon/handAppleTouchIcon.png'
import handFavicon32 from '../assets/favicon/handFavicon-32x32.png'
import handFavicon16 from '../assets/favicon/handFavicon-16x16.png'
import handShortcutIcon from '../assets/favicon/handFavicon.ico'

// Writing hand favicon
import heartFaviconApple from '../assets/favicon/heartAppleTouchIcon.png'
import heartFavicon32 from '../assets/favicon/heartFavicon-32x32.png'
import heartFavicon16 from '../assets/favicon/heartFavicon-16x16.png'
import heartShortcutIcon from '../assets/favicon/heartFavicon.ico'

// Function to change favicons based on matching routes
export const selectFavicon = location => {
	// If route is index, return box favicon
	if (location.pathname === '/') {
		return (
			<Helmet>
				<link rel="apple-touch-icon" sizes="180x180" href={boxFaviconApple} />
				<link rel="icon" type="image/png" sizes="32x32" href={boxFavicon32} />
				<link rel="icon" type="image/png" sizes="16x16" href={boxFavicon16} />
				<link rel="shortcut icon" href={boxShortcutIcon} />
			</Helmet>
		)

		// If route is blog or blog post, return hand favicon
	} else if (location.pathname.substring(0, 5) === '/blog') {
		return (
			<Helmet>
				<link rel="apple-touch-icon" sizes="180x180" href={handFaviconApple} />
				<link rel="icon" type="image/png" sizes="32x32" href={handFavicon32} />
				<link rel="icon" type="image/png" sizes="16x16" href={handFavicon16} />
				<link rel="shortcut icon" href={handShortcutIcon} />
			</Helmet>
		)

		// If route is lists or list post, return heart favicon
	} else if (location.pathname.substring(0, 6) === '/lists') {
		return (
			<Helmet>
				<link rel="apple-touch-icon" sizes="180x180" href={heartFaviconApple} />
				<link rel="icon" type="image/png" sizes="32x32" href={heartFavicon32} />
				<link rel="icon" type="image/png" sizes="16x16" href={heartFavicon16} />
				<link rel="shortcut icon" href={heartShortcutIcon} />
			</Helmet>
		)
	}
}
