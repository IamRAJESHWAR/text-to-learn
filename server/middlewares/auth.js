// Auth0 middleware for Express backend
// Uses the modern express-oauth2-jwt-bearer package
const { auth } = require('express-oauth2-jwt-bearer');

const checkJwt = auth({
  audience: process.env.AUTH0_AUDIENCE,
  issuerBaseURL: process.env.AUTH0_ISSUER,
  tokenSigningAlg: 'RS256',
});

module.exports = checkJwt;
