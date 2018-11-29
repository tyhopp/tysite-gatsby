import styled from 'styled-components'
import media from '../utils/media'
import { white, mist } from '../utils/media'

const Filter = styled.div`
	display: ${props => (props.show ? `flex` : `none`)};
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: ${props => (props.left ? `flex-start` : `center`)};
	padding: ${props => (props.padding ? props.padding : `auto`)};
	margin: ${props => (props.margin ? props.margin : `auto`)};

	${media.desk`
		display: flex;
		max-width: 550px;
	`};

	&:visited {
		background-color: ${white};
	}
	&:active {
		background-color: ${mist};
	}
`

export default Filter
