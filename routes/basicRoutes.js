const {Composer} =require('micro-bot')
const bot = new Composer()
const controllers = require("../controllers/basic");

bot.use(controllers.use);
bot.help(controllers.help);
// bot.command("what_i_can_do", controllers.what_i_can_do);
bot.start(controllers.start);
bot.command("info",controllers.info)

module.exports = bot;
