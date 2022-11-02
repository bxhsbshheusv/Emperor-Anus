const djs = require("@discordjs/collection")
const moment = require("moment-timezone")
const fs = require("fs")
const Config = require('../../config')
let { fancytext,botpic,tlang } = require("../../lib");
 
module.exports = {
    name: "help",
    alias: ["h", "cmd", "menu", "الاوامر", "اوامر"],
    category: "general",
    async exec(citel, Void, args) {
        if (args.join(' ')) {
            const data = [];
            const name = args[0].toLowerCase();
            const { commands, prefix } = djs;
            console.log(name)
            const cmd = commands.get(name) || commands.find((cmd) => cmd.alias && cmd.alias.includes(name));
            if (!cmd || cmd.category === "private") return await citel.reply("*❌حدث خطأ.*");
            else data.push(`*🍁Command:* ${cmd.name}`);
            if (cmd.alias) data.push(`*🔰الإسم المستعار:* ${cmd.alias.join(', ')}`);
            if (cmd.desc) data.push(`*🧩وصف:* ${cmd.desc}`);
            if (cmd.use) data.push(`*〽️استعمال :* \`\`\`${prefix}${cmd.name} ${cmd.use}\`\`\`\n\nNote: [] = optional, | = or, <> = must filled`);

            return await citel.reply(data.join('\n'));
        } else {
            const { prefix, commands } = djs;
            const cmds = commands.keys()
            let category = [];

            for (let cmd of cmds) {
                let info = commands.get(cmd);
                if (!cmd) continue;
                if (!info.category || info.category === 'private') continue;
                if (Object.keys(category).includes(info.category)) category[info.category].push(info);
                else {
                    category[info.category] = [];
                    category[info.category].push(info);
                }
            }
let str = `╭━━〘 `+ fancytext(Config.ownername.split(' ')[0],58) +` 〙━━──⊷`     
str+=
`
┃ *مرحبا, ${citel.pushName}*
┃ *انا اسمي ${tlang().title}*
┃ *تم تطويري بواسطة الامبراطور انوس 🤭*
┃ *يحبكم😍 ${Config.ownername}*
┃ الي يحبني يرفع يده😂
┃انا عم الجميع هنا 😂
╰━━━━━━━━━━━──⊷\n`
            const keys = Object.keys(category);
 str += `╭───『 `+ fancytext('Commands',57)+`』──◆`
for (const key of keys) {
  let anu = key[0].toUpperCase()           
str += `
┃ ⿻ ╭─────────────◆
┃ ⿻ │ ⦿---- ${anu}${key.slice(1)} ----⦿
┃ ⿻ ╰┬────────────◆
┃ ⿻ ┌┤ ${category[key].map((cmd, idx) =>`
┃ ⿻ │ ✭ ${idx + 1}. ${prefix}`+`${cmd.name}`)}
┃ ⿻ ╰─────────────◆`
            }
str += `\n╰━━━━━━━━━━━──⊷\n`
str += `_🔖إرسال ${prefix} <اسم الأمر> للحصول على معلومات مفصلة عن أمر معين.
*📍Eg:* _.مساعدة أنيمي_* _${prefix}help anime_`;
            let generatebutton = [{
					buttonId: `${prefix}المطور`,
					buttonText: {
						displayText: 'المطور👤'
					},
					type: 1
				},{
					buttonId: `${prefix}قائمة`,
					buttonText: {
						displayText: 'الاوامر'
					},
					type: 1
				}
				]
				let buttonMessaged = {
					image: { url: await botpic() },
					caption: str,
					footer: tlang().title,
					headerType: 4,
				 buttons: generatebutton,
					contextInfo: {
						externalAdReply: {
							title: tlang().title,
							body: 'Help List',
							thumbnail: log0,
							mediaType: 2,
							showAdAttribution: true,
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
}
