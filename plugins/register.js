import { createHash } from 'crypto'
let handler = async function (m, { text, usedPrefix }) {
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
let user = global.db.data.users[m.sender]
if (user.registered === true) throw `*π·οΈπβπ½ππ· βπΌπ! ππΈ πΌπππΈπ βπΌπΎπππβπΈπ»π*\n\ βπππΌβπΌπ πΌππππβπΈβ πππΉβπΌπΎπππβπ? πππΈ πΌπ βπππΈβπ»π ${usedPrefix}unreg <numero de serie>*\n\n*ππΈ π½πΎ ππ΄π²ππ΄ππ³π°π ππ π½ππΌπ΄ππΎ π³π΄ ππ΄ππΈπ΄ πΏππ΄π³π΄π πππ°π π΄π» π²πΎπΌπ°π½π³πΎ ${usedPrefix}myns*`
let name = conn.getName(m.sender)
let age = Math.floor(Math.random() * 41)
age = parseInt(age)
user.name = name.trim()
user.age = age
user.regTime = + new Date
user.registered = true
let sn = createHash('md5').update(m.sender).digest('hex')
let caption = `ββγ *REGISTRADO* γβ
π· *Nombre:* ${name}
π· *Edad* : ${age} aΓ±os
π· *Numero de serie* :
${sn}
βββββββββββββββ`
let author = global.author
conn.sendButton(m.chat, caption, `Β‘ππ βπππΌβπ π»πΌ ππΌβππΌ βπβ ππ π»πΌππΌπΈπ πΌππππβπΈβ ππ βπΌπΎπππβπ\n${author}`, [['Β‘Β‘π°π·πΎππ° ππΎπ ππ½ ππ΄ππΈπ΅πΈπ²π°π³πΎ/π°!!', '/profile']], m)
global.db.data.users[m.sender].money += 10000
global.db.data.users[m.sender].exp += 10000
}
handler.help = ['reg'].map(v => v + ' <nombre.edad>')
handler.tags = ['rg']
handler.command = ['verify', 'reg', 'register', 'registrar'] 
export default handler
