const next = require('next');
const path = require('path');

const dir = path.join(__dirname, '.next', 'standalone');

process.env.NODE_ENV = 'production';
process.chdir(dir);

const app = next({
  dev: false,
  dir,
});

const handle = app.getRequestHandler();

// Initialize app
app.prepare().then(() => {
  console.log('Next.js app prepared');
});

// Export handler for ESA (Event-Driven Architecture)
module.exports.handler = async (event, context) => {
  // ESA event format
  const path = event.path || '/';
  const method = event.method || 'GET';
  const headers = event.headers || {};
  const queryString = event.queryStringParameters || {};
  const body = event.body;

  // Build URL with query string
  const url = new URL(path, 'http://localhost');
  Object.entries(queryString).forEach(([key, value]) => {
    url.searchParams.set(key, value);
  });

  // Create Node.js request/response mocks
  const req = {
    method,
    url: url.pathname + url.search,
    headers,
  };

  let responseData = '';
  let responseStatus = 200;
  const responseHeaders = {};

  const res = {
    statusCode: 200,
    status(code) {
      this.statusCode = code;
      return this;
    },
    setHeader(name, value) {
      responseHeaders[name] = value;
    },
    getHeader(name) {
      return responseHeaders[name];
    },
    getHeaders() {
      return responseHeaders;
    },
    end(data) {
      responseData = data;
    },
    send(data) {
      responseData = data;
    },
  };

  // Wait for app to be ready
  await app.prepare();

  // Handle the request
  await handle(req, res);

  // Return ESA response format
  return {
    statusCode: res.statusCode || responseStatus,
    headers: responseHeaders,
    body: responseData,
  };
};
