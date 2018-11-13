import React from 'react'
import styled from 'styled-components'
import media from '../utils/media'

const DecorTopLeft = props => (
	<Svg viewBox="0 0 350 647" xmlns="http://www.w3.org/2000/svg">
		<g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
			<g>
				<rect fill="none" x="0" y="0" width="1185" height="2628" />
				<path
					d="M1.8189894e-12,602.216649 C177.011889,566.740227 306,411.292015 306,229.164588 C306,150.657988 282.197316,75.5410886 238.57191,12.5394296 C237.894771,11.5615399 230.970989,1.29662769 230,0 L283.089135,0 C283.960641,1.36590111 284.611999,2.39162925 285.043208,3.07718444 C327.165821,70.0455198 350,148.020089 350,229.164588 C350,434.308298 203.314829,609.074153 4.03327368,646.265162 C3.13490154,646.432821 1.79047698,646.677767 1.8189894e-12,647 L1.8189894e-12,602.216649 Z"
					id="topLeft"
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
	top: -300px;
	left: -290px;
	width: 350px;
	height: 647px;

	${media.mbl`
		top: -350px;
		left: -260px;
	`} ${media.tab`
		top: -200px;
		left: -200px;
	`};

	${media.desk`
		top: 0;
		left: -100px;
	`};

	${media.deskL`
		top: 0;
		left: 0;
	`};
`

export default DecorTopLeft
