const { tlang,getAdmin,prefix } = require('../../lib')

module.exports = {
    name: 'قروب',
    category: 'group',
    desc: 'activates and deactivates group\nuse open or close option to toggle.',
    async exec(citel, Void,args) {
		if (!citel.isGroup) return citel.reply(tlang().قروب);
		const groupAdmins = await getAdmin(Void,citel)
		const botNumber =  await Void.decodeJid(Void.user.id) 
		const isBotAdmins = citel.isGroup ? groupAdmins.includes(botNumber) : false;
		const isAdmins = citel.isGroup ? groupAdmins.includes(citel.sender) : false;   
        if (!citel.isGroup) return citel.reply(tlang().group);
			if (!isBotAdmins) return citel.reply(tlang().botAdmin);
			if (!isAdmins) return citel.reply(tlang().admin);
			if (args[0] === "close") {
				await Void.groupSettingUpdate(citel.chat, "announcement")
					.then((res) => reply(`Group Chat Muted :)`))
					.catch((err) => console.log(err));
			}
			else if (args[0] === "فتح") {
				await Void.groupSettingUpdate(citel.chat, "not_announcement")
					.then((res) => reply(`Group Chat Unmuted :)`))
					.catch((err) => console.log(err));
			}
			else {
				let buttons = [
					{
						buttonId: `${prefix}group فتح`,
						buttonText: {
							displayText: "📍فتح",
						},
						type: 1,
              },
					{
						buttonId: `${prefix}group قفل`,
						buttonText: {
							displayText: "📍قفل",
						},
						type: 1,
              },
            ];
				await Void.sendButtonText(citel.chat, buttons, `Group Mode`, Void.user.name, citel);
			}
    }
 }
