const {ActionRowBuilder,ButtonBuilder,ButtonStyle, EmbedBuilder,PermissionsBitField } = require('discord.js');

module.exports = {
name: "say",
aliases: [],

execute:async (client, message, args) => {

    if(!message.member.permissions.has(PermissionsBitField.Flags.Administrator)) 
    {
    message.react(`❌`)
    return
    }

    let TotalMember = (message.guild.memberCount)
    let OnlineMember = (message.guild.members.cache.filter(m => m.presence && m.presence.status !== "offline").size)
    let VoiceMember = (message.guild.members.cache.filter((x) => x.voice.channel).size)
    let Boost = (message.guild.premiumSubscriptionCount)

    message.react(`✅`)
    const ertu31 = new EmbedBuilder()
    .setDescription(`
    Şuanda **${VoiceMember}** üye sesli odalarda.
    Şuan **${TotalMember}** üye sunucuda, bunlardan(**${OnlineMember}** aktif)
    Şuanda**${Boost}** Boost`)

    let msg = await message.channel.send({ embeds: [ertu31]})

}

}