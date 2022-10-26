const { tlang,sleep } = require('../../lib/')

module.exports = {
    name: 'القروبات',
    category: 'owner',
    desc: 'Sends chat id of every groups.',
    async exec(citel, Void,args,isCreator) {
      if(!isCreator) return citel.reply(tlang().owner)
        let getGroups = await Void.groupFetchAllParticipating();
        let groups = Object.entries(getGroups)
            .slice(0)
            .map((entry) => entry[1]);
        let anu = groups.map((v) => v.id);
        let jackhuh = `كل القروبات اللي انا فيها\n\n`
        citel.reply(`جلب معلومات  ${anu.length} قروب`)
        for (let i of anu) {
          let metadata = await Void.groupMetadata(i);
            await sleep(500)
            jackhuh += `*الأسم:-* ${metadata.subject}\n`
            jackhuh += `*اعضاء :* ${metadata.participants.length}\n`
            jackhuh += `*دخول:-* ${i}\n\n`
            
    }
    citel.reply(jackhuh)
 
    }
 }
