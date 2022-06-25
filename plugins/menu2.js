
import fetch from 'node-fetch'

let handler = async function (m, { conn, text, usedPrefix }) {
  
let m2 = `
────  *SpideiBot  ┃ ᴮᴼᵀ*  ────
≡ _Use estos comandos sin el prefijo_


┌─⊷ *AUDIOS* 
🕷 Bot
🕷 Buenos días
🕷 Buenas tardes 
🕷 Buenas noches
└──────────────
┌─⊷ *VIDEO/GIF* 
🕷 Linda noche
└──────────────`
//const pp = await (await fetch('https://i.ibb.co/QCkRLgk/Spider-Man.jpg')).buffer()
    const pp = await conn.profilePictureUrl(conn.user.jid).catch(_ => './src/avatar_contact.png')
    conn.sendHydrated(m.chat, m2, '🕷SpideiBot ┃ ᴮᴼᵀ\n🕷 Sígueme en Instagram\nhttps://www.instagram.com/libeliecer_wfna/\n', pp, '', 'YouTube', null, null, [
     ['⏍ Info', '/botinfo'],
      ['⌬ Grupos', '/gpSpideiBot']
    ], m)
    
}

handler.help = ['menu2']
handler.tags = ['main']
handler.command = ['menu2'] 
handler.register = true
export default handler
