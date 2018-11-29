import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Wrapper from '../components/wrapper'
import Content from '../components/content'
import TextL from '../components/textL'
import TextM from '../components/textM'
import TextS from '../components/textS'
import Img from 'gatsby-image'
import LinkInternal from '../components/linkInternal'
import LinkExternal from '../components/linkExternal'
import Button from '../components/button'
import Column from '../components/column'
import Row from '../components/row'
import Tile from '../components/tile'
import Filter from '../components/filter'
import '../utils/markdown.css'
import { graphql } from 'gatsby'

class BlogPost extends React.Component {
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
						<meta
							property="og:url"
							content={`https://tyhopp.com/blog/${slug}`}
						/>
					</Helmet>
					<Wrapper padding="0.5em 0 2em 0">
						<Content>
							<TextL style={{ fontSize: 38, lineHeight: '48px' }}>
								{title}
							</TextL>
							<TextM margin="0.5em 0" style={{ opacity: 0.5 }}>
								{date}
							</TextM>
							<Filter show left article margin="0 0 0 -0.75em">
								{category.map(item => (
									<Button
										article
										key={item}
										style={{ fontSize: 15, padding: '0.5em 1.5em' }}
									>
										<LinkInternal
											to="/blog"
											state={{ filterCategory: item }}
											style={{ border: 'none' }}
										>
											{item}
										</LinkInternal>
									</Button>
								))}
							</Filter>
						</Content>
						{content &&
							content.map(block => (
								<div key={block.id}>
									{block.body && (
										<Content key={block.body.id}>
											<TextM
												id="markdown"
												dangerouslySetInnerHTML={{
													__html: block.body.childMarkdownRemark.html,
												}}
											/>
										</Content>
									)}
									{block.image && (
										<Content img key={block.image.id}>
											<Img fluid={block.image.fluid} alt={block.title} />
											<TextS center padding="1em 0" style={{ opacity: 0.5 }}>
												{block.image.description}
											</TextS>
										</Content>
									)}
									{block.quote && (
										<Content key={block.quote.id}>
											<TextM
												dangerouslySetInnerHTML={{
													__html: block.quote.childMarkdownRemark.html,
												}}
											/>
										</Content>
									)}
								</div>
							))}
						<Column>
							<Tile>
								<TextM center medium>
									Thanks for reading{' '}
									<span
										role="img"
										aria-label="Heart emoji"
										style={{ fontSize: 18, verticalAlign: 'middle' }}
									>
										❤️
									</span>
								</TextM>
								<TextM>
									If you're jazzed about this post, feel free to{' '}
									<LinkExternal
										href={`https://twitter.com/intent/tweet?text=Found a nice article on ${title.toLowerCase()} ❤️&url=https://tyhopp.com/blog/${slug}&via=doestyhopp`}
										target="_blank"
										rel="noopener"
									>
										tweet this article
									</LinkExternal>{' '}
									<span
										role="img"
										aria-label="Blue bird emoji"
										style={{ fontSize: 18, verticalAlign: 'middle' }}
									>
										🐦
									</span>
								</TextM>
								<TextM>
									If I missed something, please do{' '}
									<LinkExternal
										href="https://twitter.com/messages/compose?recipient_id=2500007690"
										target="_blank"
										rel="noopener"
									>
										drop me a message
									</LinkExternal>{' '}
									and I'll fix it{' '}
									<span
										role="img"
										aria-label="Hammer emoji"
										style={{ fontSize: 18, verticalAlign: 'middle' }}
									>
										🔨
									</span>
								</TextM>
								<TextM>
									Otherwise, read more{' '}
									<LinkInternal to="/blog">articles</LinkInternal>!{' '}
									<span
										role="img"
										aria-label="Hand writing emoji"
										style={{ fontSize: 18, verticalAlign: 'middle' }}
									>
										✍️
									</span>
								</TextM>
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
									id
									body {
										id
										childMarkdownRemark {
											html
										}
									}
								}
								... on ContentfulBlockImage {
									id
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
