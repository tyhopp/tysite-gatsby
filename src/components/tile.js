import styled from 'styled-components'
import media from '../utils/media'
import { white, gray } from '../utils/colors'

const Tile = styled.div`
	padding: 1em 1.5em;
	background-color: ${white};
	margin: 1em;
	max-width: 300px;
	border: 1px solid ${gray};

	${media.tab`
		padding: 1em 3em;
	`}
`

export default Tile
