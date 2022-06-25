
let handler = async (m, { conn, args, usedPrefix, command }) => {
  let user = Object.entries(global.db.data.users).filter(user => user[1].premiumTime).map(([key, value]) => {
    return { ...value, jid: key }
  })
 
  let premTime = global.db.data.users[m.sender].premiumTime
  let prem = global.db.data.users[m.sender].premium
  let waktu = clockString(`${premTime - new Date() * 1} `)
  let sortedP = user.map(toNumber('premiumTime')).sort(sort('premiumTime'))
  let len = args[0] && args[0].length > 0 ? Math.min(100, Math.max(parseInt(args[0]), 10)) : Math.min(10, sortedP.length)
  
await conn.sendButton(m.chat, `
≡ *USUARIOS PREMIUM*
${sortedP.slice(0, len).map(({ jid, name, premiumTime, registered }, i) => `\n┌─⊷ *EXPIRA EN*
🕷 *Nombre:* ${registered ? name : conn.getName(jid)}
🕷 wa.me/${jid.split`@`[0]}
${premiumTime > 0 ? `${clockString (premiumTime - new Date() * 1)}` : '🕷 *Expirado*'}`).join`\n└───────────`}
└───────────

`.trim(), igfg, null, [[`ꨄ︎ Donar`, `${usedPrefix}donate`]], m)
setTimeout(() => {
    if (db.data.chats[m.chat].deletemedia) conn.deleteMessage(m.chat, key)
  }, db.data.chats[m.chat].deletemediaTime)
}
handler.help = ['listprem']
handler.tags = ['main']
handler.command = ['listprem', 'premlist', 'listpremium'] 

export default handler

function clockString(ms) {
  let ye = isNaN(ms) ? '--' : Math.floor(ms / 31104000000) % 10
  let mo = isNaN(ms) ? '--' : Math.floor(ms / 2592000000) % 12
  let d = isNaN(ms) ? '--' : Math.floor(ms / 86400000) % 30
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000) % 24
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return ['🕷 ', ye, ' *Años*\n', '🕷 ', mo, ' *Meses*\n', '🕷 ', d, ' *Días*\n', '🕷 ', h, ' *Horas*\n', '🕷 ', m, ' *Minutos*\n', '🕷 ', s, ' *Segundos*'].map(v => v.toString().padStart(2, 0)).join('')
}

function sort(property, ascending = true) {
  if (property) return (...args) => args[ascending & 1][property] - args[!ascending & 1][property]
  else return (...args) => args[ascending & 1] - args[!ascending & 1]
}

function toNumber(property, _default = 0) {
  if (property) return (a, i, b) => {
    return { ...b[i], [property]: a[property] === undefined ? _default : a[property] }
  }
  else return a => a === undefined ? _default : a
}
