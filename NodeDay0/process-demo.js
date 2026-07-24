const { cwd } = require("node:process")

console.log("Node Version:", process.version)
console.log("Platform:", process.platform)
console.log("Current Directory:", process,cwd())
console.log("Memory Usage:", process.memoryUsage())
console.log("Uptime:", process.uptime())