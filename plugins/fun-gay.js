let handler = async (m, { conn }) => {
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
  let name = conn.getName(who)
  conn.sendFile(m.chat, global.API('https://some-random-api.ml', '/canvas/gay', {
    avatar: await conn.profilePictureUrl(who).catch(_ => 'https://i.ibb.co/QkyXTnz/avatar-contact.png'),
  }), 'gay.png', `🏳️�1�7�🌄1�7  *Gay :* ${name}\n\nQuién quiere violar a este gay? `, m)
}

handler.help = ['gay @user']
handler.tags = ['fun']
handler.command = ['gay'] 

export default handler
