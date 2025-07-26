module.exports.config = {
  name: "help",
  version: "1.0.0",
  permission: 0,
  credits: "farhan",
  prefix: true,
  description: "search results on google",
  category: "without prefix",
  usages: "google [text]",
  cooldowns: 5,
  dependencies: 
{
  "request":"",
  "fs-extra":"",
  "axios":""
}
};
module.exports.run = async function({ api,event,args,client,Users,Threads,__GLOBAL,Currencies }) {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
const time = process.uptime(),
		hours = Math.floor(time / (60 * 60)),
		minutes = Math.floor((time % (60 * 60)) / 60),
		seconds = Math.floor(time % 60);
const moment = require("moment-timezone");
var juswa = moment.tz("Asia/Dhaka").format("『D/MM/YYYY』 【hh:mm:ss】");
var link = ["https://i.postimg.cc/rwkPdFVr/20250508-073525.jpg", 
            
            "https://i.postimg.cc/gJFdrbTt/Messenger-creation-20-CF0230-998-B-4550-8-F8-D-215-C6-FBE36-A9.jpg", 
            
            "https://i.postimg.cc/vm1HczHT/IMG20250331132445.jpg",

"https://i.postimg.cc/Pr8LRdkN/IMG20250430172943.jpg",
            
            "https://i.postimg.cc/ncVR4w8d/IMG20250508083200.jpg"];
  
var callback = () => api.sendMessage({body:`🌺🍒🐰{❀𝐀𝐃𝐌𝐈𝐍 𝐀𝐍𝐃 𝐁𝐎𝐓 𝐇𝐄𝐋𝐏❀}🌺🐰🍒 

╔════•|      ✿      |•════╗
    💐আ্ঁস্ঁসা্ঁলা্ঁমু্ঁ💚আ্ঁলা্ঁই্ঁকু্ঁম্ঁ💐
╚════•|      ✿      |•════╝

_____________________

💠𝐁𝐎𝐓 𝐍𝐀𝐌𝐄💠:${global.config.BOTNAME}

🌼𝐁𝐎𝐓 𝐀𝐃𝐌𝐈𝐍🌼:『😽👉𝐒𝐀𝐍𝐓𝐎👈😽』

╭──«~»──CMD──«~»──╮

PAGE 1/19

╭────────────❍
╰➤  1 ❯ /married  undefined

╭────────────❍
╰➤  2 ❯ /rankup  system

╭────────────❍
╰➤  3 ❯ /accept  uid

╭────────────❍
╰➤  4 ❯ /adduser  < link/UID >

╭────────────❍
╰➤  5 ❯ /admin2  [add/remove] [uid]

╭────────────❍
╰➤  6 ❯ /adminnoti  [msg]

╭────────────❍
╰➤  7 ❯ /admins  admins

╭────────────❍
╰➤  8 ❯ /ai  query

╭────────────❍
╰➤  9 ❯ /allgroups  groups

╭────────────❍
╰➤  10 ❯ /alluser  undefined

╭────────────❍
╰➤ 𝗧𝗢𝗧𝗔𝗟 𝗖𝗢𝗠𝗠𝗔𝗡𝗗 182
𝗨𝗦𝗘【 /Help 】𝐏𝐀𝐆𝐄 𝐍𝐎.
╭────────────❍
╰➤ «𝐍𝐔𝐌𝐁𝐄𝐑 𝐎𝐅 𝐏𝐀𝐆𝐄» 1
╭────────────❍ 
╰➤ «𝐖𝐇𝐀𝐓'𝐒 𝐀𝐏𝐏:[𝟎𝟏𝟖𝟔𝟔𝟔𝟕𝟑𝟖𝟎𝟏]

_______🅲🅾🅽🆃🅰🅲🆃_______

💥𝐅𝐀𝐂𝐄𝐁𝐎𝐎𝐊 𝐈𝐃(❶)💥:https://www.facebook.com/profile.php?id=61550529403710

💥𝐅𝐀𝐂𝐄𝐁𝐎𝐎𝐊 𝐈𝐃(❷)💥:https://www.facebook.com/share/16tbfLvHQk/

✴️𝐁𝐎𝐓 𝐏𝐑𝐄𝐅𝐈𝐗✴️:${global.config.PREFIX}

❇️𝐁𝐎𝐓 𝐎𝐖𝐍𝐄𝐑✳️:{«𝐁𝐎𝐒𝐒 𝐑𝐉 𝐅𝐀𝐑𝐇𝐀𝐍»}`,attachment: fs.createReadStream(__dirname + "/cache/juswa.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/juswa.jpg")); 
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/juswa.jpg")).on("close",() => callback());
   };
