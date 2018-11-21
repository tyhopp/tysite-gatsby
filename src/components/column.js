import styled from 'styled-components'

const Column = styled.div`
	display: flex;
	flex-direction: column;
	align-items: ${props => (props.left ? `flex-start` : `center`)};
	padding: ${props => (props.padding ? props.padding : `auto`)};
	margin: ${props => (props.margin ? props.margin : `auto`)};
`

export default Column
