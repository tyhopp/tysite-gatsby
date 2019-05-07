[![Netlify Status](https://api.netlify.com/api/v1/badges/b3bea723-3b13-4f5a-899b-d567a2147fa6/deploy-status)](https://app.netlify.com/sites/tysite-v3/deploys)

# Tysite v3

A site by Ty Hopp.

## Develop

1.  `git clone https://github.com/tyhopp/tysite-v3`
2.  `cd tysite-v3`
3.  `cp .env.example .env` to create a `.env` file. Add the secret API keys from Contentful to this file.
4.  `npm i` to install required npm modules
5.  `npm run develop` - starts a local development project at `localhost:8000`

## Publish

This site uses Contentful as a CMS to author content, Gatsby to build the site, and Netlify to deploy it.

New posts on Contentful that are **published** or **unpublished** trigger an automatic rebuild of the website at https:/tyhopp.me.

* Note - it may take a minute or two to see the changes reflected in the production site.
