import styled from 'styled-components'
import media from '../utils/media'
import { dark, magenta } from '../utils/colors'

const TextL = styled.h2`
	font-family: Quincy, serif;
	font-size: 34px;
	color: ${dark};
	line-height: 42px;
	letter-spacing: -0.2px;
	padding: ${props => (props.padding ? props.padding : `auto`)};
	margin: ${props => (props.margin ? props.margin : `auto`)};
	text-align: ${props => (props.center ? `center` : `left`)};
	transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);

	${media.desk`
		letter-spacing: initial;
	`}

	&:hover {
		color: ${props => (props.article ? magenta : dark)};
	}
`

export default TextL
