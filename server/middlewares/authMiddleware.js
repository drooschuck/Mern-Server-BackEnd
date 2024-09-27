const jwt = require("jsonwebtoken");

module.exports = (req, res, next) =>  {
  try {
   // console.log('Received headers:', req.headers);
    const token = req.headers.authorization.split(" ")[1];
    //console.log('Token:', token);
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
    //console.log('Decoded token:', decodedToken);
    const userId = decodedToken.userId;
    req.body.userId = userId;
    next();
  } catch (error) {
   // console.error('Authentication error:', error);
    res.status(401).send({
      message: "You are not authenticated .. register or login",
      data: error,
      success: false,
    });
  }
}; 

