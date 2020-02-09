import React, { Component } from 'react';
import Layout from '../components/layout';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import emojiWaveHand from '../assets/svg/emoji-wave-hand.svg';
import './index.css';

class Index extends Component {
  constructor() {
    super();
    this._onTitleHover = this._onTitleHover.bind(this);
    this._onTitleEmojiAnimationEnd = this._onTitleEmojiAnimationEnd.bind(this);
  }

  componentDidMount() {
    this._title = document.querySelector('.index-title');
    this._titleEmoji = document.querySelector('.index-title-emoji');
    this._setData();
    this._setListeners(true);
  }

  componentWillUnmount() {
    this._setListeners(false)
  }

  _setData() {
    const cards = document.querySelector('.index-cards');
    this._data.forEach(item => {
      const cardData = { ...item?.node, link: {
        href: item?.node.link,
        text: 'See company',
        accent: item?.node.accent
      }};
      const card = document.createElement('ty-card');
      cards.appendChild(card);
      card.setData(cardData);
    });
  }

  _setListeners(flag) {
    const fnName = flag ? 'addEventListener': 'removeEventListener';
    this._title[fnName]('mouseover', this._onTitleHover);
    this._titleEmoji[fnName]('animationend', this._onTitleEmojiAnimationEnd);
  }

  _onTitleHover() {
    this._titleEmoji.classList.add('index-title-emoji--wave');
  }

  _onTitleEmojiAnimationEnd() {
    this._titleEmoji.classList.remove('index-title-emoji--wave');
  }

  render() {
    this._data = this.props.data?.allContentfulPortfolioItem?.edges || [];

    return (
      <Layout location={this.props.location}>
        <Helmet>
          <title>Ty Hopp</title>
          <meta name="title" content="Ty Hopp" />
          <meta
            name="description"
            content="Singapore-based software developer building useful things for people."
          />
          <meta name="keywords" content="software, developer, designer" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Ty Hopp" />
          <meta
            property="og:description"
            content="Singapore-based software developer building useful things for people."
          />
          <meta property="og:url" content="https://tyhopp.com" />
          <meta
            property="og:image"
            content="https://tyhopp.com/openGraphCard.png"
          />
          <meta property="og:image:width" content="2400" />
          <meta property="og:image:height" content="1200" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:creator" content="@doestyhopp" />
        </Helmet>
        <main class="index">
          <h1 class="index-title">
            Hi, I'm Ty
            <img class="index-title-emoji" src={emojiWaveHand} alt="Wave hand emoji"></img>
          </h1>
          <p class="index-description">
            I’m a Singapore-based software developer currently working at{' '}
            <a href="https://sgx.com" target="_blank" rel="noopener noreferrer">SGX</a>.
            I care about building useful things for people.
          </p>
          <p class="index-description">
            Building for the web by day, I work on an iOS side project by night. Here's what else I've worked on{' '}
            <span class="index-description-emoji" role="img" aria-label="Finger pointing down emoji">
              👇
            </span>
          </p>
          <div class="index-cards"></div>
          <p class="index-description">
            Other things I've built include&nbsp;
            <a href="https://tenx.tech" target="_blank" rel="noopener noreferrer">the TenX website</a>
            &nbsp;and&nbsp;
            <a href="https://myahmahsay.com" target="_blank" rel="noopener noreferrer">My Ahmah Say</a>.
          </p>
          <p class="index-description">
            I can be found around the web on&nbsp;
            <a href="https://twitter.com/doestyhopp" target="_blank" rel="noopener noreferrer">Twitter</a>,&nbsp;
            <a href="https://github.com/tyhopp" target="_blank" rel="noopener noreferrer">GitHub</a>, and&nbsp;
            <a href="https://www.linkedin.com/in/tyhopp" target="_blank" rel="noopener noreferrer">LinkedIn</a>.&nbsp;
            Please do say hi!
          </p>
        </main>
      </Layout>
    )
  }
}

export default Index

export const indexQuery = graphql`
  query indexPageQuery {
    allContentfulPortfolioItem(sort: { fields: [order], order: ASC }) {
      edges {
        node {
          id
          title
          position
          order
          link
          accent
          logo {
            id
            description
            file {
              url
            }
          }
          darkLogo {
            id
            description
            file {
              url
            }
          }
          bullets {
            content {
              ... on ContentfulBlockText {
                id
                body {
                  body
                }
              }
            }
          }
        }
      }
    }
  }
`
