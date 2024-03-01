const { app } = require('@azure/functions');

app.http('welcome_message', {
    methods: ['POST', 'GET'],
    handler: async (request, context) => {
        context.log('Http function was triggered.');
        return { body: 'Welcome to Azure function' };
    }
});