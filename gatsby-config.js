require('dotenv').config()

module.exports = {
	siteMetadata: {
		title: 'Ty Hopp',
		author: 'Ty Hopp',
		developer: 'Ty Hopp',
		siteUrl: 'https://tyhopp.me',
	},
	plugins: [
		`gatsby-plugin-react-helmet`,
		`gatsby-plugin-styled-components`,
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		/*
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `img`,
				path: `${__dirname}/src/assets/img/`,
			},
		},
		*/
		{
			resolve: 'gatsby-transformer-remark',
			options: {
				plugins: [
					{
						resolve: 'gatsby-remark-embed-gist',
						options: {
							username: 'tyhopp',
							includeDefaultCss: true,
						},
					},
				],
			},
		},
		{
			resolve: `gatsby-source-contentful`,
			options: {
				spaceId: process.env.CONTENTFUL_SPACE,
				accessToken: process.env.CONTENTFUL_TOKEN,
				host: process.env.CONTENTFUL_HOST || `cdn.contentful.com`,
			},
		},
		{
			resolve: `gatsby-plugin-sitemap`,
		},
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: 'Ty Hopp',
				short_name: 'Ty',
				start_url: '/',
				background_color: '#FFFFFF',
				theme_color: '#FFFFFF',
				display: 'standalone',
			},
		},
		// `gatsby-plugin-offline`,
	],
}
