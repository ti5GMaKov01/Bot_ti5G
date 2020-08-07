module.exports = {
  name: "clean",
  description: "Limpia!",
  async execute(msg, args) {
    const fetched = await msg.channel.messages.fetch({ limit: 100 });
    msg.channel.bulkDelete(fetched);
  },
};
