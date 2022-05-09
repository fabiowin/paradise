const clientRepository = require("../repositories/cliente.repository");

module.exports = {
 
    async getAll(req, res, next) {
        try {
            const queryParams = req.query;
            const client = await clientRepository.findAll(queryParams);
            if (!client || client.length === 0) {
                res.status(204).end();
                return;
            }
            res.json(client);
        } catch (error) {
            console.error(error);
        }
    },

    async create(req, res, next) {
        try {
            const postData = req.body;
            const client = await clientRepository.create(postData);
            res.status(201).json(client);
        } catch (error) {
          console.error(error);
        }
    },

    async update(req, res, next) {
        try {
            const { id } = req.params;
            const client = await clientRepository.findById(id);
            if (!client) {
                console.log("not found");
                return;
            }
            const updated = await clientRepository.update(transaction, req.body);
            res.send(updated);
        } catch (error) {
          console.error(error);
        }
    }

}