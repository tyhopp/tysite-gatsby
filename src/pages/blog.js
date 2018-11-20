import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import TextXL from '../components/textXL'
import TextL from '../components/textL'
import Wrapper from '../components/wrapper'
import Column from '../components/column'
import Block from '../components/block'
import Button from '../components/button'
import Filter from '../components/filter'
import uniq from 'lodash/uniq'
import { graphql } from 'gatsby'
import { white } from '../utils/colors'

class BlogAll extends React.Component {
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

		if (this.props.location.state.filterCategory) {
			this.filterPostsFromArticle()
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
			<Layout>
				<Wrapper padding="0 1em 5em 1em">
					<Helmet>
						<title>Blog</title>
						<meta name="title" content="Blog" />
						<meta name="description" content="All blog posts from Ty Hopp" />
						<meta property="og:type" content="website" />
						<meta property="og:title" content="Ty Hopp" />
						<meta
							property="og:description"
							content="All blog posts from Ty Hopp"
						/>
						<meta property="og:url" content="https://tyhopp.com/blog-all" />
					</Helmet>
					<Block>
						<TextXL center padding="0.5em 0">
							Blog
						</TextXL>
					</Block>
					<Block>
						<Filter>
							<Button
								onClick={() => this.setState({ currentFilter: '' })}
								style={{
									backgroundColor: currentFilter !== '' ? white : `ghostwhite`,
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
													category === currentFilter ? `ghostwhite` : white,
											}}
										>
											{category}
										</Button>
									)
								})}
						</Filter>
					</Block>
					<Column>
						{currentFilter !== ''
							? filteredPosts.map(post => (
									<TextL key={post.id}>{post.title}</TextL>
							  ))
							: posts.map(post => <TextL key={post.id}>{post.title}</TextL>)}
					</Column>
				</Wrapper>
			</Layout>
		)
	}
}

export default BlogAll

export const blogAllQuery = graphql`
	query blogAllPageQuery {
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
