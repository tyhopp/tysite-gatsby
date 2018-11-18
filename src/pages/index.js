import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Wrapper from '../components/wrapper'
import Container from '../components/container'
import Card from '../components/card'
import { graphql } from 'gatsby'

class Index extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			// none yet
		}
	}

	render() {
		const posts = this.props.data.allContentfulBlogPost.edges
		// const map = this.props.data.map

		return (
			<Layout>
				<Wrapper padding="0 1em">
					<Helmet>
						<title>Ty Hopp</title>
						<meta name="title" content="Ty Hopp" />
						<meta
							name="description"
							content="Singapore-based frontend developer and designer crafting delightful experiences for the web and native apps."
						/>
						<meta name="keywords" content="frontend, developer, designer" />
						<meta property="og:type" content="website" />
						<meta property="og:title" content="Ty Hopp" />
						<meta
							property="og:description"
							content="Singapore-based frontend developer and designer crafting delightful experiences for the web and native apps."
						/>
						<meta property="og:url" content="https://tyhopp.com" />
					</Helmet>
					<Container>
						{posts &&
							posts
								.slice(0, 4)
								.map(post => <Card post={post} key={post.node.id} />)}
					</Container>
				</Wrapper>
			</Layout>
		)
	}
}

export default Index

export const indexQuery = graphql`
	query indexPageQuery {
		allContentfulBlogPost(sort: { fields: [date], order: DESC }) {
			edges {
				node {
					id
					slug
					title
					date(formatString: "MMMM DD, YYYY")
					shortDescription {
						shortDescription
					}
					category
				}
			}
		}
	}
`
