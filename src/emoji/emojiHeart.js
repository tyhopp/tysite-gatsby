import React from 'react'
import styled from 'styled-components'

const EmojiHeart = () => (
	<Svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 27 23"
		aria-labelledby="emojiHeart"
	>
		<title id="emojiHeart">Lists</title>
		<g fill="none" fill-rule="evenodd">
			<path
				fill="#FA2626"
				fill-rule="nonzero"
				d="M13.5,3.37088 C9.918,-2.57876 0,-0.25392 0,7.22062 C0,12.23876 4.5738,15.5963 13.5,23 C22.4262,15.5963 27,12.23876 27,7.22062 C27,-0.25392 17.082,-2.57876 13.5,3.37088 Z"
			/>
			<path
				fill="#E11616"
				fill-rule="nonzero"
				d="M13.0995,4.11332 C13.24035,3.77798 13.5,3.37088 13.5,3.37088 C12.52305,1.69556 11.09115,0.97106 11.09115,0.97106 C12.60045,2.40028 13.0995,4.11332 13.0995,4.11332 Z M21.34755,0.20608 C23.30055,1.39196 24.7149,3.47852 24.7149,6.30062 C24.7149,10.87072 19.5399,16.17866 14.7303,20.69218 C13.2255,22.10576 13.5,21.92866 9.2034,19.44466 C9.75105,19.89684 12.91455,22.51424 13.5,23 C22.4262,15.5963 27,12.23876 27,7.22062 C27,3.38008 24.3801,0.90344 21.34755,0.20608 Z"
			/>
			<path
				fill="#FF6565"
				d="M1.61145,6.1318 C1.83195,7.7165 4.73355,4.6161 7.6716,1.9504 C9.5679,0.23598 0.9486,1.36436 1.61145,6.1318 Z M14.6466,3.95738 C14.7753,4.88428 16.4727,3.0705 18.19125,1.51156 C19.3005,0.5083 14.2587,1.1684 14.6466,3.95738 Z"
			/>
		</g>
	</Svg>
)

const Svg = styled.svg`
	width: 27px;
	height: 23px;
`

export default EmojiHeart
