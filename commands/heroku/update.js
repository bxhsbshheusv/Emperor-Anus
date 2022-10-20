const Config = require('../../config')
const Heroku = require('heroku-client');
const { prefix } = require('../../config')
const DB = require('../../lib/scraper')
const { execSync } = require('child_process')
module.exports = {
   name: 'تحديث',
   category: 'owner',
   desc: 'Shows repo\'s refreshed commits.',
   async exec(citel, Void,args,isCreator) {
    if(!isCreator) return citel.reply('الميزه فقط لمطوري')
    let commits = await DB.syncgit()
  if (commits.total === 0)  {
   citel.reply(`هلا ${citel.pushName}. عندك احدث تحديث.`)
    } else {
     let update = await DB.sync()  
     let buttons = [
      { buttonId: `${prefix}updatenow`, buttonText: { displayText: 'تحديث؟' }, type: 1 },
  ]
  await Void.sendButtonText(citel.chat, buttons, update,Void.user.name)
           
    }

   }
}
