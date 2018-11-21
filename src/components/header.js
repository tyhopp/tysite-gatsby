import React from 'react'
import styled from 'styled-components'
import media from '../utils/media'
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
			color={
				props.location.pathname.substring(0, 6) === '/lists' ? light : white
			}
		>
			<EmojiHeart />
		</Box>
	</Container>
)

const Container = styled.div`
	position: fixed;
	z-index: 3;
	top: 0;
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	height: 54px;
	width: 100%;
	background-color: ${white};
	border-bottom: 1px solid ${gray};

	${media.desk`
		height: 50px;
	`}
`

export default Header
