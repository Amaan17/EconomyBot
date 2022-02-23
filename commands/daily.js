module.exports.execute = async (client, message, args) => {
    let amount = Math.floor(Math.random() * 500) + 100;
    let addMoney = client.eco.daily(client.ecoAddUser, amount);
    if (addMoney.onCooldown) return message.reply(`You have already claimed your daily allowance. Come back after ${addMoney.time.hours} hours, ${addMoney.time.minutes} minutes & ${addMoney.time.seconds} seconds to claim it again.`);
    else return message.reply(`Your parents have given you **${addMoney.amount}** khoins as your daily allowance **${addMoney.after}** <:Khoin:914348384326930452> .`);
};

module.exports.help = {
    name: "daily",
    aliases: [],
    usage: "daily"
}
