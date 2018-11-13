import styled from 'styled-components'
import { dark } from '../utils/colors'

const TextXS = styled.div`
	font-family: Didact Gothic, sans-serif;
	font-size: 12px;
	color: ${props => (props.color ? props.color : dark)};
	line-height: 16px;
	letter-spacing: 0.5px;
	padding: ${props => (props.padding ? props.padding : `auto`)};
	text-align: ${props => (props.center ? `center` : `left`)};
`

export default TextXS
