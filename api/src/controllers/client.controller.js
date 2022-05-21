const clientRepository = require("../repositories/client.repository");

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

    async getOne(req, res, next) {
        try {
            const { clienemail } = req.query;
            const found = await clientRepository.findByEmail(clienemail);
            if (found) {
                res.status(201).json(found);
                return;
            }
            // next(makeError(appErrors.RESOURCE_ALREADY_EXISTS, `${title} already exists in environment ${environment_id}`));
            return;
            /*
            const associations = [];
            const queryParams = req.query;
            if (queryParams && ('environment' in queryParams) && parseInt(queryParams.environment) === 1) {
                associations.push('Environment');
            }
            const withAssociations = (associations.length > 0) ? { include: associations } : {};
            const { id } = req.params;
            const client = await clientRepository.findById(id, withAssociations);
            if (!client) {
                next(makeError(appErrors.RESOURCE_NOT_FOUND, `#${id} not found`));
                return;
            }
            res.json(client);*/
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

exports.userBoard = (req, res) => {
    res.status(200).send("User Content.");
  };