import React from 'react'
import styled from 'styled-components'
import Helmet from 'react-helmet'
import Footer from '../components/footer'
import { selectFavicon } from '../utils/favicon'

class Layout extends React.Component {
  render() {
    const { children } = this.props
    return (
      <Master>
        <Helmet>
          <meta charSet="utf-8" />
          <html lang="en" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0, viewport-fit=cover"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Fira+Sans"
            rel="stylesheet"
          />
        </Helmet>
        {selectFavicon(this.props.location)}
        <ty-header></ty-header>
        {children}
        {this.props.location.pathname === '/notes' ||
        this.props.location.pathname === '/lists' ? null : (
          <Footer />
        )}
      </Master>
    )
  }
}

const Master = styled.div`
  margin: 5em 0 0 0;
`

export default Layout
