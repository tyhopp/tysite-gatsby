import React from 'react'
import styled from 'styled-components'

const DecorBottom = props => (
	<Svg viewBox="0 0 912 240" xmlns="http://www.w3.org/2000/svg">
		<g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
			<g transform="translate(-137.000000, -2388.000000)">
				<rect fill="none" x="0" y="0" width="1185" height="2628" />
				<path
					d="M994.604371,2629 C994.272143,2628.57188 994.022785,2628.25094 993.856295,2628.03718 C900.931411,2508.73209 755.943137,2431.99972 593.039269,2431.99972 C430.085816,2431.99972 285.058865,2508.67616 192.137403,2628.04295 C191.972262,2628.25509 191.724921,2628.5736 191.39538,2628.99849 L137,2629 C137.292859,2628.5704 137.512668,2628.24857 137.659428,2628.03452 C237.093541,2483.00885 403.960655,2388 593.039269,2388 C782.060251,2388 948.883271,2483.0654 1048.32817,2628.01696 C1048.47769,2628.23491 1048.70164,2628.56259 1049,2629 L994.604371,2629 Z"
					id="bottom"
					fill="#FF7571"
					fillRule="nonzero"
				/>
			</g>
		</g>
	</Svg>
)

const Svg = styled.svg`
	position: absolute;
	z-index: -2;
	width: 912px;
	height: 240px;
	bottom: 0;
	left: 50%;
	-webkit-transform: translateX(-50%);
	transform: translateX(-50%);
`

export default DecorBottom
