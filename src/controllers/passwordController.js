const { generatePasswordOperation } = require('@src/operations/generatePasswordOperation');

module.exports = {
    generatePassword: async (req, res) => {
        const password = await generatePasswordOperation(req.body);

        return res.status(201).json(password);
    },
};
