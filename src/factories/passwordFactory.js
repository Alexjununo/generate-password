module.exports = {
    toPasswordResponse: (password) => ({
        name: password.name,
        createAt: password.createAt,
        database: password.url
    }),
};
