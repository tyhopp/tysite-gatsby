import React from 'react'
import styled from 'styled-components'
import TextL from './textL'
import TextM from './textM'
import List from './list'
import Bullet from './bullet'
import Button from './button'
import LinkExternal from './linkExternal'
import Block from './block'
import Column from './column'
import { gray } from '../utils/colors'
import '../utils/markdown.css'

const Card = props => {
	const item = props.item.node

	return (
		<Container key={item.id}>
			<Block padding="2em">
				<Column padding="0.5em 0em">
					<img alt={item.logo.description} src={item.logo.file.url} />
				</Column>
				<TextL center padding="0.25em 0em">
					{item.title}
				</TextL>
				<TextM
					center
					style={{ fontFamily: 'HK Grotesk Medium', maxWidth: '172px' }}
				>
					{item.position}
				</TextM>
				<List id={item.title}>
					{item.bullets.content.map(bullet => (
						<Bullet key={bullet.id} id={bullet.id}>
							{bullet.body.body}
						</Bullet>
					))}
				</List>
				<LinkExternal
					borderless
					href={item.link}
					target="_blank"
					rel="noopener"
				>
					<Button center accent={item.accent} secondAccent={item.secondAccent}>
						See website
					</Button>
				</LinkExternal>
			</Block>
		</Container>
	)
}

const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin: 1em 0;
	text-decoration: none;
	border: 1px solid ${gray};
	max-width: 440px;
`

export default Card
