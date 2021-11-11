
const {MessageType, GroupSettingChange, ChatModification, WAConnectionTest} = require('@adiwajshing/baileys');
const Pulibot = require('../events');
const DEL = "Delete all messages from you"



Pulibot.addCMD({pattern: 'del', fromMe: true, desc: DEL}, (async (message, match) => {

    await message.sendMessage('```Deleting all...```');
    await message.client.modifyChat (message.jid, ChatModification.delete);
    await message.sendMessage('```🗑All deleted....```');
}));
