const { tlang } = require('../../lib')

module.exports = {
    name: 'الدعم',
    category: 'weeb',
    desc: 'Sends SECKTOR userbot group link.',
    async exec(citel, Void,args) {
        citel.reply(`*Group Name / اسم القروب: 𝗕𝗢𝗧 𝗜𝗡𝗖*\n*Group Link:* https://chat.whatsapp.com/IJnyOohnm2Y9F6MWgruFj5`);
        await Void.sendMessage(`${citel.sender}`, {
          image: fs.readFileSync("../../lib/assets/SocialLogo 1.png"),
          caption: `*Group Name / اسم القروب: 𝗕𝗢𝗧 𝗜𝗡𝗖*\n*Group Link:* https://chat.whatsapp.com/IJnyOohnm2Y9F6MWgruFj5`,
        });
 
    }
 }
