const { createEntries } = require('./src/scripts/entries');
const { publishEntry } = require('./src/scripts/publish');
const { BEAR_TO_CONTENTFUL } = process.env;

exports.handler = async event => {

  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: "Method Not Allowed"
    };
  }

  if (!event.headers['bear-to-contentful'] || (event.headers['bear-to-contentful'] !== BEAR_TO_CONTENTFUL)) {
    return {
      statusCode: 401,
      body: "Invalid Credentials"
    };
  }

  if (event.body) {
    const article = JSON.parse(event.body);
    try {
      const [textEntry, containerEntry, postEntry] = await createEntries(article);

      // TODO - Refactor this using map
      await publishEntry(textEntry);
      await publishEntry(containerEntry);
      await publishEntry(postEntry);
      return {
        statusCode: 200,
        body: "Success"
      } 
    } catch(e) {
      return {
        statusCode: 500,
        body: "Internal Server Error"
      }
    }
  } else {
    return {
      statusCode: 400,
      body: "Bad Request"
    };
  }
};