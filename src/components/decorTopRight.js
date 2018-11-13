import React from 'react'
import styled from 'styled-components'
import media from '../utils/media'

const DecorTopRight = props => (
	<Svg viewBox="0 0 309 618" xmlns="http://www.w3.org/2000/svg">
		<g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
			<g transform="translate(-876.000000, -268.000000)">
				<rect fill="none" x="0" y="0" width="1185" height="2628" />
				<path
					d="M1185,268 L1185,312 C1038.64454,312 920,430.644541 920,577 C920,723.355459 1038.64454,842 1185,842 L1185,886 C1014.34401,886 876,747.655988 876,577 C876,406.344012 1014.34401,268 1185,268 Z"
					id="topRight"
					fill="#FF7571"
					fillRule="nonzero"
				/>
			</g>
		</g>
	</Svg>
)

const Svg = styled.svg`
	position: absolute;
	z-index: -1;
	width: 309px;
	height: 618px;
	top: 400px;
	right: 0;

	${media.mbl`
		top: 310px;
	`} 
	${media.tab`
		top: 250px;
		right: -150px;
	`}
	${media.desk`
		top: 216px;
		right: -50px;
	`}
	${media.deskL`
		top: 216px;
		right: 0;
	`};
`

export default DecorTopRight
