import styled from 'styled-components'
import media from '../utils/media'
import Link from 'gatsby-link'
import { gray, light } from '../utils/colors'

const Box = styled(Link)`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding: 0 2.5em;
	height: 56px;
	width: 33.33%;
	border-left: 1px solid ${gray};
	cursor: pointer;

	${media.tab`
		width: initial;
		padding: 0 3em;
	`}
	${media.desk`
		padding: 0 3.5em;
	`}

	&:hover {
		background-color: ${light};
	}
`

export default Box
