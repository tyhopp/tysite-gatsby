import styled from 'styled-components'
import { dark } from '../utils/colors'
import media from '../utils/media'

const TextXL = styled.h1`
	font-family: Quincy, serif;
	font-size: 44px;
	color: ${dark};
	line-height: 52px;
	padding: ${props => (props.padding ? props.padding : `auto`)};
	margin: ${props => (props.margin ? props.margin : `auto`)};
	text-align: ${props => (props.center ? `center` : `left`)};

	${media.tab`
		font-size: 48px;
		line-height: 58px;
	`};
`

export default TextXL
