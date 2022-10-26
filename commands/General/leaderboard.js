const { sck,sck1,RandomXP } = require('../../lib')
const axios = require('axios')
const Levels = require("discord-xp");

module.exports = {
   name: 'الرتب',
   category: 'general',
   desc: 'Shows leaderboard of top bot users.',
   async exec(citel, Void,args) {
    const fetchlb = await Levels.fetchLeaderboard("RandomXP", 5);
    let leadtext = `
  *-------------------------------*
  *----● لوحة الصداره ● -----*
  *-------------------------------*
  \n\n`
    for (let i = 0; i < fetchlb.length; i++) {
              const lvpoints  = fetchlb[i].level
                        var role = "ملك✨";
      if (lvpoints <= 2) {
        var role = "🏳مواطن";
      }
      else if (lvpoints <= 4) {
        var role = "👼طفل سليم";
      }
      else if (lvpoints <= 6) {
        var role = "🧙‍♀️ساحر";
      }
      else if (lvpoints <= 8) {
        var role = "🧙‍♂️سيد السحره";
      }
      else if (lvpoints <= 10) {
        var role = "🧚🏻طفل بركه";
      }
      else if (lvpoints <= 12) {
        var role = "🧜بركه";
      }
      else if (lvpoints <= 14) {
        var role = "🧜‍♂️سيد بركه";
      }
      else if (lvpoints <= 16) {
        var role = "🌬طفل نوبل";
      }
      else if (lvpoints <= 18) {
        var role = "❄نوبل";
      }
      else if (lvpoints <= 20) {
        var role = "⚡سرعة النخبه";
      }
      else if (lvpoints <= 22) {
        var role = "🎭نخبه";
      }
      else if (lvpoints <= 24) {
        var role = "🥇جاد1";
      }
      else if (lvpoints <= 26) {
        var role = "🥈جاد2";
      }
      else if (lvpoints <= 28) {
        var role = "🥉الرجل المتقن";
      }
      else if (lvpoints <= 30) {
        var role = "🎖الرجل المسيطر";
      }
      else if (lvpoints <= 32) {
        var role = "🏅رجل النخبه";
      }
      else if (lvpoints <= 34) {
        var role = "🏆الرجل الفائق";
      }
      else if (lvpoints <= 36) {
        var role = "💍المعلم الاول";
      }
      else if (lvpoints <= 38) {
        var role = "💎المعلم الثاتي";
      }
      else if (lvpoints <= 40) {
        var role = "🔮المعلم الأعلى";
      }
      else if (lvpoints <= 42) {
        var role = "🛡الأسطورة الثالثه";
      }
      else if (lvpoints <= 44) {
        var role = "🏹الأسطورة الثانيه";
      }
      else if (lvpoints <= 46) {
        var role = "⚔أسطوره";
      }
      else if (lvpoints <= 55) {
        var role = "🐉الأبدي";
      }
    let name = await sck1.findOne({ id: fetchlb[i].userID })
    let namew = fetchlb[i].userID
    let getname = await Void.getName(namew)
    console.log(getname)
     let ttms = fetchlb[i].xp/8
    leadtext += `*${i + 1}●الأسم*: ${getname}\n*●المستوى*: ${fetchlb[i].level}\n*●نقاطه*: ${fetchlb[i].xp}\n*●دور*: ${role}\n*●عدد الرسائل*: ${ttms}\n\n`;
  }
    citel.reply(leadtext)
   }
}
