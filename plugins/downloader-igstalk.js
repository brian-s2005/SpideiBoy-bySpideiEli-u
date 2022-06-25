import { instagramStalk } from '@bochilteam/scraper'

let handler= async (m, { args, usedPrefix, command }) => {
    if (!args[0]) throw `✳️ Escriba un Nombre de Usuario\n\n📌Ejemplo : ${usedPrefix + command}fg98._`
    const {
        username,
        name,
        description,
        followersH,
        followingH,
        postsH,
    } = await instagramStalk(args[0])
    m.reply(`
┌──「 *STALKING* 
🕷 *🔖 Nombre Completo* : ${name} 
🕷 *🔖 Username* : ${username}
🕷 *👥 Seguidores* : ${followersH}
🕷 *🫂 Siguiendo* : ${followingH}*
🕷 *📌 Bio :* ${description}

▢ *🔗 Link* : https://instagram.com/${username.replace(/^@/, '')}
└──────────────
`.trim())
}

handler.help = ['igstalk'].map(v => v + ' <username>')
handler.tags = ['downloader']

handler.command = ['igstalk'] 

export default handler
