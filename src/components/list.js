import styled from 'styled-components'

const List = styled.ul`
	padding: ${props => (props.padding ? props.padding : `auto`)};
	margin: ${props => (props.margin ? props.margin : `auto`)};
`

export default List
