const { parseEmoji, PermissionsBitField, EmbedBuilder, ActionRowBuilder, ButtonBuilder, Modal, TextInputBuilder, OAuth2Scopes, Partials, resolveColor, Client, Collection, GatewayIntentBits,SelectMenuBuilder,ActivityType } = require('discord.js');
const { BotOwners } = require('../../config.js');

module.exports = {
name: "emoji",
aliases: ["emoji-yükle"],

execute:async (client, message, args, ) => {

if(!message.member.permissions.has(PermissionsBitField.Flags.ManageEmojisAndStickers)) return message.reply({ embeds: [ new EmbedBuilder().setDescription(`bu komutu kullanamazsın`)]});

const emoji = args[0];
if(!emoji) return message.reply({ embeds: [ new EmbedBuilder().setDescription(`Emojiyi belirt`)]})
let emojiName = args.slice(1).join("_")
if(!emojiName) return message.reply({ embeds: [ new EmbedBuilder().setDescription(`Emoji adını belirt`)]})

if(emoji.startsWith("https://cdn.discordapp.com/emojis/")) {

let directlyEmoji = await message.guild.emojis.create({ attachment: emoji, name: emojiName || "noname" });

return await message.reply({ embeds: [ new EmbedBuilder().setDescription(`Emoji is added. ${directlyEmoji}`)]})

}

const parseCustomEmoji = parseEmoji(emoji);
if(!parseCustomEmoji.id) return message.reply({ embeds: [ new EmbedBuilder().setDescription(`Emojiyi belirt`)]})

const emojiURL = `https://cdn.discordapp.com/emojis/${parseCustomEmoji.id}.${parseCustomEmoji.animated ? "gif" : "png"}`;

const createEmoji = await message.guild.emojis.create({ attachment: emojiURL, name: emojiName || parseCustomEmoji.name });
message.reply({ embeds: [ new EmbedBuilder().setDescription(`Emoji başarıyla oluşturuldu ${createEmoji}`)]})


}
}