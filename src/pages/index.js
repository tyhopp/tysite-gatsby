import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Ahmah from '../components/ahmah'
import Header from '../components/header'
import TextXS from '../components/textXS'
import TextS from '../components/textS'
import TextM from '../components/textM'
import TextXXL from '../components/textXXL'
import Wrapper from '../components/wrapper'
import Container from '../components/container'
import Column from '../components/column'
import Block from '../components/block'
import Img from 'gatsby-image'
import LinkInternal from '../components/linkInternal'
import LinkExternal from '../components/linkExternal'
import Card from '../components/card'
import DecorTopLeft from '../components/decorTopLeft'
import DecorTopRight from '../components/decorTopRight'
import DecorMiddle from '../components/decorMiddle'
import DecorBottom from '../components/decorBottom'
import MapPin from '../components/mapPin'
import { graphql } from 'gatsby'
import { light } from '../utils/colors'

class Index extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			// none yet
		}
	}

	render() {
		const posts = this.props.data.allContentfulBlogPost.edges
		const map = this.props.data.map

		return (
			<Layout>
				<Wrapper padding="0 1em">
					<Helmet>
						<title>My Ahmah Say</title>
						<meta name="title" content="My Ahmah Say" />
						<meta
							name="description"
							content="Stories about food, life and things my Ah Mah, or grandma, says"
						/>
						<meta name="keywords" content="Food, life, culture" />
						<meta property="og:type" content="website" />
						<meta property="og:title" content="My Ahmah Say" />
						<meta
							property="og:description"
							content="Stories about food, life and things my Ah Mah, or grandma, says"
						/>
						<meta property="og:url" content="https://myahmahsay.com" />
						<link
							href="https://fonts.googleapis.com/css?family=Didact+Gothic|Fredericka+the+Great"
							rel="stylesheet"
						/>
					</Helmet>
					<DecorTopLeft />
					<DecorTopRight />
					<DecorMiddle />
					<DecorBottom />
					<Header>
						<Block>
							<LinkInternal to="/" borderless aria-label="Link to home">
								<Ahmah />
							</LinkInternal>
						</Block>
						<Block>
							<TextXXL center padding="0.4em 0 0 0">
								My Ah Mah Say
							</TextXXL>
							<TextM center padding="1.5em 0" style={{ maxWidth: '400px' }}>
								Stories about food, life and things my Ah Mah, or grandma, says.
								My name is Eileen Chong, and I’m also on&nbsp;
								<LinkExternal target="_blank" rel="noopener" href="#">
									Instagram
								</LinkExternal>
								&nbsp;(occassionally).
							</TextM>
						</Block>
					</Header>
					<Container>
						{posts &&
							posts
								.slice(0, 4)
								.map(post => <Card post={post} key={post.node.id} />)}
					</Container>
					<Column margin="3em 0 7em 0">
						{posts && (
							<TextM>
								<LinkInternal to="/blog-all">See all articles</LinkInternal>
							</TextM>
						)}
					</Column>
					<Column margin="1em 0">
						<MapPin />
						<Block width="158px" height="110px" style={{ bottom: 0 }}>
							<Img
								fluid={map.childImageSharp.fluid}
								alt="Map of Singapore where My Ahmah Say was created"
							/>
						</Block>
						<TextS padding="0.25em">
							Crafted in&nbsp;
							<LinkExternal
								borderless
								href="https://www.google.com.sg/maps/place/Jurong+West/@1.3421717,103.7114813,11z/data=!4m5!3m4!1s0x31da05456743b971:0x4908ac6db31b0180!8m2!3d1.3403898!4d103.7089875"
								target="_blank"
								rel="noopener"
							>
								Singapore
							</LinkExternal>
						</TextS>
						<TextXS color={light}>&copy; Copyright 2018 Eileen Chong</TextXS>
					</Column>
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
		map: file(relativePath: { eq: "sg-map.png" }) {
			childImageSharp {
				fluid {
					...GatsbyImageSharpFluid_withWebp_tracedSVG
				}
			}
		}
	}
`
