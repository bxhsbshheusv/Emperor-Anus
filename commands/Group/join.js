const { tlang } = require('../../lib')

module.exports = {
    name: 'ادخل',
    category: 'owner',
    desc: 'اعطني رابط القروب.',
    async exec(citel,Void,args,isCreator) {
      if (!isCreator) return citel.reply(tlang().owner);
	 if (!args[0]) return citel.reply('Provide me url.')
            if (!/https?:\/\/(chat\.whatsapp\.com)\/[A-Za-z]/.test(args[0])) return citel.reply(`يزق جيب رابط القروب, ${tlang().greet}`);
				  let result = args[0].split("https://chat.whatsapp.com/")[1];
				  await Void.groupAcceptInvite(result)
					.then((res) => citel.reply("🟩دخلت القروب"))
					.catch((err) => citel.reply("لم استطع الانضمام للقروب."));
 
    }
 }
