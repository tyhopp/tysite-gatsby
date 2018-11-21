import styled from 'styled-components'
import { dark, magenta } from '../utils/colors'

const LinkExternal = styled.a`
	color: ${dark};
	background-color: none;
	border: none;
	cursor: pointer;
	outline: none;
	text-decoration: none;
	box-shadow: none;
	border-bottom: 1px solid ${dark};
	padding: 0 0 1px 0;
	margin: 0;
	transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);

	&:hover {
		color: ${magenta};
		border-bottom: 1px solid ${magenta};
	}
`

export default LinkExternal
