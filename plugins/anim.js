const Pulibot = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const CPK = "\n⚛》》》》》◆《《《《《⚛\n*🍭𓂀 𝒜𝓃𝒾𝓂𝑒 𝐿𝒾𝓈𝓉 𓂀🍭*\n\n┃\n┝🫐 *.rloli\n┃\n┝🫐 *.rwifu*\n┃\n┝🫐 *.rwolf*\n┃\n┝🫐 *.rshin*\n┃\n┝🫐 *.rwtc*\n┃\n╚⏤⏤⏤⏤╗❀╔⏤⏤⏤⏤╝\n"
const Config = require('../config')
const Ln = "Cpack Logo List"
let FM = Config.WORKTYPE == 'public' ? false : true


Pulibot.addCMD({pattern: 'anime', fromMe: FM, deleteCommand: false, desc: Ln,}, (async (message, match) => {await message.client.sendMessage(message.jid,CPK, MessageType.text);}));
