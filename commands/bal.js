const { MessageEmbed } = require("discord.js");

exports.execute = async (client, message, args) => {
    let user = message.mentions.users.first() || message.author;
    let userBalance = client.eco.fetchMoney(user.id);
    const embed = new MessageEmbed()
        .setTitle(`Balance`)
        .addField(`User`, `<@${userBalance.user}>`)
        .addField(`You have a total of`, `${userBalance.amount} khoins`)
        .addField(`Position on leaderboard`, userBalance.position)
        .setColor("RANDOM")
        .setThumbnail(user.displayAvatarURL)
        .setTimestamp();
    return message.channel.send(embed);
}

exports.help = {
    name: "bal",
    aliases: ["money", "credits", "balance"],
    usage: `bal`
}
