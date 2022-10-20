
const { tlang,botpic } = require('../../lib')
module.exports = {
    name: 'ريبو',
    category: 'general',
    alias: ["script", "git", "sc"],
    desc: 'Sends userbot github repo link.',
    async exec(citel, Void) {
        
        let buttonMessaged = {
            image: { url: await botpic() },
            caption: `Hey ${citel.pushName}\n*This is light Repo*\n\n*Repo:* https://github.com/SamPandey001/Secktor-Md\n\n*Whatsapp Group:* https://chat.whatsapp.com/IJnyOohnm2Y9F6MWgruFj5\n\n*Deploy Your Own:*-\nSecktorBot.herokuapp.com/deploy `,
            footer: ` ` + tlang().footer,
            headerType: 4,
            contextInfo: {
              externalAdReply: {
                title: "Secktor-Repo",
                body: "Easy to Use",
                thumbnail: log0,
                mediaType: 2,
                mediaUrl: `https://github.com/SamPandey001/Secktor-Md`,
                sourceUrl: `https://github.com/SamPandey001/Secktor-Md`,
              },
            },
          };
          await Void.sendMessage(citel.chat, buttonMessaged, {
            quoted: citel,
          });
 
    }
 }
      
