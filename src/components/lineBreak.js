import styled from 'styled-components'
import media from '../utils/media'
import { gray } from '../utils/colors'

const LineBreak = styled.div`
	display: none;
	width: 100%;
	border-bottom: 1px solid ${gray};
	padding: 1em 0;

	${media.desk`
		display: block;
	`}
`

export default LineBreak
