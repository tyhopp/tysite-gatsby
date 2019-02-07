require('dotenv').config()

module.exports = {
  siteMetadata: {
    title: 'Ty Hopp',
    description:
      'Singapore-based software developer crafting balanced, useful experiences for people.',
    author: 'Ty Hopp',
    developer: 'Ty Hopp',
    siteUrl: 'https://tyhopp.com',
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
            resolve: 'gatsby-remark-external-links',
            options: {
              target: '_blank',
              rel: 'noopener noreferrer',
            },
          },
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
    `gatsby-plugin-remove-serviceworker`,
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
	        {
	          site {
	            siteMetadata {
	              title
	              description
	              siteUrl
	              site_url: siteUrl
	            }
	          }
	        }
	      `,
        feeds: [
          {
            serialize: ({ query: { site, allContentfulBlogPost } }) => {
              return allContentfulBlogPost.edges.map(edge => {
                return Object.assign({}, edge.node.frontmatter, {
                  title: edge.node.title,
                  description: edge.node.shortDescription.shortDescription,
                  date: edge.node.date,
                  categories: edge.node.category,
                  url: `${site.siteMetadata.siteUrl}/${edge.node.slug}`,
                  guid: edge.node.id,
                  custom_elements: [
                    {
                      'content:encoded': edge.node.content.content.map(
                        block => block.body.childMarkdownRemark.html
                      ),
                    },
                  ],
                })
              })
            },
            query: `
	            {
	              allContentfulBlogPost(sort: { fields: [date], order: DESC }) {
									edges {
										node {
											id
											slug
											title
											date
											shortDescription {
												shortDescription
											}
											category
											content {
												... on ContentfulContainer {
													content {
														... on ContentfulBlockText {
															id
															body {
																id
																childMarkdownRemark {
																	html
																}
															}
														}
													}
												}
											}
										}
									}
								}
	            }
	          `,
            output: '/rss.xml',
            title: "Ty Hopp's RSS Feed",
          },
        ],
      },
    },
  ],
}
