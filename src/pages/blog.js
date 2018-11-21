import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import TextXL from '../components/textXL'
import TextL from '../components/textL'
import TextM from '../components/textM'
import Wrapper from '../components/wrapper'
import Content from '../components/content'
import Block from '../components/block'
import LineBreak from '../components/lineBreak'
import LinkInternal from '../components/linkInternal'
import Button from '../components/button'
import Filter from '../components/filter'
import uniq from 'lodash/uniq'
import { graphql } from 'gatsby'
import { light, mist } from '../utils/colors'

class Blog extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			categories: [],
			loaded: false,
			posts: this.props.data.allContentfulBlogPost.edges,
			currentFilter: '',
			filteredPosts: [],
		}
	}

	filterPosts(e) {
		var filteredPosts = []
		// eslint-disable-next-line
		this.state.posts.filter(post => {
			post.node.category.includes(e.target.innerHTML) &&
				filteredPosts.push(post)
		})
		this.setState({
			currentFilter: e.target.innerHTML,
			filteredPosts: filteredPosts,
		})
	}

	filterPostsFromArticle() {
		// eslint-disable-next-line
		var filteredPosts = []
		// eslint-disable-next-line
		this.state.posts.filter(post => {
			post.node.category.includes(this.props.location.state.filterCategory) &&
				filteredPosts.push(post)
		})
		this.setState({
			currentFilter: this.props.location.state.filterCategory,
			filteredPosts: filteredPosts,
		})
	}

	componentDidMount() {
		const posts = this.props.data.allContentfulBlogPost.edges
		// eslint-disable-next-line
		const knownCategories = []
		// eslint-disable-next-line
		posts.map(post => {
			// Map over each post
			const postCategories = post.node.category // Get all categories
			postCategories.forEach(category => {
				// Loop through post categories
				knownCategories.push(category) // Push each post categories to new array
			})
		})

		if (this.props.location.state) {
			if (this.props.location.state.filterCategory) {
				this.filterPostsFromArticle()
			}
		}

		// Set state with all known unique categories
		this.setState({ categories: uniq(knownCategories), loaded: true })
	}

	render() {
		const {
			categories,
			loaded,
			posts,
			currentFilter,
			filteredPosts,
		} = this.state

		return (
			<Layout location={this.props.location}>
				<Wrapper padding="0 1em 5em 1em">
					<Helmet>
						<title>Blog | Ty Hopp</title>
						<meta name="title" content="Blog | Ty Hopp" />
						<meta name="description" content="All blog posts from Ty Hopp" />
						<meta property="og:type" content="website" />
						<meta property="og:title" content="Ty Hopp" />
						<meta
							property="og:description"
							content="All blog posts from Ty Hopp"
						/>
						<meta property="og:url" content="https://tyhopp.com/blog" />
					</Helmet>
					<Block>
						<TextXL center>Blog</TextXL>
						<TextM center padding="1em 0" style={{ maxWidth: 440 }}>
							More serious and technical articles about things I encounter as a
							frontend developer.
						</TextM>
					</Block>
					<Block>
						<Filter>
							<Button
								onClick={() => this.setState({ currentFilter: '' })}
								style={{
									backgroundColor: currentFilter !== '' ? light : mist,
									padding: '0.7em 1.5em 0.6em 1.5em',
								}}
							>
								All
							</Button>
							{loaded &&
								categories.map(category => {
									return (
										<Button
											key={category}
											onClick={e => this.filterPosts(e)}
											style={{
												backgroundColor:
													category === currentFilter ? mist : light,
												padding: '0.7em 1.5em 0.6em 1.5em',
											}}
										>
											{category}
										</Button>
									)
								})}
						</Filter>
					</Block>
					<Content>
						<LineBreak />
						{currentFilter !== ''
							? filteredPosts.map(post => (
									<Block key={post.id} margin="3em 0">
										<LinkInternal to={`blog/${post.node.slug}`}>
											<TextL>{post.node.title}</TextL>
										</LinkInternal>
										<TextM margin="0.25em 0">
											{post.node.shortDescription.shortDescription}
										</TextM>
										<Filter left margin="0 0 0 -0.5em">
											{post.node.category.map(category => (
												<Button
													key={category}
													onClick={e => {
														this.filterPosts(e)
														window.scrollTo(0, 0)
													}}
													style={{
														fontSize: 15,
														padding: '0.5em 1.5em',
														backgroundColor:
															category === currentFilter ? mist : light,
													}}
												>
													{category}
												</Button>
											))}
										</Filter>
									</Block>
							  ))
							: posts.map(post => (
									<Block key={post.id} margin="3em 0">
										<LinkInternal to={`blog/${post.node.slug}`}>
											<TextL>{post.node.title}</TextL>
										</LinkInternal>
										<TextM margin="0.25em 0">
											{post.node.shortDescription.shortDescription}
										</TextM>
										<Filter left margin="0 0 0 -0.5em">
											{post.node.category.map(category => (
												<Button
													key={category}
													onClick={e => {
														this.filterPosts(e)
														window.scrollTo(0, 0)
													}}
													style={{
														fontSize: 15,
														padding: '0.5em 1.5em',
														backgroundColor:
															category === currentFilter ? mist : light,
													}}
												>
													{category}
												</Button>
											))}
										</Filter>
									</Block>
							  ))}
					</Content>
				</Wrapper>
			</Layout>
		)
	}
}

export default Blog

export const blogQuery = graphql`
	query blogPageQuery {
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
