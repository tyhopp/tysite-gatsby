import styled from 'styled-components'
import media from '../utils/media'

const Content = styled.div`
  margin: 0 auto;
  max-width: 330px;
  padding: 0 1em;

  ${media.tab`
		max-width: 550px;
	`};
`

export default Content
