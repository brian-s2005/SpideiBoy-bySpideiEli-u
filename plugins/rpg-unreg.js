import { createHash } from 'crypto'
let handler = async function (m, { args }) {
if (!args[0]) throw '*🕷𝕀ℕ𝔽𝕆🕷 𝕀ℕ𝔾ℝ𝔼𝕊𝔼 𝕊𝕌 ℕ𝕌𝕄𝔼ℝ𝕆 𝔻𝔼 𝕊𝔼ℝ𝕀𝔼, 𝕊𝕀 ℕ𝕆 𝕃𝕆 ℝ𝔼ℂ𝕌𝔼ℝ𝔻𝔸 𝕌𝕊𝔼 𝔼𝕊𝕋𝔼 ℂ𝕆𝕄𝔸ℕ𝔻𝕆  .nserie*'
let user = global.db.data.users[m.sender]
let sn = createHash('md5').update(m.sender).digest('hex')
if (args[0] !== sn) throw '*🕷𝕀ℕ𝔽𝕆🕷 ℕ𝕌𝕄𝔼ℝ𝕆 𝔻𝔼 𝕊𝔼ℝ𝕀𝔼 𝕀ℕℂ𝕆ℝℝ𝔼ℂ𝕋𝕆, ℂ𝕆𝕄ℙℝ𝕌𝔼𝔹𝔸𝕃𝕆!! *\n\n*ℙ𝔸ℝ𝔸 𝕍𝔼ℝ𝕃𝕆 𝕌𝕊𝔸 𝔼𝕃 ℂ𝕆𝕄𝔸ℕ𝔻𝕆 .nserie*'
user.registered = false
m.reply(`*🕷 𝕊𝔼 ℝ𝔼𝔸𝕃𝕀ℤ𝕆 ℂ𝕆ℕ 𝔼𝕏𝕀𝕋𝕆, 𝕐𝔸 ℕ𝕆 𝕊𝔼 𝔼ℕℂ𝕌𝔼ℕ𝕋ℝ𝔸 ℝ𝔼𝔾𝕀𝕊𝕋ℝ𝔸𝔻𝕆*`)
}
handler.help = ['unreg <Num Serie>'] 
handler.tags = ['rg']

handler.command = ['unreg'] 
handler.register = true

export default handler

