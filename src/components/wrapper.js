import styled from 'styled-components'

const Wrapper = styled.div`
	padding: ${props => (props.padding ? props.padding : `2em 0`)};
	margin: 0 auto;
`

export default Wrapper
