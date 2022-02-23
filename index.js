const Discord = require("discord.js");
 const client = new Discord.Client({ disableMentions: 'everyone' });
const Eco = require("quick.eco");
client.eco = new Eco.Manager(); // quick.eco
client.db = Eco.db; // quick.db
client.config = require("./botConfig");
client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();



 client.on('message', message => {
      const someEmoji = "<:Khoin:914348384326930452>";
    if (message.content ===  'khoin') {
        message.channel.send(someEmoji, {

        });
    }
});


const randomanime = require('random-anime')

client.on("message", async message => {
  /* Plain Text */
  if (message.content === "send women") {
    client.users.fetch('311823409363419138', false).then((user) => {
 user.send('heloo');
});
    message.channel.send(anime);
  }
   if (message.content === "send women") {
    const anime = randomanime.anime();
    message.channel.send(anime);
  }
   if (message.content === "send women") {
    const anime = randomanime.anime();
    message.channel.send(anime);
  }
   if (message.content === "send women") {
    const anime = randomanime.anime();
    message.channel.send(anime);
  }

  /* Embed Image (D.JS Version 12) */
  if (message.content === "kill memon") {
    const anime = randomanime.anime();
    const embed = new Discord.MessageEmbed().setImage(anime);
    message.channel.send(embed);
  }
});

client.on("message", async message => {
  /* Plain Text */
  if (message.content === "send girls") {
    const nsfw = randomanime.nsfw();
    message.channel.send(nsfw);
  }
  /* Embed Image (D.JS Version 12) */
  if (message.content === "give women") {
    const nsfw = randomanime.nsfw();
    const embed = new Discord.MessageEmbed().setImage(nsfw);
    message.channel.send(embed);
  }
});

client.shop = {
   ["Shahins_Text_Books"] : {
    line1: '-----------------',
    name: 'shahin\'s text books',
    buyid: "shahins",
    cost: 1000,
    description: "Want to ace further maths? Then your gonna need some of these",
    image: ':notebook_with_decorative_cover: ',
    line2: '-----------------',
  },
  ["polat"]: {
    line1: '-----------------',
    name: "Polat's_Jinn",
    buyid: "polat",
    cost: 10000,
    description: "Need a pet that does more than just eat? Well Polats Jinn's got you covered. Trained by the man himself... POLAT",
    image: ':ghost:',
    line2: '-----------------',
  },
  ["Qrawn"]: {
    line1: '-----------------',
    name: "QRAWN",
    buyid: "qrawn",
    cost: 40,
    description: "The best quality qrawn you will ever find",
    image: '🦐',
    line2: '-----------------',
  },
  ["chili"]: {
    line1: '-----------------',
    name:"Chili Mili",
    buyid: "chili",
    cost: 20,
    description: "The delight of every khan member",
    image: ':hot_pepper: ',
    line2: '-----------------',
  }
};

const fs = require("fs");

fs.readdir("./events/", (err, files) => {
    if (err) return console.error(err);
    files.forEach(f => {
        if (!f.endsWith(".js")) return;
        const event = require(`./events/${f}`);
        let eventName = f.split(".")[0];
        client.on(eventName, event.bind(null, client));
    });
});

fs.readdir("./commands/", (err, files) => {
    if (err) return console.error(err);
    files.forEach(f => {
        if (!f.endsWith(".js")) return;
        let command = require(`./commands/${f}`);
        client.commands.set(command.help.name, command);
        command.help.aliases.forEach(alias => {
            client.aliases.set(alias, command.help.name);
        });
    });
});



client.login(client.config.token);
