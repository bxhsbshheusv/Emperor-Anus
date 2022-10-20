const { tlang } = require('../../lib')
const { prefix } = require('../../config')
module.exports = {
    name: "فيديو",
    alias: ['searchyt','ytsearch'],
    category: 'downloader',
    desc: 'Sends info about the query(of youtube video/audio).',
    use: '<text>',
    async exec(citel, Void,args,command) {
    if (!args.join(" ")) return citel.reply(`Use ${command} Back in Black`);
    let yts = require("yt-search");
    let search = await yts(args.join(" "));
    let anu = search.videos[0];
    let buttons = [
        {
            buttonId: `${prefix}ytmp4 ${anu.url}`,
            buttonText: {
                displayText: "► فيديو",
            },
            type: 1,
    },
        {
            buttonId: `${prefix}ytmp3 ${anu.url}`,
            buttonText: {
                displayText: "♫ موسيقى",
            },
            type: 1,
    },
  ];
    let buttonMessage = {
        image: {
            url: anu.thumbnail,
        },
        caption: `
╭───────────────◆
│⿻ *${tlang().title} Youtube Player* ✨
│
│⿻ *الاسم:* ${anu.title}
│⿻ *وقت الفيديو:* ${anu.timestamp}
│⿻ *مشاهده:* ${anu.views}
│⿻ *وقت الرفع:* ${anu.ago}
│⿻ *اخر:* ${anu.author.name}
│⿻ *الرابط* : ${anu.url}
╰────────────────◆
`,
        footer: tlang().footer,
        buttons: buttons,
        headerType: 4,
    };
    Void.sendMessage(citel.chat, buttonMessage, {
        quoted: citel,
    });
 
    }
 }

