import styled from 'styled-components'
import media from '../utils/media'
import Link from 'gatsby-link'
import { gray, light, white } from '../utils/colors'

const Box = styled(Link)`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding: 0 2.5em;
	height: 54px;
	width: 33.33%;
	border-left: 1px solid ${gray};
	cursor: pointer;
	background-color: ${props => (props.color ? props.color : white)};
	transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);

	${media.tab`
		width: initial;
		padding: 0 3em;
	`}
	${media.desk`
		height: 50px;
		padding: 0 3.5em;
	`}

	&:hover {
		background-color: ${light};
	}
`

export default Box
