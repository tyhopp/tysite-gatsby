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
import IconClose from '../components/iconClose'
import Modal from 'react-modal'
import ListModalOpen from '../components/listModalOpen'
import uniq from 'lodash/uniq'
import { graphql } from 'gatsby'
import { light, mist, white } from '../utils/colors'

class Blog extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			categories: [],
			loaded: false,
			posts: this.props.data.allContentfulBlogPost.edges,
			currentFilter: '',
			filteredPosts: [],
			showModal: false,
		}
		this.toggleModal = this.toggleModal.bind(this)
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

	toggleModal() {
		this.state.showModal
			? this.setState({ showModal: false })
			: this.setState({ showModal: true })
	}

	componentDidMount() {
		Modal.setAppElement('#___gatsby')

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

		const modalStyles = {
			overlay: {
				backgroundColor: 'rgba(10, 0, 55, 0.1)',
				zIndex: 4,
			},
			content: {
				top: 0,
				right: 0,
				left: 'none',
				width: '90vw',
				height: '100vh',
				backgroundColor: white,
				border: 'none',
				borderRadius: '5px',
				padding: '3em 1em',
			},
		}

		return (
			<Layout location={this.props.location}>
				<Wrapper padding="0 0 5em 0">
					<Helmet>
						<title>Blog | Ty Hopp</title>
						<meta name="title" content="Blog | Ty Hopp" />
						<meta
							name="description"
							content="Technical articles about frontend development and design."
						/>
						<meta property="og:type" content="website" />
						<meta property="og:title" content="Ty Hopp" />
						<meta
							property="og:description"
							content="All blog posts from Ty Hopp"
						/>
						<meta property="og:url" content="https://tyhopp.com/blog" />
						<meta
							property="og:image"
							content="https://tyhopp.com/openGraphCard.png"
						/>
						<meta property="og:image:width" content="2400" />
						<meta property="og:image:height" content="1200" />
					</Helmet>
					<Block>
						<TextXL center>Blog</TextXL>
						<TextM center padding="1em" style={{ maxWidth: 300 }}>
							Technical articles about frontend development and design.
						</TextM>
					</Block>
					<Block>
						<ListModalOpen onClick={this.toggleModal} margin="0em">
							<TextM
								padding="0.5em 0"
								medium
								style={{
									letterSpacing: 0.75,
								}}
							>
								Filter by category
							</TextM>
						</ListModalOpen>
						<Modal
							isOpen={this.state.showModal}
							onRequestClose={this.toggleModal}
							style={modalStyles}
							contentLabel="Mobile Menu Modal"
						>
							<Block onClick={this.toggleModal}>
								<IconClose />
							</Block>
							<Filter show margin="1em 0">
								<Button
									onClick={() =>
										this.setState({ currentFilter: '', showModal: false })
									}
									style={{
										backgroundColor: currentFilter !== '' ? light : mist,
										margin: '0.5em',
									}}
								>
									All
								</Button>
								{loaded &&
									categories.map(category => {
										return (
											<Button
												bigger
												key={category}
												onClick={e => {
													this.filterPosts(e)
													this.setState({ showModal: false })
													window.scrollTo(0, 0)
												}}
												style={{
													backgroundColor:
														category === currentFilter ? mist : light,
												}}
											>
												{category}
											</Button>
										)
									})}
							</Filter>
						</Modal>
						<Filter show={this.state.showModal ? true : false}>
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
									<Block key={post.node.id} margin="2em 0">
										<LinkInternal to={`blog/${post.node.slug}`}>
											<TextL article>{post.node.title}</TextL>
										</LinkInternal>
										<TextM margin="0.25em 0">
											{post.node.shortDescription.shortDescription}
										</TextM>
										<Filter show left margin="0 0 0 -0.5em">
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
									<Block key={post.node.id} margin="2em 0">
										<LinkInternal to={`blog/${post.node.slug}`}>
											<TextL article>{post.node.title}</TextL>
										</LinkInternal>
										<TextM margin="0.25em 0">
											{post.node.shortDescription.shortDescription}
										</TextM>
										<Filter show left margin="0 0 0 -0.5em">
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
