import styled from 'styled-components'
import media from '../utils/media'

const Filter = styled.div`
	display: ${props => (props.show ? `flex` : `none`)};
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: ${props => (props.left ? `flex-start` : `center`)};
	padding: ${props => (props.padding ? props.padding : `auto`)};
	margin: ${props => (props.margin ? props.margin : `auto`)};

	${media.desk`
		display: flex;
	`};
`

export default Filter
