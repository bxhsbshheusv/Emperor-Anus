const { tlang,botpic,runtime } = require('../../lib')
const Config = require('../../config')
const prefix = Config.prefix
module.exports = {
    name: 'alive',
    category: 'general',
    desc: 'Tells, is bot alive??.',
    async exec(citel, Void,args,isAdmins) {
        const aliveadm = isAdmins ? "True" : "False";
			let alivemessage = process.env.ALIVE_MESSAGE || `*A bot developed by SamPandey001.*`
			const alivtxt = `
*مرحباً يا ${citel.pushName},*
*في  ${tlang().title}.*
${alivemessage}
*❖الأصدار:-* 0.0.3
*❖الوقت:-* ${runtime(process.uptime())}
*❖المالك:-* ${Config.ownername}
*❖فرع:-* ${Config.BRANCH}
*❖النوع:-* عام
*للحصول ${prefix}على الأوامر اكتب .الاوامر.*
    
*Powered by ${Config.ownername}*
    `;
			let aliveMessage = {
				image: {
					url: await botpic(),
				},
				caption: alivtxt,
				footer: tlang().footer,
				headerType: 4,
			};
			Void.sendMessage(citel.chat, aliveMessage, {
				quoted: citel,
			});
 
    }
 }
