const speed = require('performance-now')

module.exports = {
    name: 'ping',
    category: 'general',
    desc: 'Tells ping speed of bot.',
    async exec(citel, Void) {
  var inital = new Date().getTime();
 await citel.reply('```Ping!!!كم اطار ف الثانيه```');
  var final = new Date().getTime();
     await citel.reply('*Pong / سرعه التشغيل*\n *' + (final - inital) + ' ms* ');
   }
}
