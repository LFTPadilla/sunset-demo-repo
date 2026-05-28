const { greet } = require('./index');
const assert = require('assert');
assert.strictEqual(greet('SunsetHQ'), 'hello SunsetHQ');
console.log('PASS');
