const Pulibot = require('../events');
const Config = require('../config');
const {MessageType,Mimetype} = require('@adiwajshing/baileys');
const Language = require('../language');
const Lang = Language.getString('_xtroid');
const axios = require('axios');
const Menu1 = `
Hello :)
`

const Menu2 = `
Hello :)
`
const Menu3 =`
Hello :)
`


if (Config.WORKTYPE == 'private') {

    Pulibot.addCMD({pattern: 'grp', fromMe: true,desc:'Get group link list', deleteCommand: false,}, (async (message, match) => {
var lasiimg = await axios.get(`https://netfiletolink.herokuapp.com/30084`, { responseType: 'arraybuffer' })
var lasiimg2 = await axios.get(`https://telegra.ph/file/145ee2d4fb11363f72582.jpg`, { responseType: 'arraybuffer' })
var lasiimg3 = await axios.get(`https://telegra.ph/file/84800023135d94543132c.jpg`, { responseType: 'arraybuffer' })


        await message.client.sendMessage(message.jid, Buffer.from(lasiimg.data), MessageType.video, {mimetype: Mimetype.gif, caption: Menu1})
        await message.client.sendMessage(message.jid, Buffer.from(lasiimg2.data), MessageType.image, {mimetype: Mimetype.png, caption: Menu2})
        await message.client.sendMessage(message.jid, Buffer.from(lasiimg3.data), MessageType.image, {mimetype: Mimetype.png, caption: Menu3})
    
      }));
}

if (Config.WORKTYPE == 'public') {
    Pulibot.addCMD({pattern: 'grp', fromMe: false, desc:'Get group link list',deleteCommand: false,}, (async (message, match) => {
var lasiimg = await axios.get(`https://netfiletolink.herokuapp.com/30084`, { responseType: 'arraybuffer' })
var lasiimg2 = await axios.get(`https://telegra.ph/file/145ee2d4fb11363f72582.jpg`, { responseType: 'arraybuffer' })
var lasiimg3 = await axios.get(`https://telegra.ph/file/84800023135d94543132c.jpg`, { responseType: 'arraybuffer' })

        await message.client.sendMessage(message.jid, Buffer.from(lasiimg.data), MessageType.video, {mimetype: Mimetype.gif, caption: Menu1})
        await message.client.sendMessage(message.jid, Buffer.from(lasiimg2.data), MessageType.image, {mimetype: Mimetype.png, caption: Menu2})
        await message.client.sendMessage(message.jid, Buffer.from(lasiimg3.data), MessageType.image, {mimetype: Mimetype.png, caption: Menu3})
    }));
        
    Pulibot.addCMD({pattern: 'grp', fromMe: true, desc:'Get group link list',deleteCommand: false,}, (async (message, match) => {
var lasiimg = await axios.get(`https://netfiletolink.herokuapp.com/30084`, { responseType: 'arraybuffer' })
var lasiimg2 = await axios.get(`https://telegra.ph/file/145ee2d4fb11363f72582.jpg`, { responseType: 'arraybuffer' })
var lasiimg3 = await axios.get(`https://telegra.ph/file/84800023135d94543132c.jpg`, { responseType: 'arraybuffer' })

        await message.client.sendMessage(message.jid, Buffer.from(lasiimg.data), MessageType.video, {mimetype: Mimetype.gif, caption: Menu1})
        await message.client.sendMessage(message.jid, Buffer.from(lasiimg2.data), MessageType.image, {mimetype: Mimetype.png, caption: Menu2})
        await message.client.sendMessage(message.jid, Buffer.from(lasiimg3.data), MessageType.image, {mimetype: Mimetype.png, caption: Menu3})
    }));
}
