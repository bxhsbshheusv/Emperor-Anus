const { tlang,getAdmin } = require('../../lib')

module.exports = {
    name: 'tagall',
    category: 'group',
    desc: 'Tags every person of group.',
    async exec(citel, Void,args,isGroup) {
        if (!citel.isGroup) return citel.reply(tlang().group);
        const groupMetadata = citel.isGroup ? await Void.groupMetadata(citel.chat).catch((e) => {}) : "";
			  const participants = citel.isGroup ? await groupMetadata.participants : "";
        const groupAdmins = await getAdmin(Void,citel)
        const isAdmins = citel.isGroup ? groupAdmins.includes(citel.sender) : false;
        if (!isAdmins) return citel.reply(tlang().admin);
        
 let textt = `
 ══✪〘   *Tag All / منشن جماعي*   〙✪══

➲ *Message / الرساله :* ${args.join(" ") ? args.join(" ") : "لا شي"}\n\n
➲ *Author:* ${citel.pushName} 🔖
`
        for (let mem of participants) {
            textt += `✨ @${mem.id.split("@")[0]}\n`;
        }
        Void.sendMessage(citel.chat, {
            text: textt,
            mentions: participants.map((a) => a.id),
        }, {
            quoted: citel,
        });
    }
 }
