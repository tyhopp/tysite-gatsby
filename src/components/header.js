import React from 'react'
import styled from 'styled-components'
import Box from './box'
import EmojiCardBox from '../emoji/emojiCardBox'
import EmojiHandWriting from '../emoji/emojiHandWriting'
import EmojiHeart from '../emoji/emojiHeart'
import { gray, light, white } from '../utils/colors'

const Header = props => (
	<Container>
		<Box
			to="/"
			title="Work"
			color={props.location.pathname === '/' ? light : white}
		>
			<EmojiCardBox />
		</Box>
		<Box
			to="/blog"
			title="Blog"
			color={
				props.location.pathname.substring(0, 5) === '/blog' ? light : white
			}
		>
			<EmojiHandWriting />
		</Box>
		<Box
			to="/lists"
			title="Lists"
			style={{ borderRight: `1px solid ${gray}` }}
			color={props.location.pathname === '/lists' ? light : white}
		>
			<EmojiHeart />
		</Box>
	</Container>
)

const Container = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	height: 56px;
	border-bottom: 1px solid ${gray};
`

export default Header
