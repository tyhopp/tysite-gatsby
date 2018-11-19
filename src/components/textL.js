import styled from 'styled-components'
import { dark } from '../utils/colors'

const TextL = styled.h2`
	font-family: Quincy, serif;
	font-size: 34px;
	color: ${dark};
	line-height: 42px;
	padding: ${props => (props.padding ? props.padding : `auto`)};
	margin: ${props => (props.margin ? props.margin : `auto`)};
	text-align: ${props => (props.center ? `center` : `left`)};
`

export default TextL
