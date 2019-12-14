/**
 * Contains methods to create a series of entries linked together in Contentful.
 * 
 * For documentation on the content model of content type, see:
 * @see https://app.contentful.com/spaces/[your-space-id]/content_types/[your-content-type]/preview
 */

const fetch = require('node-fetch');
const uuid = require('uuid/v4');
const { BEAR_TO_CONTENTFUL, CONTENTFUL_SPACE, CONTENTFUL_ENV } = process.env;

// Construct fetch request
const base = 'https://api.contentful.com';
const createEntryPath = `spaces/${CONTENTFUL_SPACE}/environments/${CONTENTFUL_ENV}/entries`;
const headers = contentType => ({
  'Authorization': `Bearer ${BEAR_TO_CONTENTFUL}`,
  'Content-Type': 'application/vnd.contentful.management.v1+json',
  'X-Contentful-Content-Type': contentType
});

/**
 * Creates an individual entry in Contentful.
 * @param {Object} entry An individual entry
 * @param {string} entry.key The content type of the entry
 * @param {Object} entry.data The payload to send
 * @returns {Object} response The request response from the Content Management API.
 */
const createIndividualEntry = ({ key, data }) => fetch(`${base}/${createEntryPath}/${uuid()}`, {
  method: 'PUT',
  headers: headers(key),
  body: JSON.stringify(data)
})
  .then(res => res.json())
  .then(data => {
    if (data.sys.type === 'Error') {
      console.log(`❌ Failed to create Contentul entry.\n${JSON.stringify(data)}`);
      return;
    };
    return data;
  });

/**
 * Creates a series of individual entries in Contentful that are linked together.
 * Starts from the most nested entry and ends with the blog post itself.
 */
const createEntries = ({ textEntry, containerEntry, postEntry }) => {

  // First, create a text block
  return createIndividualEntry(textEntry)
    .then(({ sys: { id, version }}) => {
      const blockText = { id, version };
      containerEntry.data.fields.content['en-US'][0].sys.id = id; // Required to link to container
      console.log(`✅ Created text block ${id}`);

      // Then, create a container with content of text block
      return createIndividualEntry(containerEntry)
        .then(({ sys: { id, version }}) => {
          const container = { id, version };
          postEntry.data.fields.content['en-US'].sys.id = id; // Required to link to blog post
          console.log(`✅ Created container ${id}`);

        // Then, create a blog post
        return createIndividualEntry(postEntry)
          .then(({ sys: { id, version }}) => {
            const blogPost = { id, version };
            console.log(`✅ Created blog post ${id}`);

            // Finally, return entry references containing id and version
            return [blockText, container, blogPost];
          });
        });
      });
    
}

module.exports = {
  createEntries
}