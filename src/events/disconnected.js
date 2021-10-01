module.exports = {
    run: async (client) => {
        client.logger.error(`The client got disconnected, the bot will shut-down`);
        return process.exit();
    }
}