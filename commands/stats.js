module.exports = {
  name: "stats",
  description: "Estadisticas",
  execute(msg, args) {
    const {prefix} = require('../config.json');
    const nombre = msg.content.replace(`${prefix}stats `, "");
    const nombre_sin_espacios = nombre.replace(/\s/g, "%20");
    msg.channel.send(
      "https://fortnitetracker.com/profile/all/" + nombre_sin_espacios
    );
  },
};
