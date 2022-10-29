const { Client, LogLevel } = require('@notionhq/client');

const notion = new Client({
    auth: process.env.NOTION_TOKEN,
    logLevel: LogLevel.DEBUG
});

module.exports = {
    addPassword: async (password) => {
        try {
            const response = await notion.pages.create({
                parent: {
                    database_id: process.env.NOTION_PASSWORD_ID
                },
                properties: {
                    'Name': {
                        type: 'title',
                        title: [
                            {
                                text: {
                                    content: password.name
                                }
                            }
                        ]
                    },
                    'Password': {
                        type: 'rich_text',
                        rich_text: [
                            {
                                text: {
                                    content: password.password
                                }
                            }
                        ]
                    },
                    'CreateAt': {
                        type: 'date',
                        date: {
                            start: password.createAt
                        }
                    }
                }
            });

            return response;
        } catch (error) {
            console.error(error);
        }
    }
};
