const CryptoJS = require("crypto-js")
const util = require("./util")

/** Verifies and signs data against the key and secret.
 *
 * @constructor
 * @param {String} key app key
 * @param {String} secret app secret
 */
class Token {
  constructor(key, secret) {
    this.key = key
    this.secret = secret
  }
  /** Signs the string using the secret.
   *
   * @param {String} string
   * @returns {String}
   */
  sign(string) {
    return CryptoJS.HmacSHA256(string, this.secret).toString(CryptoJS.enc.Hex)
  }
  /** Checks if the string has correct signature.
   *
   * @param {String} string
   * @param {String} signature
   * @returns {Boolean}
   */
  verify(string, signature) {
    return util.secureCompare(this.sign(string), signature)
  }
}

module.exports = Token
