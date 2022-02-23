exports.execute = async (client, message, args) => {
    let users = [
        "Emmanual's mum kindly handed you",
        "Otif's son politely gave you",
        "Sami got exited and erected",
        "Obama gave you",
        "For having no hair on your face, Hofis gave you",
        "The rock raised his eyebrow and gave you",
        "The Nazi regime occured which left you",
        "Your parents gave you",
        "The black asian lady man gave you",
        "You bullied zaid hassan and got",
        "You made Barlow proud by getting a 50 study score in english so he sent you",
        "Oguzhan bought a bag of lollies from you for",
        "Some random child sent you",
    ];
    let amount = Math.floor(Math.random() * 50) + 10;
    let beg = client.eco.beg(client.ecoAddUser, amount, { canLose: true });
    if (beg.onCooldown) return message.reply(`Nothing lol, Come back after ${beg.time.seconds} seconds.`);
    if (beg.lost) return message.channel.send(`**${users[Math.floor(Math.random() * users.length)]}:** NUB Try again later.`);
    else return message.reply(`**${users[Math.floor(Math.random() * users.length)]}**  **${beg.amount}** khoins`);
};

exports.help = {
    name: "beg",
    aliases: [],
    usage: "beg"
}
