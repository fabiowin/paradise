const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const authRepository = require("../repository/auth.repository");
const employeeRepository = require("../../repositories/employee.repository");

module.exports = {

  async signIn (req, res) {
    const { userType } = req.body;

    if (userType === 'cliente') {
      try {
        const { clienemail, cliensenha } = req.body;
        const existingUser = await authRepository.findByEmail(clienemail);
        if (!existingUser) return res.status(404).json({ message: "User doesn't exist." });
    
        const isPasswordCorrect = await bcrypt.compare(cliensenha, existingUser.cliensenha);
    
        if (!isPasswordCorrect) return res.status(400).json({ message: "Invalid Credentials." });
    
        const token = jwt.sign(
          { clienemail: existingUser.clienemail, id: existingUser.id }, 
          process.env.JWT_SECRET_KEY,
          { expiresIn: "1h" }
        );
    
        res.status(200).json({ result: existingUser, token, type: 'client' });
    
      } catch (error) {
        res.status(500).json({ message: "Something went wrong." });
      }
    } else {
      try {
        const { clienemail: funcemail, cliensenha: funcsenha } = req.body;
        console.log(funcemail, funcsenha);
        const existingUser = await employeeRepository.findByEmail(funcemail);
        if (!existingUser) return res.status(404).json({ message: "User doesn't exist." });

        const isPasswordCorrect = await bcrypt.compare(funcsenha, existingUser.funcsenha);

        if (!isPasswordCorrect) return res.status(400).json({ message: "Invalid Credentials." });

        const token = jwt.sign(
          { funcemail: existingUser.funcemail, id: existingUser.id }, 
          process.env.JWT_SECRET_KEY,
          { expiresIn: "1h" }
        );

        res.status(200).json({ result: existingUser, token, type: 'employee' });


      } catch (error) {
        res.status(500).json({ message: "Something went wrong." });      
      }
    }

  },
  
  async signUp (req, res) {
    const { clienemail, cliensenha } = req.body;

    try {
      const postData = req.body;
      const existingUser = await authRepository.findByEmail(clienemail);

      if (existingUser) return res.status(400).json({ message: "User already exists." });
      
      postData.cliensenha = await bcrypt.hash(cliensenha, 8);
      console.log(postData);
      const result = await authRepository.create(postData);

      const token = jwt.sign(
        { clienemail: result.clienemail, id: result.id },
        process.env.JWT_SECRET_KEY,
        { expiresIn: "1h" }
      );
  
      res.status(200).json({ result, token });
  
    } catch (error) {
      res.status(500).json({ message: "Something went wrong." });
    }
  
  }
}