import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Wrapper from '../components/wrapper'
import Column from '../components/column'
import Row from '../components/row'
import TextXL from '../components/textXL'
import TextM from '../components/textM'
import LinkExternal from '../components/linkExternal'
import Card from '../components/card'
import EmojiWaveHand from '../emoji/emojiWaveHand'
import { graphql } from 'gatsby'

class Index extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			// none yet
		}
	}

	render() {
		const items = this.props.data.allContentfulPortfolioItem.edges
		// const map = this.props.data.map

		return (
			<Layout location={this.props.location}>
				<Helmet>
					<title>Work | Ty Hopp</title>
					<meta name="title" content="Ty Hopp" />
					<meta
						name="description"
						content="Singapore-based frontend developer and designer crafting delightful experiences on the web, iOS and Android."
					/>
					<meta name="keywords" content="frontend, developer, designer" />
					<meta property="og:type" content="website" />
					<meta property="og:title" content="Ty Hopp" />
					<meta
						property="og:description"
						content="Singapore-based frontend developer and designer crafting delightful experiences on the web, iOS and Android."
					/>
					<meta property="og:url" content="https://tyhopp.com" />
					<meta
						property="og:image"
						content="https://tyhopp.com/openGraphCard.png"
					/>
					<meta property="og:image:width" content="1200" />
					<meta property="og:image:height" content="600" />
					<meta name="twitter:card" content="summary_large_image" />
					<meta name="twitter:creator" content="@doestyhopp" />
				</Helmet>
				<Wrapper padding="0 1em">
					<Column margin="0 auto" style={{ maxWidth: 440 }}>
						<Row center margin="0 0 1em 0">
							<TextXL margin="0 0.25em 0 0">Hi, I'm Ty</TextXL>
							<EmojiWaveHand />
						</Row>
						<TextM>
							I’m a Singapore-based frontend developer looking for a strong team
							to grow with. I care about building pragmatic, culturally informed
							products for people.
						</TextM>
						<TextM>
							I specialize in the full lifecycle of product development -
							design, prototype and development. If this sounds like your cup of
							tea, see my work experience below{' '}
							<span
								role="img"
								aria-label="Finger pointing down emoji"
								style={{ fontSize: 20 }}
							>
								👇
							</span>
						</TextM>
						{items &&
							items.map(item => <Card item={item} key={item.node.id} />)}
						<TextM margin="1em 0 0 0">
							I'm also a{' '}
							<LinkExternal
								href="https://www.upwork.com/fl/tyhopp"
								target="_blank"
								rel="noopener"
							>
								Top Rated freelancer on Upwork
							</LinkExternal>{' '}
							for UI/UX design and frontend developement.
						</TextM>
						<TextM>
							Other things I've built include{' '}
							<LinkExternal
								href="https://tenx.tech"
								target="_blank"
								rel="noopener"
							>
								the TenX website
							</LinkExternal>
							,{' '}
							<LinkExternal
								href="https://myahmahsay.com"
								target="_blank"
								rel="noopener"
							>
								My Ahmah Say
							</LinkExternal>
							, and{' '}
							<LinkExternal
								href="https://tysite-v2.netlify.com"
								target="_blank"
								rel="noopener"
							>
								v2 of this site.
							</LinkExternal>
						</TextM>
						<TextM>
							I can be found around the web on{' '}
							<LinkExternal
								href="https://twitter.com/doestyhopp"
								target="_blank"
								rel="noopener"
							>
								Twitter
							</LinkExternal>
							,{' '}
							<LinkExternal
								href="https://github.com/tyhopp"
								target="_blank"
								rel="noopener"
							>
								GitHub
							</LinkExternal>
							, and{' '}
							<LinkExternal
								href="https://www.linkedin.com/in/tyhopp"
								target="_blank"
								rel="noopener"
							>
								LinkedIn
							</LinkExternal>
							.
						</TextM>
						<TextM margin="0 0 2em 0">
							Otherwise, feel free to drop me an email at{' '}
							<LinkExternal href="mailto:hopp.ty.c@gmail.com">
								hopp.ty.c@gmail.com
							</LinkExternal>{' '}
							if it suits!
						</TextM>
					</Column>
				</Wrapper>
			</Layout>
		)
	}
}

export default Index

export const indexQuery = graphql`
	query indexPageQuery {
		allContentfulPortfolioItem(sort: { fields: [order], order: ASC }) {
			edges {
				node {
					id
					title
					position
					order
					link
					accent
					secondAccent
					logo {
						id
						description
						file {
							url
						}
					}
					bullets {
						content {
							... on ContentfulBlockText {
								id
								body {
									body
								}
							}
						}
					}
				}
			}
		}
	}
`
