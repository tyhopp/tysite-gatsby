import styled from 'styled-components'
import { dark } from '../utils/colors'

const TextS = styled.div`
	font-family: ${props =>
			props.medium ? `HK Grotesk Medium` : `HK Grotesk Regular`},
		sans-serif;
	font-size: 16px;
	color: ${dark};
	line-height: 28px;
	padding: ${props => (props.padding ? props.padding : `auto`)};
	text-align: ${props => (props.center ? `center` : `left`)};
`

export default TextS
