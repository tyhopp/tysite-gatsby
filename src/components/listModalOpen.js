import styled from 'styled-components'
import media from '../utils/media'
import { white, gray } from '../utils/colors'

const ListModalOpen = styled.div`
	display: flex;
	flex-direction: row;
	width: 100%;
	justify-content: center;
	background-color: ${white};
	cursor: pointer;
	user-select: none;
	position: sticky;
	top: 200;
	z-index: 1;
	border-top: 1px solid ${gray};
	border-bottom: 1px solid ${gray};

	${media.desk`
		display: none;
	`};
`

export default ListModalOpen
