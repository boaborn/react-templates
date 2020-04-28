// login-middleware.js
module.exports = (req, res, next) => {
  if (req.method == 'POST' && req.path == '/signin') {
    if (req.body.username === 'admin@email.com' && req.body.password === 'admin') {
      res.status(200).json({ 'token': '12345' })
    } else if (req.body.username !== 'admin@email.com') {
      res.status(401).json({ error: 'wrong username' })
    } else if (req.body.password !== 'admin') {
      res.status(401).json({ error: 'wrong password' })
    } else {
      res.status(400).json({ error: 'wrong payload' })
    }
  } else {
    next()
  }
}
