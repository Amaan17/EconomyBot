exports.execute = async (client, message, args) => {
    let users = [
        "Your parents Google home mini",
        "the hood",
        "the charity box in school",
        "your shoe",
        "the floors of Big W",
        "your left nut",
        "memons 3D printer",
        "the cpu fans",
        "Oguzhan's hair",
        "Farhan's specialist books",
        "MF's apartment",
        "Emel's office",
        "the furry server",
        "Khan Academy",
    ];

    let userss = [
        "Your female cousing saw you peaking in her bra and gave you a slap",
        "Barlow felt you searching his beard for Khoins and gave you a lecture about litrature",
        "While searching the bin you realised how trash you were",
        "While searching the bbq grill you burnt your hand",
    ];

    let amount = Math.floor(Math.random() * 200) + 50;
    let beg = await client.eco.beg(client.ecoAddUser, amount, { canLose: true, cooldown: 30000, customName: "search" });
    if (beg.onCooldown) return message.reply(`Come back after ${beg.time.seconds} seconds.`);
    if (beg.lost) return message.channel.send(`**${userss[Math.floor(Math.random() * users.length)]}  You found no Khoins.`);
    else return message.reply(`You searched ${users[Math.floor(Math.random() * users.length)]} and you found ${beg.amount} Khoins`);
};

exports.help = {
    name: "search",
    aliases: [],
    usage: "search"
}