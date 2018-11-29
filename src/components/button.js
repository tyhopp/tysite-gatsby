import styled from 'styled-components'
import { dark, light, mist, white } from '../utils/colors'

const Button = styled.div`
	display: block;
	font-family: HK Grotesk Medium, sans-serif;
	letter-spacing: 0.75px;
	width: fit-content;
	align-self: center;
	color: ${props => (props.accent ? white : dark)};
	text-decoration: none;
	text-align: center;
	padding: 0.75em 1.5em;
	background-color: ${props => (props.accent ? props.accent : light)};
	cursor: pointer;
	user-select: none;
	margin: ${props => (props.center ? `1em auto` : `0.3em`)};
	border-radius: 100px;
	line-height: 20px;
	transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);

	&:visted {
		background-color: ${props => (props.accent ? props.accent : light)};
	}
	&:hover {
		background-color: ${props =>
			props.secondAccent ? props.secondAccent : mist};
	}
`

export default Button
