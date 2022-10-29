const Joi = require("joi");

module.exports = {
    createPassword: Joi.object({
        name: Joi.string().required()
    }),
}
