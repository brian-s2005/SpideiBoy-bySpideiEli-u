import { createHash } from 'crypto'
let handler = async function (m, { text, usedPrefix }) {
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
let user = global.db.data.users[m.sender]
if (user.registered === true) throw `*🕷️𝕀ℕ𝔽𝕆🕷 ℍ𝔼𝕐! 𝕐𝔸 𝔼𝕊𝕋𝔸𝕊 ℝ𝔼𝔾𝕀𝕊𝕋ℝ𝔸𝔻𝕆*\n\ ℚ𝕌𝕀𝔼ℝ𝔼𝕊 𝔼𝕃𝕀𝕄𝕀ℕ𝔸ℝ 𝕋𝕌𝔹ℝ𝔼𝔾𝕀𝕊𝕋ℝ𝕆? 𝕌𝕊𝔸 𝔼𝕃 ℂ𝕆𝕄𝔸ℕ𝔻𝕆 ${usedPrefix}unreg <numero de serie>*\n\n*𝚂𝙸 𝙽𝙾 𝚁𝙴𝙲𝚄𝙴𝚁𝙳𝙰𝚂 𝚃𝚄 𝙽𝚄𝙼𝙴𝚁𝙾 𝙳𝙴 𝚂𝙴𝚁𝙸𝙴 𝙿𝚄𝙴𝙳𝙴𝚂 𝚄𝚂𝙰𝚁 𝙴𝙻 𝙲𝙾𝙼𝙰𝙽𝙳𝙾 ${usedPrefix}myns*`
let name = conn.getName(m.sender)
let age = Math.floor(Math.random() * 41)
age = parseInt(age)
user.name = name.trim()
user.age = age
user.regTime = + new Date
user.registered = true
let sn = createHash('md5').update(m.sender).digest('hex')
let caption = `┌─「 *REGISTRADO* 」─
🕷 *Nombre:* ${name}
🕷 *Edad* : ${age} años
🕷 *Numero de serie* :
${sn}
└──────────────`
let author = global.author
conn.sendButton(m.chat, caption, `¡𝕋𝕌 ℕ𝕌𝕄𝔼ℝ𝕆 𝔻𝔼 𝕊𝔼ℝ𝕀𝔼 ℙ𝕆ℝ 𝕊𝕀 𝔻𝔼𝕊𝔼𝔸𝕊 𝔼𝕃𝕀𝕄𝕀ℕ𝔸ℝ 𝕋𝕌 ℝ𝔼𝔾𝕀𝕊𝕋ℝ𝕆\n${author}`, [['¡¡𝙰𝙷𝙾𝚁𝙰 𝚂𝙾𝚈 𝚄𝙽 𝚅𝙴𝚁𝙸𝙵𝙸𝙲𝙰𝙳𝙾/𝙰!!', '/profile']], m)
global.db.data.users[m.sender].money += 10000
global.db.data.users[m.sender].exp += 10000
}
handler.help = ['reg'].map(v => v + ' <nombre.edad>')
handler.tags = ['rg']
handler.command = ['verify', 'reg', 'register', 'registrar'] 
export default handler
