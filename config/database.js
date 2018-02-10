// Asynchronous
const crypto = require('crypto').randomBytes(256).toString('hex'); // Provides cryptographic functionality (OpenSSL's hash, HMAC, cipher, decipher, sign and verify functions)

module.exports = {
 uri: 'mongodb://usersample:Usersample25@ds117758.mlab.com:17758/meandb', // Databse URI and database name
 //mongodb://localhost:27017/meandb
 secret: crypto, // Cryto-created secret
 db: 'meandb' // Database name
}