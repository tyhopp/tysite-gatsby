import styled from 'styled-components'
import media from '../utils/media'
import { dark } from '../utils/colors'

const TextS = styled.div`
	font-family: ${props =>
			props.medium ? `HK Grotesk Medium` : `HK Grotesk Regular`},
		sans-serif;
	font-size: 17px;
	color: ${dark};
	line-height: 28px;
	padding: ${props => (props.padding ? props.padding : `auto`)};
	margin: ${props => (props.margin ? props.margin : `auto`)};
	text-align: ${props => (props.center ? `center` : `left`)};

	${media.desk`
		font-size: 18px;
	`}
`

export default TextS
