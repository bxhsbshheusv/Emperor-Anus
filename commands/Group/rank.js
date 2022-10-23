const { sck,RandomXP,tlang} = require('../../lib/')
const canvacord = require("canvacord");
const Levels = require("discord-xp");

module.exports = {
    name: 'المستوى',
    category: 'group',
    desc: 'Sends rank card of user..',
    async exec(citel, Void,args,pushname) {
 
        const userq = await Levels.fetch(citel.sender, "RandomXP");
        const lvpoints = userq.level;
        var role = "GOD✨";
        if (lvpoints <= 2) {
            var role = "🏳مواطن";
        }
        else if (lvpoints <= 4) {
            var role = "👼طفل عظيم";
        }
        else if (lvpoints <= 6) {
            var role = "🧙‍♀️ساحر";
        }
        else if (lvpoints <= 8) {
            var role = "🧙‍♂️ساحر كبير
        else if (lvpoints <= 10) {
            var role = "🧚🏻Baby Mage";
        }
        else if (lvpoints <= 12) {
            var role = "🧜Mage";
        }
        else if (lvpoints <= 14) {
            var role = "🧜‍♂️Master of Mage";
        }
        else if (lvpoints <= 16) {
            var role = "🌬Child of Nobel";
        }
        else if (lvpoints <= 18) {
            var role = "❄Nobel";
        }
        else if (lvpoints <= 20) {
            var role = "⚡Speed of Elite";
        }
        else if (lvpoints <= 22) {
            var role = "🎭Elite";
        }
        else if (lvpoints <= 24) {
            var role = "🥇Ace I";
        }
        else if (lvpoints <= 26) {
            var role = "🥈Ace II";
        }
        else if (lvpoints <= 28) {
            var role = "🥉Ace Master";
        }
        else if (lvpoints <= 30) {
            var role = "🎖Ace Dominator";
        }
        else if (lvpoints <= 32) {
            var role = "🏅Ace Elite";
        }
        else if (lvpoints <= 34) {
            var role = "🏆Ace Supreme";
        }
        else if (lvpoints <= 36) {
            var role = "💍Supreme I";
        }
        else if (lvpoints <= 38) {
            var role = "💎Supreme Ii";
        }
        else if (lvpoints <= 40) {
            var role = "🔮Supreme Master";
        }
        else if (lvpoints <= 42) {
            var role = "🛡Legend III";
        }
        else if (lvpoints <= 44) {
            var role = "🏹Legend II";
        }
        else if (lvpoints <= 46) {
            var role = "⚔Legend";
        }
        else if (lvpoints <= 55) {
            var role = "🐉Immortal";
        }
        let disc = citel.sender.substring(3, 7);
        let textr = "";
        if (pushname) {
            textr += `*هلا ${tlang().greet} ,🌟 ${citel.pushName}∆${disc}'s* Exp\n\n`;
        }
        else {
            textr += `*${citel.pushName}∆${disc}'s* Exp\n\n`;
        }
        let ttms = `${userq.xp}` / 8;
        textr += `*🌟دور*: ${role}\n*🟢إكسب*: ${userq.xp} / ${Levels.xpFor(
        userq.level + 1
      )}\n*🏡المستوى*: ${userq.level}\n*عدد الرسائل:*- ${ttms}`;
        try {
            ppuser = await Void.profilePictureUrl(citel.sender, "image");
        }
        catch {
            ppuser = process.env.THUMB_IMAGE;
        }
        const rank = new canvacord.Rank()
            .setAvatar(ppuser)
            .setLevel(userq.level)
            .setLevelColor("#ffa200", "#ffa200")
            .setCurrentXP(userq.xp)
            .setStatus("online")
            .setBackground("IMAGE", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJQ2FaU2C-dSC-6OlY14wM_7hWajwD3x41cA&usqp=CAU")
            .setOverlay("#ffffff", 100, false)
            .setRequiredXP(Levels.xpFor(userq.level + 1))
            .setProgressBar("#ffa200", "COLOR")
            .setRank(0, role, false)
            .setBackground("COLOR", "#000000")
            .setUsername("Rank Check!")
            .setDiscriminator(disc);
        rank.build()
            .then(async (data) => {
                Void.sendMessage(citel.chat, {
                    image: data,
                    caption: textr,
                }, {
                    quoted: citel,
                });
            });
    }
 }
