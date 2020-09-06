const jwt=require('jsonwebtoken')
function authenticateToken(req, res, next) {
    // Gather the jwt access token from the request header
    token=req.cookies.jwt
    if (token == null) return res.sendStatus(401) // if there isn't any token
  
    jwt.verify(token, 'secretKey', (err, username) => {
      console.log(err)
      if (err) return res.sendStatus(403)
      req.user = username
      next() // pass the execution off to whatever request the client intended
    })
  }
  module.exports.verify=authenticateToken;