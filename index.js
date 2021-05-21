// SC NYA JANGAN DI JUAL NGENTOD
//MAKASIH DAH PAKE 
const
	{
		WAConnection,
		MessageType,
		Presence,
		MessageOptions,
		Mimetype,
		WALocationMessage,
		WA_MESSAGE_STUB_TYPES,
		WA_DEFAULT_EPHEMERAL,
		ReconnectMode,
		ProxyAgent,
		GroupSettingChange,
		waChatKey,
		mentionedJid,
		processTime,
	} = require("@adiwajshing/baileys")
const qrcode = require("qrcode-terminal")
const moment = require("moment-timezone")
const speed = require('performance-now')
const request = require('request');
const { spawn, exec, execSync } = require("child_process")
const fs = require("fs")
const axios = require("axios")
const ffmpeg = require('fluent-ffmpeg')
const { EmojiAPI } = require("emoji-api");
const tik = require('tiktok-scraper-without-watermark')
const ig = require('insta-fetcher')
const emoji = new EmojiAPI()
const fetch = require('node-fetch');
const Fb = require('fb-video-downloader');
const twitterGetUrl = require("twitter-url-direct")
const phoneNum = require('awesome-phonenumber')
const gis = require('g-i-s');
const got = require("got");
const imageToBase64 = require('image-to-base64');
const ID3Writer = require('browser-id3-writer');		
const brainly = require('brainly-scraper')
const yts = require( 'yt-search')
const ms = require('parse-ms')
const toMs = require('ms')
const { error } = require("qrcode-terminal")
const { getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close } = require('./lib/functions')
const { color, bgcolor } = require('./lib/color')
const { fetchJson, getBase64, kyun, createExif } = require('./lib/fetcher')
const { yta, ytv, igdl, upload } = require('./lib/ytdl')
const { webp2mp4File} = require('./lib/webp2mp4')
const time = moment().tz('Asia/Jakarta').format("HH:mm:ss")
const afk = JSON.parse(fs.readFileSync('./lib/off.json'))
const { sleep, isAfk, cekafk, addafk } = require('./lib/offline')
const imagenya = JSON.parse(fs.readFileSync('./media/image.json'))
const { recognize } = require('./lib/ocr')
const imgBB = require('imgbb-uploader')

banChats = true
offline = false
targetpc = '6285751056816'
owner = '6283803728334'
numbernye = '0'
waktu = '-'
alasan = '-'
apikeyrara = 'ItsMeRamra'
//=================================================//
module.exports = rara = async (rara, raa) => {
	try {
        if (!raa.hasNewMessage) return
        raa = raa.messages.all()[0]
		if (!raa.message) return
		if (raa.key && raa.key.remoteJid == 'status@broadcast') return
		global.blocked
        	raa.message = (Object.keys(raa.message)[0] === 'ephemeralMessage') ? raa.message.ephemeralMessage.message : raa.message
        	const content = JSON.stringify(raa.message)
		const from = raa.key.remoteJid
		const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
		const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
            const type = Object.keys(raa.message)[0]        
            const cmd = (type === 'conversation' && raa.message.conversation) ? raa.message.conversation : (type == 'imageMessage') && raa.message.imageMessage.caption ? raa.message.imageMessage.caption : (type == 'videoMessage') && raa.message.videoMessage.caption ? raa.message.videoMessage.caption : (type == 'extendedTextMessage') && raa.message.extendedTextMessage.text ? raa.message.extendedTextMessage.text : ''.slice(1).trim().split(/ +/).shift().toLowerCase()
            const prefix = /^[°•π÷×¶∆£¢€¥®™=|~!#$%^&.?/\\©^z+*@,;]/.test(cmd) ? cmd.match(/^[°•π÷×¶∆£¢€¥®™=|~!#$%^&.?/\\©^z+*,;]/gi) : '-'          	
        	body = (type === 'conversation' && raa.message.conversation.startsWith(prefix)) ? raa.message.conversation : (type == 'imageMessage') && raa.message.imageMessage.caption.startsWith(prefix) ? raa.message.imageMessage.caption : (type == 'videoMessage') && raa.message.videoMessage.caption.startsWith(prefix) ? raa.message.videoMessage.caption : (type == 'extendedTextMessage') && raa.message.extendedTextMessage.text.startsWith(prefix) ? raa.message.extendedTextMessage.text : ''
		budy = (type === 'conversation') ? raa.message.conversation : (type === 'extendedTextMessage') ? raa.message.extendedTextMessage.text : ''
		const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()		
		const args = body.trim().split(/ +/).slice(1)
		const isCmd = body.startsWith(prefix)
		const q = args.join(' ')
		const botNumber = rara.user.jid
		const botNumberss = rara.user.jid + '@c.us'
		const isGroup = from.endsWith('@g.us')
		let sender = isGroup ? raa.participant : raa.key.remoteJid
		// const isSelfNumber = config.NomorSELF
		// const isOwner = sender.id === isSelfNumber
		const totalchat = await rara.chats.all()
		const groupMetadata = isGroup ? await rara.groupMetadata(from) : ''
		const groupName = isGroup ? groupMetadata.subject : ''
		const groupId = isGroup ? groupMetadata.jid : ''
		const groupMembers = isGroup ? groupMetadata.participants : ''
		const groupDesc = isGroup ? groupMetadata.desc : ''
		const groupOwner = isGroup ? groupMetadata.owner : ''
		const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
		const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
		const isGroupAdmins = groupAdmins.includes(sender) || false
        const conts = raa.key.fromMe ? rara.user.jid : rara.contacts[sender] || { notify: jid.replace(/@.+/, '') }
        const pushname = raa.key.fromMe ? rara.user.name : conts.notify || conts.vname || conts.name || '-'
            const mentionByTag = type == "extendedTextMessage" && raa.message.extendedTextMessage.contextInfo != null ? raa.message.extendedTextMessage.contextInfo.mentionedJid : []
            const mentionByReply = type == "extendedTextMessage" && raa.message.extendedTextMessage.contextInfo != null ? raa.message.extendedTextMessage.contextInfo.participant || "" : ""
             const mention = typeof(mentionByTag) == 'string' ? [mentionByTag] : mentionByTag
            mention != undefined ? mention.push(mentionByReply) : []
            const mentionUser = mention != undefined ? mention.filter(n => n) : []
            fake = `[ ${pushname} ]\nramra.herokuapp.com\nApi Key : ItsMeRamra`



        //MESS
		mess = {
			wait: 'Wait Ok',
			success: 'Done!',
			wrongFormat: 'Format salah!!',
			error: {
				stick: 'bukan sticker itu',
				Iv: 'Linknya error'
			},
			only: {
				group: 'Only Group',
			}
		}
		const isUrl = (url) => {
        return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%.+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%+.~#?&/=]*)/, 'gi'))
        }

            const fakthumb = (teks, yeahh) => {
				rara.sendMessage(from, teks, image, {thumbnail:fs.readFileSync('./media/ward3.jpeg'), quoted: raa, caption: yeahh})
			}
        const reply = (teks) => {
            rara.sendMessage(from, teks, text, {quoted:raa})
        }

        const sendMess = (hehe, teks) => {
            rara.sendMessage(hehe, teks, text)
        }

        const mentions = (teks, memberr, id) => {
            (id == null || id == undefined || id == false) ? rara.sendMessage(from, teks.trim(), extendedText, { contextInfo: { "mentionedJid": memberr } }) : rara.sendMessage(from, teks.trim(), extendedText, { quoted: raa, contextInfo: { "mentionedJid": memberr } })
        }

        const fakestatus = (teks) => {
            rara.sendMessage(from, teks, text, {
                quoted: {
                    key: {
                        fromMe: false,
                        participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
                    },
                    message: {
                        "imageMessage": {
                            "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
                            "mimetype": "image/jpeg",
                            "caption": fake,
                            "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
                            "fileLength": "28777",
                            "height": 1080,
                            "width": 1079,
                            "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
                            "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
                            "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
                            "mediaKeyTimestamp": "1610993486",
                            "jpegThumbnail": fs.readFileSync('./media/ward.jpeg'),
                            "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
                        }
                    }
                }
            })
        }
        const fakethumb = (teks, yes) => {
            rara.sendMessage(from, teks, image, {thumbnail:fs.readFileSync('./stik/fake.jpeg'),quoted:raa,caption:yes})
        }
        const fakegroup = (teks) => {
            rara.sendMessage(from, teks, text, {
                quoted: {
                    key: {
                        fromMe: false,
                        participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6289523258649-1604595598@g.us" } : {})
                    },
                    message: {
                        "imageMessage": {
                            "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
                            "mimetype": "image/jpeg",
                            "caption": fake,
                            "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
                            "fileLength": "28777",
                            "height": 1080,
                            "width": 1079,
                            "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
                            "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
                            "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
                            "mediaKeyTimestamp": "1610993486",
                            "jpegThumbnail": fs.readFileSync('./media/ward.jpeg'),
                            "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
                        }
                    }
                }
            })
        }
  const fakegroup2 = (teks) => {
			rara.sendMessage(from, teks, text, {
				quoted: {
					key: {
						fromMe: false,
						participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6281226770537-1604595598@g.us" } : {})
					},
					message: {
						conversation: fake
					}
				}
			})
		}
 const ftoko = {
 key: {
			fromMe: false,
			participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
		},
		message: {
			"productMessage": {
				"product": {
					"productImage":{
						"mimetype": "image/jpeg",
						"jpegThumbnail": fs.readFileSync(`./media/ward.jpeg`)
					},
					"title": fake,
					"description": "rara",
					"currencyCode": "USD",
					"priceAmount1000": "99999999",
					"retailerId": "Self Bot",
					"productImageCount": 1
				},
				"businessOwnerJid": `0@s.whatsapp.net`
		}
	}
 }
        const sendStickerFromUrl = async(to, url) => {
                var names = Date.now() / 10000;
                var download = function (uri, filename, callback) {
                    request.head(uri, function (err, res, body) {
                        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                    });
                };
                download(url, './stik' + names + '.png', async function () {
                    console.log('selesai');
                    let filess = './stik' + names + '.png'
                    let asw = './stik' + names + '.webp'
                    exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`, (err) => {
                        let media = fs.readFileSync(asw)
                        rara.sendMessage(to, media, MessageType.sticker,{quoted:raa})
                        fs.unlinkSync(filess)
                        fs.unlinkSync(asw)
                    });
                });
            }
        const sendMediaURL = async(to, url, text="", mids=[]) =>{
                if(mids.length > 0){
                    text = normalizeMention(to, text, mids)
                }
                const fn = Date.now() / 10000;
                const filename = fn.toString()
                let mime = ""
                var download = function (uri, filename, callback) {
                    request.head(uri, function (err, res, body) {
                        mime = res.headers['content-type']
                        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                    });
                };
                download(url, filename, async function () {
                    console.log('done');
                    let media = fs.readFileSync(filename)
                    let type = mime.split("/")[0]+"Message"
                    if(mime === "image/gif"){
                        type = MessageType.video
                        mime = Mimetype.gif
                    }
                    if(mime.split("/")[0] === "audio"){
                        mime = Mimetype.mp4Audio
                    }
                    rara.sendMessage(to, media, type, { quoted: raa, mimetype: mime, caption: text,contextInfo: {"mentionedJid": mids}})
                    
                    fs.unlinkSync(filename)
                });
            }   
//FUNCTION
            cekafk(afk)
            if (!raa.key.remoteJid.endsWith('@g.us') && offline){
            if (!raa.key.fromMe){
            if (isAfk(raa.key.remoteJid)) return
            addafk(raa.key.remoteJid)
            heheh = ms(Date.now() - waktu) 
            rara.sendMessage(raa.key.remoteJid,`@${owner} Sedang Offline!\n\n*Alasan :* ${alasan}\n*Sejak :* ${heheh.hours} Jam, ${heheh.minutes} Menit, ${heheh.seconds} Detik lalu\n\nSilahkan Hubungi Lagi Nanti`, MessageType.text,{contextInfo:{ mentionedJid: [`${owner}@s.whatsapp.net`],'stanzaId': "B826873620DD5947E683E3ABE663F263", 'participant': "0@s.whatsapp.net", 'remoteJid': 'status@broadcast', 'quotedMessage': {"imageMessage": {"caption": "*OFFLINE*", 'jpegThumbnail': fs.readFileSync('./stik/thumb.jpeg')}}}})
            }
            }   
        if (raa.key.remoteJid.endsWith('@g.us') && offline) {
        if (!raa.key.fromMe){
        if (raa.message.extendedTextMessage != undefined){
        if (raa.message.extendedTextMessage.contextInfo != undefined){
        if (raa.message.extendedTextMessage.contextInfo.mentionedJid != undefined){
        for (let ment of raa.message.extendedTextMessage.contextInfo.mentionedJid) {
        if (ment === `${owner}@s.whatsapp.net`){
        if (isAfk(raa.key.remoteJid)) return
        addafk(raa.key.remoteJid)
        heheh = ms(Date.now() - waktu)
        rara.sendMessage(raa.key.remoteJid,`@${owner} Sedang Offline!\n\n *Alasan :* ${alasan}\n *Sejak :* ${heheh.hours} Jam, ${heheh.minutes} Menit, ${heheh.seconds} Detik lalu\n\nSilahkan Hubungi Lagi Nanti`, MessageType.text,{contextInfo:{ mentionedJid: [`${owner}@s.whatsapp.net`],'stanzaId': "B826873620DD5947E683E3ABE663F263", 'participant': "0@s.whatsapp.net", 'remoteJid': 'status@broadcast', 'quotedMessage': {"imageMessage": {"caption": "*OFFLINE*", 'jpegThumbnail': fs.readFileSync('./stik/thumb.jpeg')}}}})
          }
        }
            }
          }
        }
      }
    }
//========================================================================================================================//
		colors = ['red', 'white', 'black', 'blue', 'yellow', 'green']
		const isMedia = (type === 'imageMessage' || type === 'videoMessage')
		const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
		const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
		const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
		const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
      	if (!isGroup && isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
      	//if (!isGroup && !isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mTEXT\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
     	if (isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
      	//if (!isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mTEXT\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
		if (!raa.key.fromMe && banChats === true) return

switch (command) {
    case 'menu':
    case 'help':
    	var menu = `
 ❏ [ Rara Afrianty ] ❏

 ❏ YOUR INFO ❏
❏ Nama : ${pushname}
❏ Prefix : 「${prefix}」

 ❏ MY IMGBB 
 https://raraafrianty.imgbb.com
 ❏ MY REST API 
 https://ramra.herokuapp.com/api 
 ❏ MY GITHUB  
 https://github.com/LoliKillers

 ❏ ABOUT ME ❏
❏ ${prefix}tes
❏ ${prefix}status
❏ ${prefix}ping
❏ ${prefix}join
❏ ${prefix}runtime

 ❏ OWNER MENU ❏
❏ ${prefix}self
❏ ${prefix}public
❏ ${prefix}run
❏ ${prefix}exec
❏ ${prefix}return
❏ ${prefix}on
❏ ${prefix}off
❏ ${prefix}setreply
❏ ${prefix}setfakeimg
❏ ${prefix}setthumb
❏ ${prefix}setpp

 ❏ GROUP MENU ❏
❏ ${prefix}group close/open
❏ ${prefix}group closetime
❏ ${prefix}group opentime
❏ ${prefix}promote
❏ ${prefix}demote
❏ ${prefix}kick

 ❏ MEDIA MENU ❏
❏ ${prefix}ytsearch
❏ ${prefix}ytsearch2
❏ ${prefix}play
❏ ${prefix}playmp4
❏ ${prefix}ytmp3
❏ ${prefix}ytmp32
❏ ${prefix}ytmp4
❏ ${prefix}ytmp42
❏ ${prefix}igstalk
❏ ${prefix}githubstalk
❏ ${prefix}twitstalk
❏ ${prefix}fbdl

 ❏ ANIME/MANGA MENU ❏
❏ ${prefix}kusonime
❏ ${prefix}manga
❏ ${prefix}waifu
❏ ${prefix}neko
❏ ${prefix}samehadaku
❏ ${prefix}neonimesearch
❏ ${prefix}neonimelast

 ❏ MAKER MENU ❏
❏ ${prefix}sticker
❏ ${prefix}stickergif
❏ ${prefix}toimg

 ❏ PHOTO OXY MENU ❏
❏ ${prefix}orchids
❏ ${prefix}petterns
❏ ${prefix}sweetcandy
❏ ${prefix}smoke
❏ ${prefix}woodblock
❏ ${prefix}cemetery
❏ ${prefix}luxury
❏ ${prefix}harrypotter
❏ ${prefix}wooden
❏ ${prefix}butterfly
❏ ${prefix}watermelon
❏ ${prefix}striking
❏ ${prefix}metalic
❏ ${prefix}embroidery
❏ ${prefix}chrome
❏ ${prefix}generator
❏ ${prefix}flaming
❏ ${prefix}textstar
❏ ${prefix}gradient
❏ ${prefix}glowrainbow

 ❏ OTHER MENU ❏
❏ ${prefix}tourl
❏ ${prefix}tovn
❏ ${prefix}source

❏ *RARA* ❏`
        	fakestatus(menu)
        	break
        	case 'gradient':
                    if (args.length == 0) return reply(`Example: ${prefix + command} Rara Afrianty`)
                    ini_txt = args.join(" ")
                    get_result = await fetchJson(`https://ramra.herokuapp.com/api/textmaker2/gradient?text=${ini_txt}&apikey=${apikeyrara}`)
                    fakegroup2(`_Wait!_`)
                    ini_img = await getBuffer(get_result.result.url)
                    fakthumb(ini_img, `Nih!!`)
                    break
        	case 'glowrainbow':
                    if (args.length == 0) return reply(`Example: ${prefix + command} Rara Afrianty`)
                    ini_txt = args.join(" ")
                    get_result = await fetchJson(`https://ramra.herokuapp.com/api/textmaker2/glowrainbow?text=${ini_txt}&apikey=${apikeyrara}`)
                    fakegroup2(`_Wait!_`)
                    ini_img = await getBuffer(get_result.result.url)
                    fakthumb(ini_img, `Nih!!`)
                    break
        	case 'textstar':
                    if (args.length == 0) return reply(`Example: ${prefix + command} Rara Afrianty`)
                    ini_txt = args.join(" ")
                    get_result = await fetchJson(`https://ramra.herokuapp.com/api/textmaker2/textstar?text=${ini_txt}&apikey=${apikeyrara}`)
                    fakegroup2(`_Wait!_`)
                    ini_img = await getBuffer(get_result.result.url)
                    fakthumb(ini_img, `Nih!!`)
                    break
        	case 'generator':
                    if (args.length == 0) return reply(`Example: ${prefix + command} Rara Afrianty`)
                    ini_txt = args.join(" ")
                    get_result = await fetchJson(`https://ramra.herokuapp.com/api/textmaker2/generator?text=${ini_txt}&apikey=${apikeyrara}`)
                    fakegroup2(`_Wait!_`)
                    ini_img = await getBuffer(get_result.result.url)
                    fakthumb(ini_img, `Nih!!`)
                    break
        	case 'flaming':
                    if (args.length == 0) return reply(`Example: ${prefix + command} Rara Afrianty`)
                    ini_txt = args.join(" ")
                    get_result = await fetchJson(`https://ramra.herokuapp.com/api/textmaker2/flaming?text=${ini_txt}&apikey=${apikeyrara}`)
                    fakegroup2(`_Wait!_`)
                    ini_img = await getBuffer(get_result.result.url)
                    fakthumb(ini_img, `Nih!!`)
                    break
        	case 'chrome':
                    if (args.length == 0) return reply(`Example: ${prefix + command} Rara Afrianty`)
                    ini_txt = args.join(" ")
                    get_result = await fetchJson(`https://ramra.herokuapp.com/api/textmaker2/chrome?text=${ini_txt}&apikey=${apikeyrara}`)
                    fakegroup2(`_Wait!_`)
                    ini_img = await getBuffer(get_result.result.url)
                    fakthumb(ini_img, `Nih!!`)
                    break
        	case 'embroidery':
                    if (args.length == 0) return reply(`Example: ${prefix + command} Rara Afrianty`)
                    ini_txt = args.join(" ")
                    get_result = await fetchJson(`https://ramra.herokuapp.com/api/textmaker2/embroidery?text=${ini_txt}&apikey=${apikeyrara}`)
                    fakegroup2(`_Wait!_`)
                    ini_img = await getBuffer(get_result.result.url)
                    fakthumb(ini_img, `Nih!!`)
                    break
        	case 'metalic':
                    if (args.length == 0) return reply(`Example: ${prefix + command} Rara Afrianty`)
                    ini_txt = args.join(" ")
                    get_result = await fetchJson(`https://ramra.herokuapp.com/api/textmaker3/metalic?text=${ini_txt}&apikey=${apikeyrara}`)
                    fakegroup2(`_Wait!_`)
                    ini_img = await getBuffer(get_result.result.url)
                    fakthumb(ini_img, `Nih!!`)
                    break
        	case 'striking':
                    if (args.length == 0) return reply(`Example: ${prefix + command} Rara Afrianty`)
                    ini_txt = args.join(" ")
                    get_result = await fetchJson(`https://ramra.herokuapp.com/api/textmaker3/striking?text=${ini_txt}&apikey=${apikeyrara}`)
                    fakegroup2(`_Wait!_`)
                    ini_img = await getBuffer(get_result.result.url)
                    fakthumb(ini_img, `Nih!!`)
                    break
        	case 'watermelon':
                    if (args.length == 0) return reply(`Example: ${prefix + command} Rara Afrianty`)
                    ini_txt = args.join(" ")
                    get_result = await fetchJson(`https://ramra.herokuapp.com/api/textmaker3/watermelon?text=${ini_txt}&apikey=${apikeyrara}`)
                    fakegroup2(`_Wait!_`)
                    ini_img = await getBuffer(get_result.result.url)
                    fakthumb(ini_img, `Nih!!`)
                    break
        	case 'butterfly':
                    if (args.length == 0) return reply(`Example: ${prefix + command} Rara Afrianty`)
                    ini_txt = args.join(" ")
                    get_result = await fetchJson(`https://ramra.herokuapp.com/api/textmaker3/butterfly?text=${ini_txt}&apikey=${apikeyrara}`)
                    fakegroup2(`_Wait!_`)
                    ini_img = await getBuffer(get_result.result.url)
                    fakthumb(ini_img, `Nih!!`)
                    break
        	case 'wooden':
                    if (args.length == 0) return reply(`Example: ${prefix + command} Rara Afrianty`)
                    ini_txt = args.join(" ")
                    get_result = await fetchJson(`https://ramra.herokuapp.com/api/textmaker3/wooden?text=${ini_txt}&apikey=${apikeyrara}`)
                    fakegroup2(`_Wait!_`)
                    ini_img = await getBuffer(get_result.result.url)
                    fakthumb(ini_img, `Nih!!`)
                    break
        	case 'harrypotter':
                    if (args.length == 0) return reply(`Example: ${prefix + command} Rara Afrianty`)
                    ini_txt = args.join(" ")
                    get_result = await fetchJson(`https://ramra.herokuapp.com/api/textmaker3/harrypotter?text=${ini_txt}&apikey=${apikeyrara}`)
                    fakegroup2(`_Wait!_`)
                    ini_img = await getBuffer(get_result.result.url)
                    fakthumb(ini_img, `Nih!!`)
                    break
        	case 'luxury':
                    if (args.length == 0) return reply(`Example: ${prefix + command} Rara Afrianty`)
                    ini_txt = args.join(" ")
                    get_result = await fetchJson(`https://ramra.herokuapp.com/api/textmaker3/luxury?text=${ini_txt}&apikey=${apikeyrara}`)
                    fakegroup2(`_Wait!_`)
                    ini_img = await getBuffer(get_result.result.url)
                    fakthumb(ini_img, `Nih!!`)
                    break
        	case 'cemetery':
                    if (args.length == 0) return reply(`Example: ${prefix + command} Rara Afrianty`)
                    ini_txt = args.join(" ")
                    get_result = await fetchJson(`https://ramra.herokuapp.com/api/textmaker3/cemetery?text=${ini_txt}&apikey=${apikeyrara}`)
                    fakegroup2(`_Wait!_`)
                    ini_img = await getBuffer(get_result.result.url)
                    fakthumb(ini_img, `Nih!!`)
                    break
        	case 'woodblock':
                    if (args.length == 0) return reply(`Example: ${prefix + command} Rara Afrianty`)
                    ini_txt = args.join(" ")
                    get_result = await fetchJson(`https://ramra.herokuapp.com/api/textmaker3/woodblock?text=${ini_txt}&apikey=${apikeyrara}`)
                    fakegroup2(`_Wait!_`)
                    ini_img = await getBuffer(get_result.result.url)
                    fakthumb(ini_img, `Nih!!`)
                    break
        	case 'smoke':
                    if (args.length == 0) return reply(`Example: ${prefix + command} Rara Afrianty`)
                    ini_txt = args.join(" ")
                    get_result = await fetchJson(`https://ramra.herokuapp.com/api/textmaker3/smoke?text=${ini_txt}&apikey=${apikeyrara}`)
                    fakegroup2(`_Wait!_`)
                    ini_img = await getBuffer(get_result.result.url)
                    fakthumb(ini_img, `Nih!!`)
                    break
        	case 'sweetcandy':
                    if (args.length == 0) return reply(`Example: ${prefix + command} Rara Afrianty`)
                    ini_txt = args.join(" ")
                    get_result = await fetchJson(`https://ramra.herokuapp.com/api/textmaker3/sweetcandy?text=${ini_txt}&apikey=${apikeyrara}`)
                    fakegroup2(`_Wait!_`)
                    ini_img = await getBuffer(get_result.result.url)
                    fakthumb(ini_img, `Nih!!`)
                    break
        	case 'petterns':
                    if (args.length == 0) return reply(`Example: ${prefix + command} Rara Afrianty`)
                    ini_txt = args.join(" ")
                    get_result = await fetchJson(`https://ramra.herokuapp.com/api/textmaker3/petterns?text=${ini_txt}&apikey=${apikeyrara}`)
                    fakegroup2(`_Wait!_`)
                    ini_img = await getBuffer(get_result.result.url)
                    fakthumb(ini_img, `Nih!!`)
                    break
        	case 'orchids':
                    if (args.length == 0) return reply(`Example: ${prefix + command} Rara Afrianty`)
                    ini_txt = args.join(" ")
                    get_result = await fetchJson(`https://ramra.herokuapp.com/api/textmaker3/orchids?text=${ini_txt}&apikey=${apikeyrara}`)
                    fakegroup2(`_Wait!_`)
                    ini_img = await getBuffer(get_result.result.url)
                    fakthumb(ini_img, `Nih!!`)
                    break

				case 'setpp':
	                if (!raa.key.fromMe) return reply(mess.only.admin)
				    rara.updatePresence(from, Presence.composing) 
					if (!isQuotedImage) return reply(`Kirim gambar dengan caption ${prefix}setpp atau tag gambar yang sudah dikirim`)
					enmedia = JSON.parse(JSON.stringify(raa).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await rara.downloadAndSaveMediaMessage(enmedia)
					await rara.updateProfilePicture(botNumber, media)
					fakegroup2('Success mengganti photo profile')
					break
    case 'tovn': 
		 	  if ((isMedia && !raa.message.videoMessage || isQuotedImage) && args.length == 0) {
			  const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(raa).replace('quotedM','m')).message.extendedTextMessage.contextInfo : raa
		 	  const media = await rara.downloadAndSaveMediaMessage(encmedia)
			  rara.sendMessage(from, '[?]', text, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "liveLocationMessage": { "caption": `*Tunggu Ya Om*`} } }, contextInfo: {forwardingScore: 508, isForwarded: true} })
			  await recognize(media, {lang: 'eng+ind', oem: 1, psm: 3})
			  .then(teks => {								 
		  	  fs.unlinkSync(media)							                           
              rara.updatePresence(from, Presence.recording) 
              const gtts = require('./lib/gtts')("id")
              const ndakbisa = `${teks}`             
              ranm = getRandom('.mp3')
              ndakbisa.length > 600
              ? reply('Textnya kebanyakan om')
              : gtts.save(ranm, ndakbisa, function() {
              rara.sendMessage(from, fs.readFileSync(ranm), audio, {mimetype: 'audio/mp4', ptt:true, quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "liveLocationMessage": { "caption": `Nih Om Udah Jadi`} } }, contextInfo: {forwardingScore: 508, isForwarded: true} })
              fs.unlinkSync(ranm)
              })
              })}	
              break        
             case 'neonimesearch' :
            if (args.length == 0) return reply(`Example: ${prefix}ytsearch hanbunko hanabi kotori remix`)
            fakegroup2('Wait!')
            query = args.join(" ")
            ini_result = await fetchJson(`https://ramra.herokuapp.com/api/neonime/search?apikey=${apikeyrara}`)
            for (var x of ini_result.result.result) {
				ini_txt = `❏ *Judul :* ${x.title}\n`
                ini_txt += `❏ *Link :* ${x.url}\n`
                ini_txt += `❏ *Thumbnail :* ${x.thumb}\n`
                ini_txt += `❏ *Description :* ${x.desc}\n\n`
			}
 			fakegroup2(ini_txt)
           case 'neonimelast' :
            fakegroup2('Wait!')
            ini_result = await fetchJson(`https://ramra.herokuapp.com/api/neonime/lastest?apikey=${apikeyrara}`)
            for (var x of ini_result.result) {
				ini_txt = `❏ *Judul :* ${x.judul}\n`
                ini_txt += `❏ *Link :* ${x.link}\n`
                ini_txt += `❏ *Thumbnail :* ${x.img}\n`
                ini_txt += `❏ *Rilis :* ${x.rilis}\n\n`
			}
 			fakegroup2(ini_txt)
			break
            case 'samehadaku' :
            if (args.length == 0) return reply(`Example: ${prefix}ytsearch hanbunko hanabi kotori remix`)
            fakegroup2('Wait!')
            query = args.join(" ")
            ini_result = await fetchJson(`https://ramra.herokuapp.com/api/anime/samehadaku?search=${query}&apikey=${apikeyrara}`)
            get_result = ini_result.result
            ini_buffer = await getBuffer(get_result.thumb)
            ini_txt = `❏ *Title :* ${get_result.title}\n`
            ini_txt += `❏ *link :* ${get_result.link}\n`
            ini_txt += `❏ *desc :* ${get_result.desc}\n`
 			fakthumb(ini_buffer, ini_txt)
			break
            case 'neko' :
            fakegroup2('Wait!')
            ini_result = await fetchJson(`https://ramra.herokuapp.com/api/anime/nekonime?apikey=${apikeyrara}`)
            ini_buffer = await getBuffer(ini_result.result.result)
            fakthumb(ini_buffer, `Nih`)
			break
            case 'waifu' :
            fakegroup2('Wait!')
            ini_result = await fetchJson(`https://ramra.herokuapp.com/api/anime/waifu?apikey=${apikeyrara}`)
            get_result = ini_result.result
            ini_buffer = await getBuffer(get_result.image)
            ini_txt = `❏ *Name :* ${get_result.name}\n`
            ini_txt += `❏ *Description :* ${get_result.desc}\n`
			fakthumb(ini_buffer, ini_txt)
			break
            case 'manga' :
            if (args.length == 0) return reply(`Example: ${prefix}ytsearch hanbunko hanabi kotori remix`)
            fakegroup2('Wait!')
            query = args.join(" ")
            ini_result = await fetchJson(`https://ramra.herokuapp.com/api/manga?search=${query}&apikey=${apikeyrara}`)
            get_result = ini_result.result
            ini_txt = `❏ *Title :* ${get_result.title}\n`
            ini_txt += `❏ *Name :* ${get_result.name}\n`
            ini_txt += `❏ *Type :* ${get_result.type}\n`
            ini_txt += `❏ *Author :* ${get_result.author}\n`
            ini_txt += `❏ *Genre :* ${get_result.genre}\n`
            ini_txt += `❏ *Rating :* ${get_result.rating}\n`
            ini_txt += `❏ *Released :* ${get_result.released}\n`
            ini_txt += `❏ *Status :* ${get_result.status}\n`
			ini_txt += `❏ *Description :* ${get_result.description}\n\n\n`
			for (var y of get_result.downloads) {
		        ini_txt += `❏ *Manga :* ${y.date}\n`
				ini_txt += `❏ *Downloader :* ${y.title}\n`
				ini_txt += `❏ *Link :* ${y.link}\n`
				ini_txt += `\n--------------------------\n`
				
			}
			fakegroup2(ini_txt)
			break
            case 'kusonime' :
            if (args.length == 0) return reply(`Example: ${prefix}ytsearch hanbunko hanabi kotori remix`)
            fakegroup2('Wait!')
            query = args.join(" ")
            ini_result = await fetchJson(`https://ramra.herokuapp.com/api/anime/kusonime?search=${query}&apikey=${apikeyrara}`)
            get_result = ini_result.result
            ini_buffer = await getBuffer(get_result.thumbs)
            ini_txt = `❏ *Title :* ${get_result.title}\n`
            ini_txt += `❏ *Title Jp :* ${get_result.title_jp}\n`
            ini_txt += `❏ *Genre :* ${get_result.genre}\n`
            ini_txt += `❏ *Season :* ${get_result.season}\n`
            ini_txt += `❏ *Producer :* ${get_result.producer}\n`
            ini_txt += `❏ *Type :* ${get_result.type}\n`
            ini_txt += `❏ *Status :* ${get_result.status}\n`
            ini_txt += `❏ *Total Episode :* ${get_result.total_episode}\n`
            ini_txt += `❏ *Score :* ${get_result.score}\n`
            ini_txt += `❏ *Type :* ${get_result.type}\n`
            ini_txt += `❏ *Duration :* ${get_result.duration}\n`
            ini_txt += `❏ *Release :* ${get_result.released_on}\n`
            ini_txt += `❏ *Description :* ${get_result.description}\n\n`
            for (var x of get_result.download) {
				ini_txt += `❏ *Resolution :* ${x.resolution}\n\n`
				for (var y of x.download_list) {
					ini_txt += ` ❏ *Downloader :* ${y.downloader}\n`
					ini_txt += ` ❏ *Link :* ${y.download_link}\n`
					ini_txt += `\n--------------------------\n`
				}
			}
			fakthumb(ini_buffer, ini_txt)
			break
			case 'kick' :
			if (!raa.key.fromMe) return
			try {
				rara.groupRemove(from, mentionUser)
				fakegroup2(`Success kick ${pushname}`)
			} catch (e) {
				console.log('Error :', e)
				fakegroup2(`Failed kicked ${pushname}`)
			}
        	break
			case 'demote' :
			case 'dm' :
			if (!raa.key.fromMe) return
			try {
				rara.groupDemoteAdmin(from, mentionUser)
				fakegroup2('Success Demote')
			} catch (e) {
				console.log('Error :', e)
				fakegroup2('Failed Demote')
			}
			break
			case 'promote' :
			case 'pm' :
			if (!raa.key.fromMe) return
			try {
				rara.groupMakeAdmin(from, mentionUser)
				fakegroup2('Success Promote')
			} catch (e) {
				console.log('Error :', e)
				fakegroup2('Failed Promote')
			}
			break
			case 'closetime' :
			case 'closetime' :
			if (!raa.key.fromMe) return
			rara.updatePresence(from, Presence.composing)
			if (args[1]=="detik") {var timer = args[0]+"000"
			} else if (args[1]=="menit") {var timer = args[0]+"0000"
			} else if (args[1]=="jam") {var timer = args[0]+"00000"
			} else {return reply(`*Cose :*\ns = second\nm = minute\nh = hour\n\n*Example :*\n*Example :*\n${prefix}closetime 5 s`)}
			fakegroup2(`${args} lagi group di tutup!`)
			setTimeout( () => {
				var nomor = raa.participant
				rara.groupSettingChange(from, GroupSettingChange.messageSend, true);
				rara.sendMessage(from, `Success Close Group\n${groupMetadata.subject}`, text,{contextInfo: {forwardingScore: 508, isForwarded: true}, quoted : raa})
			}, timer)
			break
			case 'opentime' :
			if (!raa.key.fromMe) return
			rara.updatePresence(from, Presence.composing)
			if (args[1]=="detik") {var timer = args[0]+"000"
			} else if (args[1]=="menit") {var timer = args[0]+"0000"
			} else if (args[1]=="jam") {var timer = args[0]+"00000"
			} else {return reply(`*Cose :*\ns = second\nm = minute\nh = hour\n\n*Example :*\n*Example :*\n${prefix}opentime 5 s`)}
			fakegroup2(`${args} lagi group di buka!`)
			setTimeout( () => {
				var nomor = raa.participant
				rara.groupSettingChange(from, GroupSettingChange.messageSend, false);
				rara.sendMessage(from, `Success Open Group\n${groupMetadata.subject}`, text,{contextInfo: {forwardingScore: 508, isForwarded: true}, quoted : raa})
			}, timer)
			break
			case 'group' :
			if (!raa.key.fromMe) return
			if (args[0] === 'open' ) {
				reply(`Success Open Group\n*${groupMetadata.subject}*`)
				rara.groupSettingChange(from, GroupSettingChange.messageSend, false)
			} else if (args[0] === 'close' ) {
				reply(`Success Close Group\n*${groupMetadata.subject}*`)
				rara.groupSettingChange(from, GroupSettingChange.messageSend, true)
			}
			break
			case 'fbdl' :
			if (args.length == 0) return reply(`Example: ${prefix}fbdl https://www.facebook.com/197394889304/posts/10160272795609305/?app=fbl`)
			ini_url = args[0]
			fakegroup('Wait!')
            ini_url = await fetchJson(`https://ramra.herokuapp.com/api/fbdown/?url=${ini_url}&apikey=${apikeyrara}`)
            ini_txt = `Caution : ${ini_url.result.message}\n`
            reply(ini_txt)
			ini_url = ini_url.result.url
			ini_buffer = await getBuffer(ini_url)
			await rara.sendMessage(from, ini_buffer, video,{quoted: raa})
			break
			case 'twitstalk' :
			if (args.length == 0) return reply(`Example: ${prefix}igstalk grcjessicajane`)
			username = args[0]
			fakegroup('Wait!')
            inii_result = await fetchJson(`https://ramra.herokuapp.com/api/twitter/stalk?username=${username}&apikey=${apikeyrara}`)
			ini_result = inii_result.result
			ini_buffer = await getBuffer(ini_result.thumbnail)
			ini_txt = `*Api :* ${ini_result.creator}\n`
			ini_txt += `*Username :* ${ini_result.username}\n`
			ini_txt += `*Full Name :* ${ini_result.fullname}\n`
			ini_txt += `*Tweets :* ${ini_result.tweets}\n`
			ini_txt += `*Followers :* ${ini_result.followers}\n`
			ini_txt += `*Following :* ${ini_result.following}\n`
			ini_txt += `*Joined :* ${ini_result.joined}`
			fakethumb(ini_buffer, ini_txt)
           	break
			case 'githubstalk' :
			if (args.length == 0) return reply(`Example: ${prefix}igstalk jessicajane99`)
			username = args[0]
			fakegroup('Wait!')
            inii_result = await fetchJson(`https://ramra.herokuapp.com/api/github/stalk?username=${username}&apikey=${apikeyrara}`)
			ini_result = inii_result.result
			ini_buffer = await getBuffer(ini_result.profile_pic)
			ini_txt = `*Api :* ${ini_result.creathor}\n`
			ini_txt += `*Username :* ${ini_result.username}\n`
			ini_txt += `*Full Name :* ${ini_result.fullname}\n`
			ini_txt += `*Id :* ${ini_result.id}\n`
			ini_txt += `*Company :* ${ini_result.company}\n`
			ini_txt += `*Bio :* ${ini_result.bio}\n`
			ini_txt += `*Hireable :* ${ini_result.hireable}\n`
			ini_txt += `*Followers :* ${ini_result.followers}\n`
			ini_txt += `*Following :* ${ini_result.following}\n`
			ini_txt += `*Location :* ${ini_result.location}\n`
			ini_txt += `*Email :* ${ini_result.email}\n`
			ini_txt += `*Repository :* ${ini_result.public_repo}\n`
			ini_txt += `*Gists :* ${ini_result.gists}\n`
			ini_txt += `*Joined :* ${ini_result.join}\n`
			ini_txt += `*Update :* ${ini_result.last_update}\n`
			ini_txt += `*Link :* ${ini_result.url_profile}\n`
			fakethumb(ini_buffer, ini_txt)
			break
			case 'igstalk' :
			if (args.length == 0) return reply(`Example: ${prefix}igstalk jessicajane99`)
			username = args[0]
			fakegroup('Wait!')
            inii_result = await fetchJson(`https://ramra.herokuapp.com/api/instagram/stalk?username=${username}&apikey=${apikeyrara}`)
			ini_result = inii_result.result
			ini_buffer = await getBuffer(ini_result.Profile_pic)
			ini_txt = `*Api :* ${inii_result.author}\n`
			ini_txt += `*Username :* ${ini_result.Username}\n`
			ini_txt += `*Full Name :* ${ini_result.Name}\n`
			ini_txt += `*Posts :* ${ini_result.Jumlah_Post}\n`
			ini_txt += `*Followers :* ${ini_result.Jumlah_Followers}\n`
			ini_txt += `*Following :* ${ini_result.Jumlah_Following}\n`
			ini_txt += `*Bio :* ${ini_result.Biodata}`
			fakethumb(ini_buffer, ini_txt)
			break
    case 'tourl':
            if ((isMedia && !raa.message.videoMessage || isQuotedImage || isQuotedVideo ) && args.length == 0) {
            boij = isQuotedImage || isQuotedVideo ? JSON.parse(JSON.stringify(raa).replace('quotedM','m')).message.extendedTextMessage.contextInfo : raa
            owgi = await rara.downloadMediaMessage(boij)
            res = await upload(owgi)
            reply(res)
            } else {
            reply('kirim/reply gambar/video')
            }
            break	
    case 'runtime':
            run = process.uptime() 
            teks = `${kyun(run)}`
            fakegroup2(teks)
            break  
    case 'join':
            try {
            if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return reply(mess.Iv)
            hen = args[0]
            if (!q) return fakestatus('Masukan link group')
            var codeInvite = hen.split('https://chat.whatsapp.com/')[1]
            if (!codeInvite) return fakegroup ('pastikan link sudah benar!')
            var response = await rara.acceptInvite(codeInvite)
            fakestatus('SUKSES')
            } catch {
            fakegroup('LINK ERROR!')
            }
            break
            case 'setfakeimg':
            if (!raa.key.fromMe) return
            if (!isQuotedImage) return fakegroup('Reply image!')
            fimek = body.slice(8)
            fimek2 = JSON.parse(JSON.stringify(raa).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
            fimek3 = await rara.downloadMediaMessage(fimek2)
            imagenya.push(`${fimek}`)
            fs.writeFileSync(`./media/ward3.jpeg`, fimek3)
            fs.writeFileSync('./media/imeeg.json', JSON.stringify(imagenya))
            fimek4 = 'Succes Change Image'
            rara.sendMessage(from, fimek4, MessageType.text,{quoted: ftoko})
            break
            case 'setthumb':
            if (!raa.key.fromMe) return
            if (!isQuotedImage) return fakegroup('Reply image!')
            tumb = body.slice(8)
            tumb2 = JSON.parse(JSON.stringify(raa).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
            tumb3 = await rara.downloadMediaMessage(tumb2)
            imagenya.push(`${tumb}`)
            fs.writeFileSync(`./media/ward.jpeg`, tumb3)
            fs.writeFileSync('./media/img.json', JSON.stringify(imagenya))
            tumb4 = 'Succes Change Thumbnail'
            rara.sendMessage(from, tumb4, MessageType.text,{quoted: raa})
            break
	case 'setreply':
	case 'setfake':
	if (!raa.key.fromMe) return
			if (!q) return fakegroup(mess.wrongFormat)
			fake = q
			fakegroup(`Succes Mengganti Conversation Fake : ${q}`)
			break
    case 'toimg':
			if (!isQuotedSticker) return reply('𝗥𝗲𝗽𝗹𝘆/𝘁𝗮𝗴 𝘀𝘁𝗶𝗰𝗸𝗲𝗿 !')
			reply(mess.wait)
			encmedia = JSON.parse(JSON.stringify(raa).replace('quotedM','m')).message.extendedTextMessage.contextInfo
			media = await rara.downloadAndSaveMediaMessage(encmedia)
			ran = getRandom('.png')
			exec(`ffmpeg -i ${media} ${ran}`, (err) => {
			fs.unlinkSync(media)
			if (err) return reply('Yah gagal, coba ulangi ^_^')
			buffer = fs.readFileSync(ran)
			fakethumb(buffer,'<//>')
			fs.unlinkSync(ran)
			})
			break
    case 'sticker': 
    case 'stikergif': 
    case 'stickergif':
    case 'sgif':
    case 'stiker':
    case 'sg':
    case 's':
            if ((isMedia && !raa.message.videoMessage || isQuotedImage) && args.length == 0) {
            const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(raa).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : raa
            const media = await rara.downloadAndSaveMediaMessage(encmedia)
                ran = '666.webp'
                await ffmpeg(`./${media}`)
                .input(media)
                .on('start', function (cmd) {
                     console.log(`Started : ${cmd}`)
                })
                .on('error', function (err) {
                 console.log(`Error : ${err}`)
                fs.unlinkSync(media)
                reply('error')
                })
                .on('end', function () {
                console.log('Finish')
                rara.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: raa})
                 fs.unlinkSync(media)
                fs.unlinkSync(ran)
                })
                .addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
                .toFormat('webp')
                .save(ran)
                } else if ((isMedia && raa.message.videoMessage.seconds < 11 || isQuotedVideo && raa.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
                const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(raa).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : raa
                const media = await rara.downloadAndSaveMediaMessage(encmedia)
            ran = '999.webp'
            reply(mess.wait)
            await ffmpeg(`./${media}`)
            .inputFormat(media.split('.')[1])
            .on('start', function (cmd) {
            console.log(`Started : ${cmd}`)
            })
            .on('error', function (err) {
            console.log(`Error : ${err}`)
            fs.unlinkSync(media)
            tipe = media.endsWith('.mp4') ? 'video' : 'gif'
            reply(`Gagal, pada saat mengkonversi ${tipe} ke stiker`)
            })
            .on('end', function () {
            console.log('Finish')
            rara.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: raa})
            fs.unlinkSync(media)
            fs.unlinkSync(ran)
                })
                .addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
                .toFormat('webp')
                .save(ran)
            } else {
                reply(`Kirim gambar dengan caption ${prefix}sticker\nDurasi Sticker Video 1-9 Detik`)
            }
            break               
        case 'video':
            if (args.length === 0) return reply(`Example : ${prefix}playmp4 omae wa mou`)
            var srch = args.join('')
            aramas = await yts(srch);
            aramat = aramas.all 
            var mulaikah = aramat[0].url                            
                  try {
                    ytv(mulaikah)
                    .then((res) => {
                        const { dl_link, thumb, title, filesizeF, filesize } = res
                        axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
                        .then(async (a) => {
                        if (Number(filesize) >= 100000) return sendMediaURL(from, thumb, `*PLAY VIDEO*\n\n❏ *Title* : ${title}\n❏ *Ext* : MP3\n❏ *Filesize* : ${filesizeF}\n❏ *Link* : ${a.data}\n\n_Untuk durasi lebih dari batas disajikan dalam bentuk link_`)
                        const captions = `*PLAY VIDEO*\n\n❏ *Title* : ${title}\n❏ *Ext* : MP4\n❏ *Size* : ${filesizeF}\n❏ *Link* : ${a.data}\n\n_Waitt!! Video sedang dikirim!!_`
                        sendMediaURL(from, thumb, captions)
                        await sendMediaURL(from, dl_link).catch(() => reply('error'))
                        })                
                        })
                        } catch (err) {
                        reply(mess.error.api)
                        }
                   break      
    case 'source':
            if(!q) return reply('linknya?')
            fetch(`${args[0]}`).then(res => res.text())  
            .then(bu =>{
            fakegroup2(bu)
            })   
            break
    case 'off':
            if (!raa.key.fromMe) return 
            offline = true
            waktu = Date.now()
            anuu = args.join(' ') ? args.join(' ') : '-'
            alasan = anuu
            fakestatus('❏ _NOW OFFLINE_')
            break   
    case 'on':
            if (!raa.key.fromMe) return 
            offline = false
            fakestatus('❏ _NOW ONLINE_')
            break       
           	case 'tes':
           	fakegroup2('❏ Ok')
           	break
            case 'ytmp42' :
            if (args.length == 0) return reply(`Example: ${prefix}ytmp42 https://youtu.be/xYJzwcZWJ0I`)
            fakegroup2('Wait!')
            ini_link = args[0]
            ini_result = await fetchJson(`https://ramra.herokuapp.com/api/yutub/video?url=${ini_link}&apikey=${apikeyrara}`)
            get_result = ini_result.result
            ini_txt = `❏ *Api :* ${ini_result.author}\n`
            ini_txt += `❏ *Type :* ${get_result.ext}\n`
            ini_txt += `❏ *Status :* ${get_result.status}\n`
            ini_txt += `❏ *Title :* ${get_result.title}\n`
            ini_txt += `❏ *Zise :* ${get_result.filesize}\n`
            ini_txt += `❏ *Resolution :* ${get_result.resolution}\n\n`
            ini_txt += `Wait! video sedang dikirim!!`
            ini_buffer = await getBuffer(get_result.thumb)
            fakethumb(ini_buffer, ini_txt)
            get_video = await getBuffer(get_result.result)
            await rara.sendMessage(from, get_video, video, { mimetype: 'video/mp4', filename: `${get_result.title}.mp4`, quoted: raa })
            break
	case 'ytmp4':
			if (args.length === 0) return reply(`*Example :* ${prefix}ytmp4 https://youtu.be/xYJzwcZWJ0I`)
			let isLinks2 = args[0].match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/)
			if (!isLinks2) return reply(mess.error.Iv)
				try {
				reply(mess.wait)
				ytv(args[0])
				.then((res) => {
				const { dl_link, thumb, title, filesizeF, filesize } = res
				axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
				.then((a) => {
				if (Number(filesize) >= 40000) return sendMediaURL(from, thumb, `❏ *YTMP 4!*\n\n❏ *Title* : ${title}\n❏ *Ext* : MP3\n❏ *Filesize* : ${filesizeF}\n❏ *Link* : ${a.data}\n\n_Untuk durasi lebih dari batas disajikan dalam bentuk link_`)
				const captionsYtmp4 = `*Data Diperoleh!*\n\n❏ *Title* : ${title}\n*❏ Ext* : MP4\n❏ *Size* : ${filesizeF}\n\n_Wait!! Audio sedang di kirim!_`
				sendMediaURL(from, thumb, captionsYtmp4)
				sendMediaURL(from, dl_link).catch(() => reply(mess.error.api))
				})		
				})
				} catch (err) {
			    reply(mess.error.api)
				}
				break
	case 'self':
          	if (!raa.key.fromMe) return
          	fakegroup2(`「 *SELF MODE* 」`)
          	if (banChats === true) return
          	uptime = process.uptime()
         	banChats = true
           	break
    case 'public':
          	if (!raa.key.fromMe) return
          	fakegroup2(`「 *PUBLIC MODE* 」`)
          	if (banChats === false) return
          	banChats = false
          	break
    case 'status':
            fakegroup2(`*STATUS*\n${banChats ? '❏ SELF MODE' : '❏ PUBLIC MODE'}\n${offline ? '❏ OFFLINE' : '❏ ONLINE'}`)
            break
            case 'run':
            if (!raa.key.fromMe) return
            let code = args.join(" ")
            try {
				if (!code) return rara.reply(from,'No java script code', id)
				let evaled;
				if (code.includes("--silent") && code.includes("--async")){
					code = code.replace("--async", "").replace("--silent", "");
					return await eval(`(async () => { ${code} })()`)
				} else if (code.includes("--async")) {
					code = code.replace("--async", "");
					evaled = await eval(`(async () => { ${code} })()`)
				} else if (code.includes("--silent")) {
					code = code.replace("--silent", "");
					return await eval(code);
				} else evaled = await eval(code);
				if (typeof evaled !== "string")
				evaled = require("util").inspect(evaled, { depth: 0 });
				let output = clean(evaled);
				var options = {
					contextInfo: {
						participant: '0@s.whatsapp.net',
						quotedMessage: {
							extendedTextMessage: {
								text: "COMPLETE"
							}
						}
					}
				}
				rara.sendMessage(from, `<//>`, text, options)
			} catch(err) {
				console.error(err)
				reply(err)
			}
			function clean(text) {
				if (typeof text === "string")
				return text
				.replace(/`/g, `\`${String.fromCharCode(8203)}`)
				.replace(/@/g, `@$(String.fromCharCode(8203)}`);
				else return text;
			}
			break
			case 'exec' :
			if (!raa.key.fromMe) return
			const cmyd = body.slice(6)
			var itsme = `0@s.whatsapp.net`
			var split = `*EXECUTOR RARA*`
			const term = {
				contextInfo: {
					participant: itsme,
					quotedMessage: {
						extendedTextMessage: {
							text: split,
						}
					}
				}
			}
			exec (cmyd, (err, stdout) => {
				if (err) return rara.sendMessage(from, `${err}`, text,{ quoted: ftoko })
				if (stdout) {
					rara.sendMessage(from, stdout, text, term)
					
				}
			})
			break
			case 'return' :
			if (!raa.key.fromMe) return
			return fakegroup2(JSON.stringify(eval(args.join(''))))
			break
	case 'ping':
			const timestamp = speed();
			const latensi = speed() - timestamp
			exec(`neofetch --stdout`, (error, stdout, stderr) => {
			const child = stdout.toString('utf-8')
			const teks = child.replace(/Memory:/, "Ram:")
			const pingnya = `❏ *${teks}Speed: ${latensi.toFixed(4)} Second*`
			fakegroup2(pingnya)
			})
			break  
	case 'ytsearch':
			if (args.length < 1) return reply(`Example: ${prefix}ytsearch omae wa mou`)
			var srch = args.join('');
			try {
        	var aramas = await yts(srch);
   			} catch {
        	return await rara.sendMessage(from, 'Error!', MessageType.text, dload)
    		}
    		aramat = aramas.all 
    		var tbuff = await getBuffer(aramat[0].image)
    		var ytresult = '';
    		ytresult += '「 *YOUTUBE SEARCH* 」'
    		ytresult += '\n________________________\n\n'
   			aramas.all.map((video) => {
        	ytresult += '❏ Title: ' + video.title + '\n'
            ytresult += '❏ Link: ' + video.url + '\n'
            ytresult += '❏ Durasi: ' + video.timestamp + '\n'
            ytresult += '❏ Upload: ' + video.ago + '\n________________________\n\n'
    		});
    		await fakethumb(tbuff,ytresult)
			break
            case 'ytsearch2' :
            if (args.length == 0) return reply(`Example: ${prefix}ytsearch hanbunko hanabi kotori remix`)
            fakegroup2('Wait!')
            query = args.join(" ")
            ini_result = await fetchJson(`https://ramra.herokuapp.com/api/yutub/search?video=${query}&apikey=${apikeyrara}`)
            get_result = ini_result.result
            ini_txt = `*Api :* ${ini_result.author}\n\n`
            for (var x of get_result) {
				ini_txt += `❏ *Title :* ${x.title}\n`
				ini_txt += `❏ *Id :* ${x.id}\n`
				ini_txt += `❏ *Channel :* ${x.channel.name}\n`
				ini_txt += `❏ *Upload :* ${x.uploadDate}\n`
				ini_txt += `❏ *Thumbnail :* ${x.thumbnail}\n`
				ini_txt += `❏ *Views :* ${x.viewCount}\n`
				ini_txt += `❏ *Link :* https://www.youtube.com/watch?v=${x.id}\n`
				ini_txt += `\n*-------------------*\n`
			}
			fakegroup(ini_txt)
			break
	case 'play':
			if (args.length === 0) return reply(`Example : ${prefix}play omae wa mou`)
            var srch = args.join('')
    		aramas = await yts(srch);
    		aramat = aramas.all 
   			var mulaikah = aramat[0].url							
                  try {
                    yta(mulaikah)
                    .then((res) => {
                        const { dl_link, thumb, title, filesizeF, filesize } = res
                        axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
                        .then(async (a) => {
                        if (Number(filesize) >= 100000) return sendMediaURL(from, thumb, `❏ *PLAY MUSIC*\n\n❏ *Title* : ${title}\n❏ *Ext* : MP3\n❏ *Filesize* : ${filesizeF}\n❏ *Link* : ${a.data}\n\n_Untuk durasi lebih dari batas disajikan dalam bentuk link_`)
                        const captions = `❏ *PLAY MUSIC*\n\n❏ *Title* : ${title}\n❏ *Ext* : MP3\n❏ *Size* : ${filesizeF}\n❏ *Link* : ${a.data}\n\n_Wait!! Audio sedang dikirim!_`
                        sendMediaURL(from, thumb, captions)
                        await sendMediaURL(from, dl_link).catch(() => reply('error'))
                        })                
                        })
                        } catch (err) {
                        reply(mess.error.api)
                        }
	case 'ytmp3':
			if (args.length === 0) return reply(`*Example :* ${prefix}ytmp3 https://youtu.be/xYJzwcZWJ0I`)
			let isLinks = args[0].match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/)
			if (!isLinks) return reply(mess.error.Iv)
				try {
				reply(mess.wait)
				yta(args[0])
				.then((res) => {
				const { dl_link, thumb, title, filesizeF, filesize } = res
				axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
				.then((a) => {
			    if (Number(filesize) >= 30000) return sendMediaURL(from, thumb, `❏ *Data Didapatkan!*\n\n❏ *Title* : ${title}\n❏ *Ext* : MP3\n❏ *Filesize* : ${filesizeF}\n❏ *Link* : ${a.data}\n\n_Untuk durasi lebih dari batas disajikan dalam bentuk link_`)
				const captions = `❏ *YTMP3*\n\n❏ *Title* : ${title}\n❏ *Ext* : MP3\n❏ *Size* : ${filesizeF}\n\n_Wait!! Audio sedang di kirim!_`
				sendMediaURL(from, thumb, captions)
				sendMediaURL(from, dl_link).catch(() => reply(mess.error.api))
				})
				})
				} catch (err) {
				reply(mess.error.api)
				}
				break
            case 'ytmp32' :
            if (args.length == 0) return reply(`Example: ${prefix}ytmp32 https://youtu.be/xYJzwcZWJ0I`)
            fakegroup2('Wait!')
            ini_link = args[0]
            ini_result = await fetchJson(`https://ramra.herokuapp.com/api/yutub/audio?url=${ini_link}&apikey=${apikeyrara}`)
            get_result = ini_result.result
            ini_txt = `❏ *Api :* ${ini_result.author}\n`
            ini_txt += `❏ *Type :* ${get_result.ext}\n`
            ini_txt += `❏ *Status :* ${get_result.status}\n`
            ini_txt += `❏ *Title :* ${get_result.title}\n`
            ini_txt += `❏ *Zise :* ${get_result.filesize}\n`
            ini_txt += `_Wait! audio sedang dikirim!!_`
            ini_buffer = await getBuffer(get_result.thumb)
            fakethumb(ini_buffer, ini_txt)
            get_audio = await getBuffer(get_result.result)
            await rara.sendMessage(from, get_audio, audio, { mimetype: 'video/mp4', filename: `${get_result.title}.mp4`, quoted: raa })
            break
default:
if (budy.startsWith('x')){
try {
return rara.sendMessage(from, JSON.stringify(eval(budy.slice(2)),null,'\t'),text, {quoted: raa})
} catch(err) {
e = String(err)
reply(e)
}
}  

	}
if (isGroup && budy != undefined) {
	} else {
	console.log(color('[TEXT]', 'red'), 'SELF-MODE', color(sender.split('@')[0]))
	}		
	} catch (e) {
    e = String(e)
    if (!e.includes("this.isZero")) {
	console.log('Message : %s', color(e, 'green'))
        }
	// console.log(e)
	}
}


	
    
