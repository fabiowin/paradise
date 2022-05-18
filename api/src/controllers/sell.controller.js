const sellRepository = require("../repositories/sell.repository");

module.exports = {
 
    async getAll(req, res, next) {
        try {
            const queryParams = req.query;
            const sell = await sellRepository.findAll(queryParams);
            if (!sell || sell.length === 0) {
                res.status(204).end();
                return;
            }
            res.json(sell);
        } catch (error) {
            console.error(error);
        }
    },

    async create(req, res, next) {
        try {
            const postData = req.body;
            const sell = await sellRepository.create(postData);
            res.status(201).json(sell);
        } catch (error) {
          console.error(error);
        }
    },

    async update(req, res, next) {
        try {
            const { id } = req.params;
            const sell = await sellRepository.findById(id);
            if (!sell) {
                console.log("not found");
                return;
            }
            const updated = await sellRepository.update(transaction, req.body);
            res.send(updated);
        } catch (error) {
          console.error(error);
        }
    }

}