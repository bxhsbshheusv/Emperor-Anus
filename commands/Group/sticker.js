const Config = require('../../config')
const {Sticker,createSticker,StickerTypes} = require("wa-sticker-formatter");

module.exports = {
    name: 'ملصق',
    category: 'sticker',
    desc: 'ارسل صوره او فيديو وسوي الأمر وستتخول لملصق.',
    async exec(citel, Void,args) {
        if (!citel.quoted) return citel.reply(`*يزق منشن فيديو او صوره.*`);
        let mime = citel.quoted.mtype

            pack = Config.packname
            author = Config.author
            
        if (citel.quoted) {
            let media = await citel.quoted.download();
            citel.reply("*جاري معالجة طلبك*");
            let sticker = new Sticker(media, {
                pack: pack, // The pack name
                author: author, // The author name
                type: args.join(' ').includes("--crop" || '-c') ? StickerTypes.CROPPED : StickerTypes.FULL,
                categories: ["🤩", "🎉"], // The sticker category
                id: "12345", // The sticker id
                quality: 75, // The quality of the output file
                background: "transparent", // The sticker background color (only for full stickers)
            });
            const buffer = await sticker.toBuffer();
            Void.sendMessage(citel.chat, {
                sticker: buffer,
            }, {
                quoted: citel,
            });
        }
        else if (/video/.test(mime)) {
            if ((quoted.msg || quoted)
                .seconds > 20) return citel.reply("Cannot fetch videos longer than *20 Seconds* لا يمكن ان تصنع ملصق اكثر من *٢٠ ثانية*");
            let media = await quoted.download();
            let sticker = new Sticker(media, {
                pack: pack, // The pack name
                author: author, // The author name
                type: StickerTypes.FULL, // The sticker type
                categories: ["🤩", "🎉"], // The sticker category
                id: "12345", // The sticker id
                quality: 70, // The quality of the output file
                background: "transparent", // The sticker background color (only for full stickers)
            });
            const stikk = await sticker.toBuffer();
            Void.sendMessage(citel.chat, {
                sticker: stikk,
            }, {
                quoted: citel,
            });
        }
        else {
            citel.reply("*Uhh,Please reply to any image or video / منشن على صوره او فيديو رجاءً *");
        }
    }
 }
