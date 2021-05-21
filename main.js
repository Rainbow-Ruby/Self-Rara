const {
    WAConnection,
    MessageType,
    Presence,
    Mimetype,
    GroupSettingChange
} = require('@adiwajshing/baileys')
const fs = require('fs')
const { banner, start, success } = require('./lib/functions')
const { color } = require('./lib/color')

require('./index.js')
nocache('./index.js', module => console.log(`${module} is now updated!`))

const starts = async (rara = new WAConnection()) => {
    rara.logger.level = 'warn'
    console.log(banner.string)
    rara.on('qr', () => {
        console.log(color('[','white'), color('!','red'), color(']','white'), color(' Scan bang'))
    })

    fs.existsSync('./ramra.json') && rara.loadAuthInfo('./ramra.json')
    rara.on('connecting', () => {
        start('2', 'Connecting...')
    })
    rara.on('open', () => {
        success('2', 'Connected')
    })
    await rara.connect({timeoutMs: 30*1000})
        fs.writeFileSync('./ramra.json', JSON.stringify(rara.base64EncodedAuthInfo(), null, '\t'))

    rara.on('chat-update', async (message) => {
        require('./index.js')(rara, message)
    })
}

/**
 * Uncache if there is file change
 * @param {string} module Module name or path
 * @param {function} cb <optional> 
 */
function nocache(module, cb = () => { }) {
    console.log('Module', `'${module}'`, 'is now being watched for changes')
    fs.watchFile(require.resolve(module), async () => {
        await uncache(require.resolve(module))
        cb(module)
    })
}

/**
 * Uncache a module
 * @param {string} module Module name or path
 */
function uncache(module = '.') {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(module)]
            resolve()
        } catch (e) {
            reject(e)
        }
    })
}

starts()
