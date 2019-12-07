import querystring from 'querystring';

exports.handler = async event => {

  // Only allow POST method calls
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: 'Method Not Allowed'
    };
  }

  // When the method is POST, the name will no longer be in the event’s
  // queryStringParameters – it’ll be in the event body encoded as a query string
  const params = querystring.parse(event.body);
  const name = params.name || 'World';

  return {
    statusCode: 200,
    body: {
      'message': `Hello, ${name}`,
      requestBody: event.body
    }
  };
};