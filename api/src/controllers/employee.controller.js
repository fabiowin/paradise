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

    async getOne(req, res, next) {
        try {
            const { funcid } = req.query;
            console.log(id);
            const found = await employeeRepository.findById(funcid);
            if (found) {
                res.status(201).json(found);
                return;
            }
            console.log('erro');
            return;
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
            const { funcid } = req.params;
            const employee = await employeeRepository.findById(funcid);
            if (!employee) {
                console.log("not found");
                return;
            }
            const updated = await employeeRepository.update(employee, req.body);
            res.send(updated);
        } catch (error) {
          console.error(error);
        }
    },

    async delete(req, res, next) {
        try {
            const { funcid } = req.params;
            const product = await employeeRepository.findById(funcid);
            if (!product) {
                res.json({"message": "Employee not found"});
                return;
            }
            const deleted = await employeeRepository.delete(funcid);
            const msg = deleted == 1 ? {"message": "Employee was deleted"} : { "message": "Employee not found." };
            res.status(200).json(msg);
        } catch (error) {
            
        }
    }

}