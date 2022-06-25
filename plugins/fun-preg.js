import fetch from 'node-fetch'

let handler = async (m, { text, usedPrefix, command }) => {
	let name = conn.getName(m.sender)
  if (!text) throw `✳️ *Ejemplo :*\n\n *${usedPrefix + command}* soy feo?`
  try {
  let res = await fetch(`https://api-sv2.simsimi.net/v2/?text=${text}&lc=es`)
  let json = await res.json()
  let tes = json.success.replace('simsimi', 'Spidei').replace('Simsimi', 'Spidei').replace('sim simi', 'Spidei')
    m.reply(`≡ *PREGUNTAS*
 
▢ *Pregunta:* ${text}
▢ *Respuesta :* ${tes}`) 
  } catch {
    m.reply('😔 No entiendo la pregunta')
  }
}

handler.help = ['pregunta']
handler.tags = ['fun']
handler.command = ['pregunta', 'preg'] 

export default handler
