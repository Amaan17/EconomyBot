const { MessageEmbed } = require("discord.js");

exports.execute = async (client, message, args) => {
  let items = Object.keys(client.shop);
  let content = "";
  
 const khanDollar = client.emojis.cache.get('914355014884028447')

  for (var i in items) {
    content += `${client.shop[items[i]].line1} \n **Item:** ${client.shop[items[i]].name} \n **buyid:** ${client.shop[items[i]].buyid}  \n **Cost:** ${client.shop[items[i]].cost} <:khanDollar:914354898219462746> \n ${client.shop[items[i]].description}    ${client.shop[items[i]].image}
    ${client.shop[items[i]].line2}\n`
  }

 
  let embed = new MessageEmbed()
  .setTitle("Store")
  .setDescription(content)
  .setColor("RED")
  .setFooter("Do : k buy insertbuyid  to buy the item.")
  return message.channel.send(embed);
};

exports.help = {
  name: "shop",
  aliases: [],
  usage: `shop`
};
