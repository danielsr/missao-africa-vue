import jwt from 'jsonwebtoken';

export default (req, res, next) => {
  const token = req.headers['x-access-token'];
  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).send({ msg: 'Unauthorized' });
    }
    req.user = decoded;
    next();
  });
};
