import React from 'react';
import Layout from '../components/layout';
import './404.css';

class FourOhFour extends React.Component {
	render() {
		return (
			<Layout location={this.props.location}>
					<main>
					<h1 class="four-oh-four-title">404</h1>
						<p class="four-oh-four-text">
							Something's missing here.
							<br></br>
							Try heading back to the{' '}
							<a href="/">home page</a>.
						</p>
					</main>
			</Layout>
		)
	}
}

export default FourOhFour
