import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Ahmah from '../components/ahmah'
import Wrapper from '../components/wrapper'
import Content from '../components/content'
import Header from '../components/header'
import TextS from '../components/textS'
import TextM from '../components/textM'
import TextXL from '../components/textXL'
import ReactMarkdown from 'react-markdown'
import Img from 'gatsby-image'
import LinkInternal from '../components/linkInternal'
import Button from '../components/button'
import Column from '../components/column'
import Row from '../components/row'
import Tile from '../components/tile'
import Filter from '../components/filter'
import copy from 'copy-to-clipboard'
import { light } from '../utils/colors'
import '../utils/markdown.css'
import { graphql } from 'gatsby'

class BlogPost extends React.Component {
	copyToClipboard() {
		const url = `https://myahmahsay.com${window.location.pathname}`
		copy(url)
		alert('Copied link to clipboard ✅')
	}

	render() {
		const page = this.props.data.allContentfulBlogPost.edges // returns array of Blog Post children

		const {
			title,
			date,
			slug,
			shortDescription,
			previewImage,
			category,
		} = page[0].node
		const content = page[0].node.content.content
		return (
			<Layout>
				<div>
					<Helmet>
						<title>My Ahmah Say</title>
						<meta name="title" content={title} />
						<meta
							name="description"
							content={shortDescription.shortDescription}
						/>
						<meta name="keywords" content={category.join(', ')} />
						<meta property="og:type" content="article" />
						<meta property="og:title" content={title} />
						<meta
							property="og:description"
							content={shortDescription.shortDescription}
						/>
						<meta
							property="og:url"
							content={`https://myahmahsay.com/${slug}`}
						/>
						<link
							href="https://fonts.googleapis.com/css?family=Didact+Gothic|Fredericka+the+Great"
							rel="stylesheet"
						/>
					</Helmet>
					<Header>
						<LinkInternal to="/" borderless aria-label="Link to home">
							<Ahmah />
						</LinkInternal>
					</Header>
					<Wrapper content padding="0.5em 0 2em 0">
						<Content img key={previewImage.id}>
							<Img fluid={previewImage.fluid} alt={previewImage.title} />
						</Content>
						<Content>
							<TextXL padding="1em 0 0 0">{title}</TextXL>
							<Filter article margin="0.75em 0">
								{category.map(item => (
									<Button article key={item}>
										<LinkInternal
											borderless
											to="/blog-all"
											state={{ filterCategory: item }}
										>
											{item}
										</LinkInternal>
									</Button>
								))}
							</Filter>
							<TextS color={light}>{date}</TextS>
						</Content>
						{content &&
							content.map(block => (
								<div key={block.body ? block.body.id : block.image.id}>
									{block.body && (
										<Content key={block.body.id}>
											<TextM id="markdown">
												<ReactMarkdown source={block.body.body} />
											</TextM>
										</Content>
									)}
									{block.image && (
										<Content img key={block.image.id}>
											<Img fluid={block.image.fluid} alt={block.title} />
											<TextS center color={light} padding="1em 0">
												{block.image.description}
											</TextS>
										</Content>
									)}
								</div>
							))}
						<Column>
							<Tile>
								<TextM center>
									Thanks for checking out My Ahmah Say! Feel free to pass this
									to a friend if you like it (:
								</TextM>
								<Row>
									<Button onClick={this.copyToClipboard}>Copy URL</Button>
									<Button>
										<LinkInternal borderless to="/blog-all">
											More posts
										</LinkInternal>
									</Button>
								</Row>
							</Tile>
						</Column>
					</Wrapper>
				</div>
			</Layout>
		)
	}
}

export default BlogPost

export const blogPostQuery = graphql`
	query blogPostPageQuery($slug: String!) {
		allContentfulBlogPost(filter: { slug: { eq: $slug } }) {
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
					previewImage {
						id
						title
						fluid {
							...GatsbyContentfulFluid_withWebp
						}
					}
					content {
						... on ContentfulContainer {
							content {
								... on ContentfulBlockText {
									body {
										id
										body
									}
								}
								... on ContentfulBlockImage {
									title
									image {
										id
										description
										fluid {
											...GatsbyContentfulFluid_withWebp
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
`
