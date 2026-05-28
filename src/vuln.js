// Intentionally vulnerable file to trip CodeQL JS query pack.
// Trips:
//   - js/code-injection (eval of user input)
//   - js/weak-cryptographic-algorithm (sha1 hmac)
//   - js/sql-injection-style concat (string concatenated into shell-style command, just illustrative)
// Do NOT use any of these patterns in real code.
const crypto = require('crypto');
const http = require('http');

const server = http.createServer((req, res) => {
  const url = new URL(req.url, 'http://localhost');
  const userInput = url.searchParams.get('x') || '';

  // CodeQL: js/code-injection
  const result = eval(userInput);

  // CodeQL: js/weak-cryptographic-algorithm
  const mac = crypto.createHmac('sha1', 'secret').update(userInput).digest('hex');

  res.end(JSON.stringify({ result, mac }));
});

server.listen(3000);