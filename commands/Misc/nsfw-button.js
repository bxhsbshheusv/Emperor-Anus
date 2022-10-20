const { tlang,getAdmin,prefix } = require('../../lib')

module.exports = {
    name: 'اباحي🔞',
    category: 'misc',
    desc: 'activates and deactivates nsfw.\nuse buttons to toggle.',
    async exec(citel, Void,args) {
		if (!citel.isGroup) return citel.reply(tlang().group);
		const groupAdmins = await getAdmin(Void,citel)
		const botNumber =  await Void.decodeJid(Void.user.id) 
		const isBotAdmins = citel.isGroup ? groupAdmins.includes(botNumber) : false;
		const isAdmins = citel.isGroup ? groupAdmins.includes(citel.sender) : false;  
        if(!isAdmins) return citel.reply(tlang().admin) 
        if(!isBotAdmins) return citel.reply(tlang().botadmin)
        {
				let buttons = [
					{
						buttonId: `${prefix}act nsfw`,
						buttonText: {
							displayText: "فتح",
						},
						type: 1,
              },
					{
						buttonId: `${prefix}deact nsfw`,
						buttonText: {
							displayText: "قفل",
						},
						type: 1,
              },
            ];
				await Void.sendButtonText(citel.chat, buttons, `تم تشغيل اوامر الاباحي:١٨+`, Void.user.name, citel);
			}
    }
 }
