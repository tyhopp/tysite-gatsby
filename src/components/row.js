import styled from 'styled-components'

const Row = styled.div`
	display: flex;
	flex-direction: row;
	padding: ${props => (props.padding ? props.padding : `auto`)};
	margin: ${props => (props.margin ? props.margin : `auto`)};
`

export default Row
