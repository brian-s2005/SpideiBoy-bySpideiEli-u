let handler = async (m, { conn, text, participants, isAdmin, isOwner, groupMetadata }) => {
    let users = participants.map(u => u.id).filter(v => v !== conn.user.jid)
    m.reply(`š· Grupo : *${groupMetadata.subject}*\nā¢ Miembros : *${participants.length}*${text ? `\nš· Mensaje : ${text}\n` : ''}\nāāāāā· *MENCIONES*\n` + users.map(v => 'š· @' + v.replace(/@.+/, '')).join`\n` + '\nāāāāŖ SpideiBot ā į“®į“¼įµ āŖāā', null, {
        mentions: users
    })
}

handler.help = ['tagall']
handler.tags = ['group']
handler.command = ['tagall']
handler.admin = true
handler.group = true

export default handler
