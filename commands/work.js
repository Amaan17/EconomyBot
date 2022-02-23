module.exports.execute = async (client, message, args) => {
    let amount = Math.floor(Math.random() * 1500) + 500;
    let work = client.eco.work(client.ecoAddUser, amount);
    if (work.onCooldown) return message.reply(`You are tired rn. Come back after ${work.time.minutes} minutes & ${work.time.seconds} seconds to work again.`);
    else return message.reply(` **${work.workedAs}** sent you **${work.amount}** Khan Coins.`);
};

module.exports.help = {
    name: "work",
    aliases: [],
    usage: "work"
}
