
const Pulibot = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const CPK = `
βββ β πβ€THE CPACKβ¦π β ββ
βββββββ βͺββ« βββββββ
ββ β*.cup*
βπ _.cup your text_
ββ β*.cmt*
βπ _.cmt your text_
ββ β*.cfl*
βπ _.cfl your text_
ββ β*.cmg*
βπ _.cmg your text_
ββ β*.cgl*
βπ _.cgl your text_
ββ β*.cstn*
βπ _.cstn your text_
ββ β*.crod*
βπ _.crod your text_
ββ β*.cgem*
βπ _.cgem your text_
ββ β*.cbery*
βπ _.cbery your text_
ββ β*.ctrn*
βπ _.ctrn your text_
β
β *Cpack V2.0*
ββ₯ *.cdem*
βπ _.cdem your text_
ββ₯ *.crob*
βπ _.crob your text_
ββ₯ *.cpink*
βπ _.cpink your text_
ββ₯ *.csl*
βπ _.csl your text_
ββ₯ *.csand*
βπ _.csand your text_
ββ₯ *.csun*
βπ _.csun your text_
ββ₯ *.cgrass*
βπ _.cgrass your text_
ββ₯ *.cchoco*
βπ _.cchoco your text_
β
ββ€β€β€β€ββββ€β€β€β€β`
const Config = require('../config')
const Ln = "Cpack Logo"
let FM = Config.WORKTYPE == 'public' ? false : true


Pulibot.addCMD({pattern: 'cpk', fromMe: FM, deleteCommand: false, desc: Ln,}, (async (message, match) => {await message.client.sendMessage(message.jid,CPK, MessageType.text);}));
