import React from 'react'
import Layout from '../components/layout'
import Wrapper from '../components/wrapper'
import TextM from '../components/textM'
import TextXL from '../components/textXL'
import Column from '../components/column'
import LinkInternal from '../components/linkInternal'

class MissingRoute extends React.Component {
	render() {
		return (
			<Layout>
				<Wrapper padding="0 1em">
					<Column padding="2em 0">
						<TextXL>404</TextXL>
						<TextM center padding="2em 0" style={{ width: '250px' }}>
							Something's missing here. <br />
							Try heading to the <LinkInternal to="/">home page.</LinkInternal>
						</TextM>
					</Column>
				</Wrapper>
			</Layout>
		)
	}
}

export default MissingRoute
