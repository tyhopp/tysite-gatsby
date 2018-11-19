import styled from 'styled-components'
import { dark } from '../utils/colors'

const LinkExternal = styled.a`
	color: ${dark};
	background-color: none;
	border: none;
	cursor: pointer;
	outline: none;
	text-decoration: none;
	box-shadow: none;
	border-bottom: ${props => (props.borderless ? `none` : `1px solid ${dark}`)};
	padding: 0 0 1px 0;
	margin: 0;
`

export default LinkExternal
