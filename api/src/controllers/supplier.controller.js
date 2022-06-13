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

    async getOne(req, res, next) {
        try {
            const { fornid } = req.query;
            console.log(id);
            const found = await supplierRepository.findById(fornid);
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
            const postData = req.body;
            const supplier = await supplierRepository.create(postData);
            res.status(201).json(supplier);
        } catch (error) {
          console.error(error);
        }
    },

    async update(req, res, next) {
        try {
            const { fornid } = req.params;
            const supplier = await supplierRepository.findById(fornid);
            if (!supplier) {
                console.log("not found");
                return;
            }
            const updated = await supplierRepository.update(supplier, req.body);
            res.send(updated);
        } catch (error) {
          console.error(error);
        }
    },

    async delete(req, res, next) {
        try {
            const { fornid } = req.params;
            const product = await supplierRepository.findById(fornid);
            if (!product) {
                res.json({"message": "Supplier not found"});
                return;
            }
            const deleted = await supplierRepository.delete(fornid);
            const msg = deleted == 1 ? {"message": "Supplier was deleted"} : { "message": "Supplier not found." };
            res.status(200).json(msg);
        } catch (error) {
            
        }
    }

}