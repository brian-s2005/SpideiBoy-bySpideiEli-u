
import yts from 'yt-search'

let handler = async (m, { text }) => {
  if (!text) throw 'â³ï¸ Que quieres que busque en YouTube?'
  let results = await yts(text)
  let tes = results.all
  let teks = results.all.map(v => {
    switch (v.type) {
      case 'video': return `
ð· ${v.title}
ð· *Link* : ${v.url}
ð· *DuraciÃ³n* : ${v.timestamp}
ð· *Subido :* ${v.ago}
ð· *Vistas:* ${v.views}

   `.trim()
      case 'canal': return `
ð· *${v.name}* (${v.url})
ð·${v.subCountLabel} (${v.subCount}) Suscribirse
 ${v.videoCount} videos
`.trim()
    }
  }).filter(v => v).join('\n\n________________________\n\n')
  conn.sendFile(m.chat, tes[0].thumbnail, 'yts.jpeg', teks, m)
}
handler.help = ['ytsearch <ð>'] 
handler.tags = ['tools']
handler.command = ['ytsearch', 'yts'] 

export default handler
