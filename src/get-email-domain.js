const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  const domainMatch = email.match(/@([^.@]+(\.[^.@]+)+)$/);

  return domainMatch ? domainMatch[1] : null;
}

module.exports = {
  getEmailDomain
};
