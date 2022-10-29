const fs = require('fs');

const { numbers, lowerCase, specialChars, upperCase } = require('../../constants');

const PASSWORD_LENGTH = 16;
const BACKUP_PATH = `${__dirname}/../../backup/index.json`;

const savePasswordInBackup = (password) => {
    const hasFile = !!fs.existsSync(BACKUP_PATH);

    const backup = hasFile ? fs.readFileSync(BACKUP_PATH, 'utf-8') : '[]';

    const newBackup = JSON.parse(backup);

    newBackup.push(password);

    fs.writeFileSync(BACKUP_PATH, JSON.stringify(newBackup, null, 4), 'utf-8');
};

module.exports = {
    generatePassword: (name) => {
        const password = [];

        for (let i = 0; i < PASSWORD_LENGTH; i++) {
            const random = Math.floor(Math.random() * 4);
            switch (random) {
                case 0:
                    password.push(numbers[Math.floor(Math.random() * numbers.length)]);
                    break;
                case 1:
                    password.push(lowerCase[Math.floor(Math.random() * lowerCase.length)]);
                    break;
                case 2:
                    password.push(upperCase[Math.floor(Math.random() * upperCase.length)]);
                    break;
                case 3:
                    password.push(specialChars[Math.floor(Math.random() * specialChars.length)]);
                    break;
            }
        }

        const pwdData = {
            password: password.join(''),
            name,
            createAt: new Date().toISOString()
        };

        savePasswordInBackup(pwdData);

        return pwdData;
    }
};
