import styled from 'styled-components'
import { dark } from '../utils/colors'

const TextM = styled.p`
	font-family: ${props =>
			props.medium ? `HK Grotesk Medium` : `HK Grotesk Regular`},
		sans-serif;
	font-size: 17px;
	line-height: 30px;
	color: ${dark};
	padding: ${props => (props.padding ? props.padding : `0.5em 0`)};
	margin: ${props => (props.margin ? props.margin : `auto`)};
	text-align: ${props => (props.center ? `center` : `left`)};
`

export default TextM
