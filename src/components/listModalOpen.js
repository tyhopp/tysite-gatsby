import styled from 'styled-components'
import media from '../utils/media'
import { light, mist } from '../utils/colors'

const ListModalOpen = styled.div`
	display: flex;
	flex-direction: row;
	width: 100%;
	justify-content: center;
	background-color: ${light};
	cursor: pointer;
	user-select: none;
	margin: 1em 0 0 0;
	position: sticky;
	top: 200;
	z-index: 1;

	${media.desk`
		display: none;
	`};
`

export default ListModalOpen
