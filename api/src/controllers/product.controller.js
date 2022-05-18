const productRepository = require("../repositories/product.repository");

module.exports = {
 
    async getAll(req, res, next) {
        try {
            const queryParams = req.query;
            const product = await productRepository.findAll(queryParams);
            if (!product || product.length === 0) {
                res.status(204).end();
                return;
            }
            res.json(product);
        } catch (error) {
            console.error(error);
        }
    },

    async create(req, res, next) {
        try {
            const postData = req.body;
            const product = await productRepository.create(postData);
            res.status(201).json(product);
        } catch (error) {
          console.error(error);
        }
    },

    async update(req, res, next) {
        try {
            const { id } = req.params;
            const product = await productRepository.findById(id);
            if (!product) {
                console.log("not found");
                return;
            }
            const updated = await productRepository.update(transaction, req.body);
            res.send(updated);
        } catch (error) {
          console.error(error);
        }
    }

}