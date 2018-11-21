import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Wrapper from '../components/wrapper'
import Content from '../components/content'
import TextS from '../components/textS'
import TextM from '../components/textM'
import TextXL from '../components/textXL'
import Markdown from 'react-markdown'
import LinkInternal from '../components/linkInternal'
import Button from '../components/button'
import Column from '../components/column'
import Row from '../components/row'
import Tile from '../components/tile'
import Filter from '../components/filter'
import copy from 'copy-to-clipboard'
import '../utils/markdown.css'
import { graphql } from 'gatsby'

class BlogPost extends React.Component {
	copyToClipboard() {
		const url = `https:/tyhopp.com${window.location.pathname}`
		copy(url)
		alert('Copied link to clipboard ✅')
	}

	render() {
		const page = this.props.data.allContentfulBlogPost.edges // returns array of Blog Post children

		const { title, date, slug, shortDescription, category } = page[0].node
		const content = page[0].node.content.content

		return (
			<Layout location={this.props.location}>
				<div>
					<Helmet>
						<title>Blog | Ty Hopp</title>
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
						<meta property="og:url" content={`https://tyhopp.com/${slug}`} />
					</Helmet>
					<Wrapper content padding="0.5em 0 2em 0">
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
							<TextS>{date}</TextS>
						</Content>
						{content &&
							content.map(block => (
								<div key={block.body ? block.body.id : block.image.id}>
									{block.body && (
										<Content key={block.body.id}>
											<TextM id="markdown">
												<Markdown source={block.body.body} />
											</TextM>
										</Content>
									)}
								</div>
							))}
						<Column>
							<Tile>
								<TextM center>
									Thanks for checking my site! Feel free to pass this to a
									friend if you like it (:
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
