import styled from 'styled-components'
import { Link } from 'gatsby'
import { dark } from '../utils/colors'

const LinkInternal = styled(Link)`
	color: ${dark};
	background-color: none;
	border: none;
	cursor: pointer;
	outline: none;
	text-decoration: none;
	box-shadow: none;
	border-bottom: 1px solid ${dark};
	padding: 0 0 0.25em 0;
	margin: 0;
`

export default LinkInternal
