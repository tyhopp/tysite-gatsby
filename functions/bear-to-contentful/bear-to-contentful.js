const { createBlogPost } = require('./src/actions/create');
const { BEAR_TO_CONTENTFUL } = process.env;

/**
 * A lambda function to create/update and publish blog posts in Contentful.
 */
exports.handler = async event => {

  // Ensure credentials are passed
  if (!event.headers['bear-to-contentful'] || (event.headers['bear-to-contentful'] !== BEAR_TO_CONTENTFUL)) {
    return {
      statusCode: 401,
      body: "Invalid Credentials"
    };
  }

  let data;

  // Parse payload if it's base64 encoded
  if (event.isBase64Encoded) {
    try {
      const buffer = Buffer.from(event.body, 'base64');
      data = buffer.toString();
    } catch(e) {
      console.log(`Failed to parse base64 payload. ${e}`);
      return {
        statusCode: 500,
        body: "Internal Server Error"
      };
    }
  } else {
    data = JSON.parse(event.body);
  }

  // Parse method and take appropriate action
  switch(event.httpMethod) {
    case 'POST':
    case 'PUT':
      return createBlogPost(data);
    default:
      return {
        statusCode: 405,
        body: "Method Not Allowed"
      };
  }
};