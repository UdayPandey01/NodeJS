const os = require('os')

// Getting user info
const user = os.userInfo()
console.log(user)

// The system upTime in seconds
console.log(`The System uptime is ${os.uptime()} seconds`)

const currentOs = {
    name: os.type(),
    release: os.release(),
    totalmem: os.totalmem(),
    freemem: os.freemem(),
}

console.log(currentOs)