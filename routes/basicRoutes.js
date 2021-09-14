const { Telegraf } = require("telegraf");
const bot = new Telegraf(process.env.BOT_TOKEN_MAIN);
const controllers = require("../controllers/basic");

bot.use(controllers.use);
bot.help(controllers.help);
bot.command("what_i_can_do", controllers.what_i_can_do);
bot.start(controllers.start);

module.exports = bot;
