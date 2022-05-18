const itemRepository = require("../repositories/item.repository");

module.exports = {
 
    async getAll(req, res, next) {
        try {
            const queryParams = req.query;
            const item = await itemRepository.findAll(queryParams);
            if (!item || item.length === 0) {
                res.status(204).end();
                return;
            }
            res.json(item);
        } catch (error) {
            console.error(error);
        }
    },

    async create(req, res, next) {
        try {
            const postData = req.body;
            const item = await itemRepository.create(postData);
            res.status(201).json(item);
        } catch (error) {
          console.error(error);
        }
    },

    async update(req, res, next) {
        try {
            const { id } = req.params;
            const item = await itemRepository.findById(id);
            if (!item) {
                console.log("not found");
                return;
            }
            const updated = await itemRepository.update(transaction, req.body);
            res.send(updated);
        } catch (error) {
          console.error(error);
        }
    }

}