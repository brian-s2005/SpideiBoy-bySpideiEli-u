let handler = async (m, { text }) => {
    let user = global.db.data.users[m.sender]
    user.afk = + new Date
    user.afkReason = text
    m.reply(`
    😴 *AFK* 
Ahora estas afk hasta que envies un mensaje 
▢ *Usuario:* ${conn.getName(m.sender)} 
▢ *Razon:* ${text ? ': ' + text : ''}
  `)
}
handler.help = ['Afk <razon>']
handler.tags = ['fun']
handler.command = ['afk']

export default handler
