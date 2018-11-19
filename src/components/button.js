import styled from 'styled-components'
import { dark, white } from '../utils/colors'

const Button = styled.div`
	display: block;
	font-family: HK Grotesk Regular, sans-serif;
	font-weight: bold;
	letter-spacing: 0.75px;
	width: fit-content;
	align-self: center;
	color: ${props => (props.accent ? 'white' : dark)};
	text-decoration: none;
	text-align: center;
	padding: 0.75em 1.5em;
	background-color: ${props => (props.accent ? props.accent : white)};
	cursor: pointer;
	margin: 1em auto;
	border-radius: 100px;
	line-height: 20px;
	transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);

	&:hover {
		background-color: ${props =>
			props.secondAccent ? props.secondAccent : white};
	}
`

export default Button
