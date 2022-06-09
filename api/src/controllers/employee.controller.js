const bcrypt = require("bcrypt");
const employeeRepository = require("../repositories/employee.repository");

module.exports = {
 
    async getAll(req, res, next) {
        try {
            const queryParams = req.query;
            const employee = await employeeRepository.findAll(queryParams);
            if (!employee || employee.length === 0) {
                res.status(204).end();
                return;
            }
            res.json(employee);
        } catch (error) {
            console.error(error);
        }
    },

    async create(req, res, next) {
        try {
            const { funcemail, funcsenha } = req.body;
            const postData = req.body;

            const existingUser = await employeeRepository.findByEmail(funcemail);
            if (existingUser) return res.status(400).json({ message: "User already exists." });

            postData.funcsenha = await bcrypt.hash(funcsenha, 8);

            const employee = await employeeRepository.create(postData);
            res.status(201).json(employee);
        } catch (error) {
          console.error(error);
        }
    },

    async update(req, res, next) {
        try {
            const { id } = req.params;
            const employee = await employeeRepository.findById(id);
            if (!employee) {
                console.log("not found");
                return;
            }
            const updated = await employeeRepository.update(transaction, req.body);
            res.send(updated);
        } catch (error) {
          console.error(error);
        }
    }

}