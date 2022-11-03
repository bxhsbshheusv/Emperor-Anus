const axios = require('axios')
const { Anime, Manga } = require("@shineiichijo/marika");
const { tlang } = require('../../lib')

module.exports = {
   name: 'anime',
   alias: ['anime-s'],
   category: 'weeb',
   desc: 'Searches Info about Anime and Provides result.',
   async exec(citel, Void,args) {
      const client = new Anime();
      if (!args[0]) return citel.reply("Which Anime do you want to search? Please give me a name.");
      let anime = await client.searchAnime(args.join(" "));
      let result = anime.data[0];
      //console.log(result);
      let details = `*🎀عنوان: ${result.title}*\n`;
      details += `*🎋شكل: ${result.type}*\n`;
      details += `*📈حاله: ${result.status
        .toUpperCase()
        .replace(/\_/g, " ")}*\n`;
      details += `*🍥مجموع الحلقات: ${result.episodes}*\n`;
      details += `*🎈مده: ${result.duration}*\n`;
      details += `*🧧الأنواع:*\n`;
      for (let i = 0; i < result.genres.length; i++) {
        details += `\t\t\t\t\t\t\t\t*${result.genres[i].name}*\n`;
      }
      details += `*✨مرتكز على: ${result.source.toUpperCase()}*\n`;
      details += `*📍استودسو:*\n`;
      for (let i = 0; i < result.studios.length; i++) {
        details += `\t\t\t\t\t\t\t\t*${result.studios[i].name}*\n`;
      }
      details += `*منتجين💸;
      for (let i = 0; i < result.producers.length; i++) {
        details += `\t\t\t\t\t\t\t\t\t\t*${result.producers[i].name}*\n`;
      }
      details += `*💫عرض لاول مره: ${result.aired.from}*\n`;
      details += `*🎗انتها في: ${result.aired.to}*\n`;
      details += `*🎐شعبيه: ${result.popularity}*\n`;
      details += `*🎏المفضله: ${result.favorites}*\n`;
      details += `*🎇تقييم: ${result.rating}*\n`;
      details += `*🏅مرتبه: ${result.rank}*\n\n`;
      if (result.trailer.url !== null)
        details += `*♦جرار: ${result.trailer.url}*\n\n`;
      details += `*🌐عنوان: ${result.url}*\n\n`;
      if (result.background !== null)
        details += `*🎆خلفية:* ${result.background}*\n\n`;
      details += `*❄وصف:* ${result.synopsis}`;
      Void.sendMessage(
        citel.chat,
        {
          image: {
            url: result.images.jpg.large_image_url,
          },
          caption: details,
        },
        {
          quoted: citel,
        }
      );
    
   }
}
