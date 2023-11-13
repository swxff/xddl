const {ActionRowBuilder,ButtonBuilder,ButtonStyle, EmbedBuilder } = require('discord.js');
const { LethhFileLoader, YamlDatabase } = require('lethh.xyz');
const db = (global.ErtuDB= new YamlDatabase({ Path: "./ertu.yaml"}));

module.exports = {
name: "info",
aliases: ["information"],

execute:async (client, message, args) => {

const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.author;
let stat = []

 if(db.has(`gif.${member.id}`)){
    stat.push(`Bu kişinin tüm istatistikleri **${member.username}** belirtilmiştir.\n\n\`❯\` Gif: **${db.fetch(`gif.${member.id}`)}**\n`)
  }
    if(db.has(`pp.${member.id}`)){
    stat.push(`\`❯\` Fotoğraf: **${db.fetch(`pp.${member.id}`)}**\n`)
  }
    if(db.has(`pp.${member.id}`)){
    stat.push(`\`❯\` Toplam: **${db.fetch(`total.${member.id}`)}**\n`)
  }  
    
  let ertu = new EmbedBuilder()
  .setThumbnail(message.guild.iconURL({ dynamic: true, size: 2048 }))
  .setDescription(stat[0] ? stat.join('') : "Bu kişinin paylaşımı yok.")
  message.channel.send({embeds: [ertu]})

}

}