const supplierRepository = require("../repositories/supplier.repository");

module.exports = {
 
    async getAll(req, res, next) {
        try {
            const queryParams = req.query;
            const supplier = await supplierRepository.findAll(queryParams);
            if (!supplier || supplier.length === 0) {
                res.status(204).end();
                return;
            }
            res.json(supplier);
        } catch (error) {
            console.error(error);
        }
    },

    async create(req, res, next) {
        try {
            const postData = req.body;
            const supplier = await supplierRepository.create(postData);
            res.status(201).json(supplier);
        } catch (error) {
          console.error(error);
        }
    },

    async update(req, res, next) {
        try {
            const { id } = req.params;
            const supplier = await supplierRepository.findById(id);
            if (!supplier) {
                console.log("not found");
                return;
            }
            const updated = await supplierRepository.update(transaction, req.body);
            res.send(updated);
        } catch (error) {
          console.error(error);
        }
    }

}