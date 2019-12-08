// Takes plain text and formats to required structure for Contentful

const parse = text => ({
  title: /# (.*?)\n/.exec(text)[1],
  slug: /slug: (.*?)\n/.exec(text)[1],
  date: /date: (.*?)\n/.exec(text)[1],
  description: /description: (.*?)\n/.exec(text)[1],
  categories: /categories: (.*?)\n/.exec(text)[1].split(', '),
  body: text.substring(/#(.*)---/s.exec(text)[1].length + 4)
});

const format = text => {
  const { title, slug, date, description, categories, body } = parse(text);
  return {
    textEntry: {
      key: 'blockText',
      data: {
        'fields': {
          'body': { 'en-US': body }
        }
      }
    },
    containerEntry: {
      key: 'container',
      data: {
        'fields': {
          'title': { 'en-US': 'Content' },
          'content': {
            'en-US': [
              { 'sys': { type: 'Link', linkType: 'Entry' } }
            ]
          }
        }
      }
    },
    postEntry: {
      key: 'blogPost',
      data: {
        'fields': {
          'title': { 'en-US': title },
          'slug': { 'en-US': slug },
          'date': { 'en-US': date },
          'shortDescription': { 'en-US': description },
          'category': { 'en-US': categories },
          'content': {
            'en-US': {
              'sys': { type: 'Link', linkType: 'Entry' }
            }
          }
        }
      }
    }
  }
};

module.exports = {
  format
}