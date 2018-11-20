import React from 'react'
import styled from 'styled-components'
import TextS from './textS'

const Footer = props => (
	<Container>
		<TextS center style={{ opacity: 0.3 }}>
			{new Date().getFullYear()} © Ty Hopp
		</TextS>
	</Container>
)

const Container = styled.div`
	padding: 1em;
	margin: 2em auto 0 auto;
	text-align: center;
`

export default Footer
