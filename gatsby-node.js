const _ = require(`lodash`)
const Promise = require(`bluebird`)
const path = require(`path`)
const slash = require(`slash`)
const console = require(`console`)

const processBlogPosts = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    graphql(
      `
        {
          allContentfulBlogPost {
            edges {
              node {
                id
                contentful_id
                title
                slug
              }
            }
          }
        }
      `
    ).then(result => {
      if (result.errors) {
        console.error(result.errors)
        reject(result.errors)
      }

      _.each(
        _.groupBy(
          result.data.allContentfulBlogPost.edges,
          'node.contentful_id'
        ),
        (edges, contentfulId) => {
          _.each(edges, edge => {
            const pageTemplate = path.resolve(`src/templates/blog-post.js`)

            createPage({
              path: `/notes/${edge.node.slug}`,
              component: slash(pageTemplate),
              context: {
                id: edge.node.id,
                contentfulId: edge.node.contentful_id,
                title: edge.node.title,
                slug: edge.node.slug,
                content: edge.node.content,
              },
            })
          })
        }
      )
      resolve()
    })
  })
}

exports.createPages = ({ graphql, actions }) => {
  Promise.all([processBlogPosts({ graphql, actions })])
}
