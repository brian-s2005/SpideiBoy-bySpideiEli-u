import util from 'util'
import path from 'path'

let handler = async (m, { conn}) => {

let name = conn.getName(m.sender)

let fgac = ["criss","andrea"]
let nfg = fgac[Math.floor(Math.random() * fgac.length)] 
let av = `./src/mp3/${nfg}.mp3`

conn.sendHydrated(m.chat, `Hola *${name}* \n \nNecesitas ayuda? \n`, igfg, '', '', 'YouTube', null, null, [
      ['⦙☰ Menu', '/help'],
      ['⦙☰ Menu 2', '/menu2'],
      ['⌬Grupos', '/SpideiBot']
    ], m)
conn.sendFile(m.chat, av, 'ad.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true
})
}
handler.customPrefix = /^(bot|Bot)$/i
handler.command = new RegExp
export default handler
