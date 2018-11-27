import styled from 'styled-components'
import { dark, magenta } from '../utils/colors'

const TextL = styled.h2`
	font-family: Quincy, serif;
	font-weight: normal;
	font-size: 34px;
	color: ${dark};
	line-height: 42px;
	padding: ${props => (props.padding ? props.padding : `auto`)};
	margin: ${props => (props.margin ? props.margin : `auto`)};
	text-align: ${props => (props.center ? `center` : `left`)};
	transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);

	&:hover {
		color: ${props => (props.article ? magenta : dark)};
	}
`

export default TextL
