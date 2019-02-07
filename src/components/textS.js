import styled from 'styled-components'
import { dark } from '../utils/colors'

const TextS = styled.div`
  font-family: 'Fira Sans', sans-serif;
  font-size: 16px;
  color: ${dark};
  line-height: 30px;
  padding: ${props => (props.padding ? props.padding : `auto`)};
  margin: ${props => (props.margin ? props.margin : `auto`)};
  text-align: ${props => (props.center ? `center` : `left`)};
`

export default TextS
