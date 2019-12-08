/**
 * Contains methods to publish an entry in Contentful.
 * @see https://www.contentful.com/developers/docs/references/content-management-api/#/reference/entries/entry-publishing/publish-an-entry/console
 */

const fetch = require('node-fetch');
const { BEAR_TO_CONTENTFUL, CONTENTFUL_SPACE, CONTENTFUL_ENV } = process.env;

// Construct fetch request
const base = 'https://api.contentful.com';
const publishEntryPath = `spaces/${CONTENTFUL_SPACE}/environments/${CONTENTFUL_ENV}/entries`;
const headers = version => ({
  'Authorization': `Bearer ${BEAR_TO_CONTENTFUL}`,
  'X-Contentful-Version': version
});

/**
 * Publishes the blog post that was just created in Contentful.
 * @param {Object} entry The entry to publish
 * @param {string} entry.id The id of the entry to publish
 * @param {string} entry.version The version of the entry to publish
 */
const publishEntry = ({ id, version }) => fetch(`${base}/${publishEntryPath}/${id}/published`, {
  method: 'PUT',
  headers: headers(version)
})
  .then(res => res.json())
  .then((data => {
    if (data.sys.type === 'Error') {
      console.log(`❌ Failed to publish Contentful entry. ${data.message}`);
      return;
    };

    console.log(`✅ Published item ${id}`);
    return data;
  }));
  
module.exports = {
  publishEntry
}