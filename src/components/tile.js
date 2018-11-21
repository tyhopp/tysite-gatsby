import styled from 'styled-components'
import { white, gray } from '../utils/colors'

const Tile = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 1em 2em;
	background-color: ${white};
	margin: 2em 0;
	max-width: 300px;
	border: 1px solid ${gray};
`

export default Tile
