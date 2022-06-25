function handler(m) {
  const data = global.owner.filter(([id, isCreator]) => id && isCreator)
  this.sendContact(m.chat, data.map(([id, name]) => [id, name]), m)
  
  m.reply(`
*≡ OWNER*
  *ELIECER*
🕷 Instagram :
  • https://instagram.com/libeliecer_wfna/
🕷 WhatsApp :
  • (escribe solo si es necesario) 
🕷 GitHub :
  • https://github.com/brian-s2005
`) 


}

handler.help = ['creador']
handler.tags = ['main']

handler.command = ['owner', 'creator', 'creador', 'due�o', 'fgowner'] 


export default handler
