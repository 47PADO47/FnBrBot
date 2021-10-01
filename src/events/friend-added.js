module.exports = {
    run: async (client, friend) => {
        return friend.sendMessage(`Hello ${friend.displayName} :)`);
    }
}