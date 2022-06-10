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

    async getOne(req, res, next) {
        try {
            const { prodid } = req.query;
            console.log(id);
            const found = await productRepository.findById(prodid);
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
            const product = await productRepository.create(postData);
            res.status(201).json(product);
        } catch (error) {
          console.error(error);
        }
    },

    async update(req, res, next) {
        try {
            const { prodid } = req.params;
            const product = await productRepository.findById(prodid);
            if (!product) {
                console.log("not found");
                return;
            }
            const updated = await productRepository.update(product, req.body);
            res.send(updated);
        } catch (error) {
          console.error(error);
        }
    }

}