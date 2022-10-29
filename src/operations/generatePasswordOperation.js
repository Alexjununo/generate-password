const { generatePassword } = require('../generator/passwordGenerator');
const { addPassword } = require('../client/notionClient');
const { createPassword } = require('../schemas/passwordSchema');
const { toPasswordResponse } = require('../factories/passwordFactory');

module.exports = {
    generatePasswordOperation: async (request) => {
        const { error, value } = createPassword.validate(request);

        if (error) {
            return res.status(400).json({
                message: error.details[0].message
            });
        }

        const password = generatePassword(value.name);

        const { url } = await addPassword(password);

        return toPasswordResponse({ ...password, url });
    }
}

