const { generatePasswordOperation } = require('../operations/generatePasswordOperation');

module.exports = {
    generatePassword: async (req, res) => {
        const password = await generatePasswordOperation(req.query);

        return res.status(201).json(password);
    },
};
