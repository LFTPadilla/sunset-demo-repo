const _ = require('lodash');

function greet(name) {
  return _.template('hello <%= name %>')({ name: name || 'world' });
}

module.exports = { greet };

if (require.main === module) {
  console.log(greet(process.argv[2]));
}
