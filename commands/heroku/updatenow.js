const { prefix } = require('../../config')
const DB = require('../../lib')
module.exports = {
   name: 'تحديث_الان',
   category: 'owner',
   desc: 'Updates bot with repo\'s refreshed commits.',
   async exec(citel, Void,args,isCreator) {
    if(!isCreator) return citel.reply('الامر فقط لمطوري')
    let commits = await DB.syncgit()
  if (commits.total === 0)  {
   citel.reply(`هلا ${citel.pushName}. عندك اخر تحديث.`)
    } else { 
       citel.reply('Build Started...')
      let update = await DB.updatedb()
        citel.reply(تحديث)
    }
   } 
}
