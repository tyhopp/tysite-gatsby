import React from 'react'
import styled from 'styled-components'

const MapPin = props => (
	<Svg
		width="16px"
		height="20px"
		viewBox="0 0 16 20"
		xmlns="http://www.w3.org/2000/svg"
	>
		<g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
			<g transform="translate(-553.000000, -2486.000000)">
				<rect fill="none" x="0" y="0" width="1185" height="2628" />
				<g transform="translate(538.000000, 2476.000000)">
					<g transform="translate(15.000000, 10.000000)">
						<ellipse fill="#FFFFFF" cx="8.5" cy="7.5" rx="6.5" ry="7.5" />
						<path
							d="M8,20 C7.77023499,20 7.5613577,19.9 7.4151436,19.74 C6.66318538,18.92 0,11.66 0,7.66 C-7.42081186e-16,3.44 3.5926893,0 8,0 C12.4073107,0 16,3.44 16,7.66 C16,11.64 9.33681462,18.92 8.5848564,19.74 C8.4386423,19.9 8.22976501,20 8,20 Z M8,1.52 C4.46997389,1.52 1.58746736,4.28 1.58746736,7.66 C1.58746736,10.3 5.78590078,15.56 8,18.08 C10.2140992,15.58 14.4125326,10.3 14.4125326,7.66 C14.4125326,4.28 11.5300261,1.52 8,1.52 Z"
							fill="#FF7571"
							fillRule="nonzero"
						/>
						<path
							d="M8,12 C5.79166667,12 4,10.2083333 4,8 C4,5.79166667 5.79166667,4 8,4 C10.2083333,4 12,5.79166667 12,8 C12,10.2083333 10.2083333,12 8,12 Z M8,5.58333333 C6.66666667,5.58333333 5.58333333,6.66666667 5.58333333,8 C5.58333333,9.33333333 6.66666667,10.4166667 8,10.4166667 C9.33333333,10.4166667 10.4166667,9.33333333 10.4166667,8 C10.4166667,6.66666667 9.33333333,5.58333333 8,5.58333333 Z"
							fill="#FF7571"
							fillRule="nonzero"
						/>
					</g>
				</g>
			</g>
		</g>
	</Svg>
)

const Svg = styled.svg`
	position: absolute;
	z-index: 2;
	transform: translate(-53px, 28px);
`

export default MapPin
