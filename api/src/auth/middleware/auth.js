const jwt = require('jsonwebtoken');
require('dotenv').config();

const auth = async (req, res, next) => {
  try {

    if (req.headers.authorization) {
      const token = req.headers.authorization.split(" ")[1];
      let decodedData;
  
      decodedData = jwt.verify(
        token,
        process.env.JWT_SECRET_KEY,
      )

      req.userId = decodedData.id;
      console.log(req.userId);

      next();
      
    } else {
      res.send({ message: "Invalid Token" })
    }
    

  } catch (error) {
    res.send({message: error.message});
  }
}

module.exports = auth;