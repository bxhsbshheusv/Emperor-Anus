
const { haigu,RandomXP,tlang,botpic} = require('../../lib')
const { prefix } = require('../../config') 
const Levels = require("discord-xp");
const moment = require("moment-timezone");
module.exports = {
    name: 'بروفايل',
    category: 'group',
    desc: 'Shows profile of user.',
    async exec(citel, Void,args,groupName,isAdmins) {
        var bio = await Void.fetchStatus(citel.sender);
			var bioo = bio.status;
			let idd = ''
		let	huh = await haigu.findOne({id: citel.sender})
			try{
			  let haigu = require('./lib/core')
		 idd = huh.haig
			} catch {
			  idd = 'لست احمق'
  
           }
			let hgg = idd.haig || 'لست احمق'
			const adn = isAdmins ? "مشرف" : "عضو";
			let meh = citel.sender;
			   const userq = await Levels.fetch(citel.sender, "RandomXP");
			   const lvpoints = userq.level;
			   var role = "ملك✨";
			   if (lvpoints <= 2) {
				   var role = "🏳مواطن";
			   }
			   else if (lvpoints <= 4) {
				   var role = "👼طفل بركه";
			   }
			   else if (lvpoints <= 6) {
				   var role = "🧙‍♀️ساحر";
			   }
			   else if (lvpoints <= 8) {  
                                   var role = "🧙‍♂️سيد السحره";
			   }
			   else if (lvpoints <= 10) {
				   var role = "🧚🏻طفل متوسط";
			   }
			   else if (lvpoints <= 12) {
				   var role = "🧜مراهق";
			   }
			   else if (lvpoints <= 14) {
				   var role = "🧜‍♂️سيد";
			   }
			   else if (lvpoints <= 16) {
				   var role = "🌬طفل نوبل";
			   }
			   else if (lvpoints <= 18) {
				   var role = "❄نوبل";
			   }
			   else if (lvpoints <= 20) {
				   var role = "⚡سريع النخبه";
			   }
			   else if (lvpoints <= 22) {
				   var role = "🎭النخبه";
			   }
			   else if (lvpoints <= 24) {
				   var role = "🥇جاد الأول";
			   }
			   else if (lvpoints <= 26) {
				   var role = "🥈جاد الثاني";
			   }
			   else if (lvpoints <= 28) {
				   var role = "🥉سيدهم";
			   }
			   else if (lvpoints <= 30) {
				   var role = "🎖المسيطر";
			   }
			   else if (lvpoints <= 32) {
				   var role = "🏅رجل النخبه";
			   }
			   else if (lvpoints <= 34) {
				   var role = "🏆الرجل الفائق";
			   }
			   else if (lvpoints <= 36) {
				   var role = "💍الفائق الأول";
			   }
			   else if (lvpoints <= 38) {
				   var role = "💎الفائق الثاني";
			   }
			   else if (lvpoints <= 40) {
				   var role = "🔮السيد الفائق";
			   }
			   else if (lvpoints <= 42) {
				   var role = "🛡الأسطوره الثالثه";
			   }
			   else if (lvpoints <= 44) {
				   var role = "🏹الأسطوره الثانيه";
			   }
			   else if (lvpoints <= 46) {
				   var role = "⚔الاسطوره";
			   }
			   else if (lvpoints <= 55) {
				   var role = "🐉الأعظم";
			   }
			   let ttms = `${userq.xp}` / 8;
			   const timenow = moment(moment())
				   .format('HH:mm:ss')
			   moment.tz.setDefault('Asia/Kolakata')
				   .locale('id')
			try {
				pfp = await Void.profilePictureUrl(citel.sender, "image");
			}
			catch (e) {
				pfp = await botpic();
			}
			const profile = `
*هلا ${citel.pushName},*
*معلومات البروفايل :*
*👤الاسم:* ${citel.pushName}
*⚡البايو:* ${bioo}
*☘️قروب:*  ${groupName}
*🦸مشرف؟* ${adn}
*🍀احمق* ${hgg}
*🧩المستوى:* ${role}
*🍁لفل:* ${userq.level}
*📥 عدد الرسائل * ${ttms}
*الصانع: ${tlang().title}*
`;
			const buttonsd = [
				{
					buttonId: `${prefix}alive`,
					buttonText: {
						displayText: "Alive",
					},
					type: 1,
          },
				{
					buttonId: `${prefix}help`,
					buttonText: {
						displayText: " Help",
					},
					type: 1,
          },
        ];
			let buttonMessage = {
				image: {
					url: pfp,
				},
				caption: profile,
				footer: tlang().footer,
				buttons: buttonsd,
				headerType: 4,
			};
			Void.sendMessage(citel.chat, buttonMessage, {
				quoted: citel,
			});
 
    }
 }
