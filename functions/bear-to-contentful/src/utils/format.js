/**
 * Parses the input markdown and returns as an object.
 * @param {string} text the raw markdown to process
 */
const parse = text => ({
  title: /# (.*?)\n/.exec(text)[1],
  slug: /slug: (.*?)\n/.exec(text)[1],
  date: /date: (.*?)\n/.exec(text)[1],
  description: /description: (.*?)\n/.exec(text)[1],
  categories: /categories: (.*?)\n/.exec(text)[1].split(', '),
  body: text.substring(/#(.*)---/s.exec(text)[1].length + 4)
});

/**
 * Formats a flat object into desired Contentful payload.
 * @param {string} text the raw markdown to process
 */
const format = text => {
  const { title, slug, date, description, categories, body } = parse(text);
  console.log(`\n
  Note details:
  ---
  title: ${title}
  slug: ${slug}
  date: ${date}
  description: ${description}
  categories: ${categories}
  body: ${body.substring(1, 60)}...
  ---
  `);
  return {
    'fields': {
      'title': { 'en-US': title },
      'slug': { 'en-US': slug },
      'date': { 'en-US': date },
      'shortDescription': { 'en-US': description },
      'category': { 'en-US': categories },
      'body': { 'en-US': body }
    }
  }
};

module.exports = {
  format
}