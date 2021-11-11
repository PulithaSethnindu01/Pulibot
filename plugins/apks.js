const Pulibot = require('../events');
const axios = require('axios');
const {MessageType, Mimetype, MessageOptions} = require('@adiwajshing/baileys');
const {spawnSync} = require('child_process');
const Config = require('../config');
const fs = require('fs');


if (Config.WORKTYPE == 'private') {

   Pulibot.addCMD({pattern: 'apkmod', fromMe: true}, (async (message, match) => {
      await message.sendMessage('┏━━━━━━━━━━━━━━━━━━━\n┃〘 ☣️ *Mod App World* ☣️ 〙\n┗━━━━━━━━━━━━━━━━━━━\n');
      await message.sendMessage('\n*Coming Soon...*\n');
   }));

}

else if (Config.WORKTYPE == 'public') {

   Pulibot.addCMD({pattern: 'apkmod', fromMe: false}, (async (message, match) => {
      await message.sendMessage('┏━━━━━━━━━━━━━━━━━━━\n┃〘 ☣️ *Mod App World* ☣️ 〙\n┗━━━━━━━━━━━━━━━━━━━\n');
      await message.sendMessage('\n*Coming Soon...*\n');
   }));
   
}
