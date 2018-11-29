import styled from 'styled-components'
import media from '../utils/media'
import { white, gray } from '../utils/colors'

const Tile = styled.div`
	padding: 1em 2em;
	background-color: ${white};
	margin: 2em 1em;
	max-width: 300px;
	border: 1px solid ${gray};
`

export default Tile
