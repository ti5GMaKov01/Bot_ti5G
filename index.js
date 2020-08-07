const fs = require("fs");
const Discord = require("discord.js");
const nodemon = require("nodemon");
const { prefix, token } = require("./config.json");

const client = new Discord.Client();
client.commands = new Discord.Collection();

const commandFiles = fs
  .readdirSync("./commands")
  .filter((file) => file.endsWith(".js"));

for (const file of commandFiles) {
  const command = require(`./commands/${file}`);
  client.commands.set(command.name, command);
}

client.once("ready", () => {
  console.log("Bot funcionando");
});

client.on("message", async (msg) => {
  if (!msg.content.startsWith(prefix) || msg.author.bot) return;

  const args = msg.content.slice(prefix.length).trim().split(/ +/);
  const command = args.shift().toLowerCase();

  if (!client.commands.has(command)) return;
  try {
    client.commands.get(command).execute(msg, args);
  } catch (error) {
    console.error(error);
    msg.reply("Error al ejecutar este comando");
  }
});

client.on('message', msg => {
  if (!msg.content.startsWith(prefix) || msg.author.bot) return;
  const nombre = msg.content.replace(`${prefix}stats `, "").toLowerCase();
  const nombre_sin_espacios = nombre.replace(/\s/g, "%20");
  if (
    msg.content.includes(`${prefix}`) &&
    msg.content != `${prefix}trios` &&
    msg.content != `${prefix}clean` &&
    msg.content != `${prefix}stats ` + nombre
  ) {
    msg.reply("El comando proporcionado no es correcto");
  }
});

client.login(token);
