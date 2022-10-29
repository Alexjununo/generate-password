const { generatePassword } = require('@src/generator/passwordGenerator');
const { addPassword } = require('@src/client/notionClient');
const { createPassword } = require('@src/schemas/passwordSchema');
const { toPasswordResponse } = require('@src/factories/passwordFactory');

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

