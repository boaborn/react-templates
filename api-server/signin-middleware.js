// login-middleware.js
module.exports = (req, res, next) => {
  if (req.method == 'POST' && req.path == '/signin') {
    if (req.body.username === 'admin' && req.body.password === 'admin') {
      res.status(200).json({ 'token': '12345' })
    } else {
      res.status(400).json({ message: 'wrong password' })
    }
  } else {
    next()
  }
}
