import React from 'react'
import Layout from '../components/layout'
import Wrapper from '../components/wrapper'
import Block from '../components/block'
import Ahmah from '../components/ahmah'
import Header from '../components/header'
import TextM from '../components/textM'
import TextXL from '../components/textXL'
import Column from '../components/column'
import LinkInternal from '../components/linkInternal'

class MissingRoute extends React.Component {
	render() {
		return (
			<Layout>
				<Wrapper padding="0 1em">
					<Header>
						<Block>
							<LinkInternal to="/" borderless aria-label="Link to home">
								<Ahmah />
							</LinkInternal>
						</Block>
					</Header>
					<Column padding="2em 0">
						<TextXL>404</TextXL>
						<TextM center padding="2em 0" style={{ width: '250px' }}>
							Something's missing here. <br />Try heading to the{' '}
							<LinkInternal to="/">home page.</LinkInternal>
						</TextM>
					</Column>
				</Wrapper>
			</Layout>
		)
	}
}

export default MissingRoute
