import styled from 'styled-components'
import { dark } from '../utils/colors'

const Bullet = styled.li`
  font-family: 'Fira Sans', sans-serif;
  font-size: 16px;
  line-height: 28px;
  color: ${dark};
  padding: ${props => (props.padding ? props.padding : `0.5em 0`)};
  margin: ${props => (props.margin ? props.margin : `auto`)};
  text-align: ${props => (props.center ? `center` : `left`)};
`

export default Bullet
