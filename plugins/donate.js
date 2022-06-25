let handler =  m => m.reply(`

≡ *DONACION*
puedes donar si quieres ayudar a mantener el bot activo

🕷 *PayPal*
• *Link : http://paypal.me/SpiderEliU
🕷 *Nequi*
• *Número : 3135921814

_Al donar consigues_  *Premium* 

• Diamantes ilimitados
• comandos de *menu premium* desbloqueado
• Limite de *Descargas +250 MB*, podrá descargar archivos de 300 mb que es lo que permite WhatsApp :'v

`.trim())
handler.help = ['donar']
handler.tags = ['main']
handler.command = ['donar', 'apoyar', 'donate'] 

export default handler
