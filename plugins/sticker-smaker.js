import uploadImage from '../lib/uploadImage.js'
import { sticker } from '../lib/sticker.js'
import MessageType from '@adiwajshing/baileys'
const effects = ['jail', 'gay', 'glass', 'wasted' ,'triggered', 'lolice', 'simpcard', 'horny']

let handler = async (m, { conn, usedPrefix, text, command }) => {
let effect = text.trim().toLowerCase()
if (!effects.includes(effect)) throw `

âââ· *EFECTOS*
${effects.map(effect => `ð· ${effect}`).join('\n')}
ââââââââââââ

ð *Ejemplo:* 
${usedPrefix + command} wasted 
`.trim()
let q = m.quoted ? m.quoted : m
let mime = (q.msg || q).mimetype || ''
if (!mime) throw 'â³ï¸ Responde a una imagen'
if (!/image\/(jpe?g|png)/.test(mime)) throw `â³ï¸ Formato no soportado`
let img = await q.download()
let url = await uploadImage(img)
let apiUrl = global.API('https://some-random-api.ml/canvas/', encodeURIComponent(effect), {
avatar: url
})
try {
let stiker = await sticker(null, apiUrl, global.packname, global.author)
conn.sendFile(m.chat, stiker, null, { asSticker: true })
} catch (e) {
m.reply('Error de conversiÃ³n a sticker, se envÃ­a como imagen en su lugar')
await conn.sendFile(m.chat, apiUrl, 'smaker.png', null, m)
}}
handler.help = ['smaker']
handler.tags = ['sticker']
handler.command = ['stickmaker', 'stickermaker', 'smaker'] 
handler.limit = true

export default handler
