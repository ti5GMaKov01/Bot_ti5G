module.exports = {
  name: "trios",
  description: "Trios!",
  execute(msg, args) {
    msg.channel.send(
      "1- Dona, Fede(clein) y Ulises \n2- Valen, Lucho y Lauti \n3- Rama, Fede y Mirko"
    );
    msg.react("3️⃣");
  },
};
