const { Telegraf } = require("telegraf");
const bot = new Telegraf(process.env.BOT_TOKEN_MAIN);
const { help, what_i_can_do } = require("../controllers/basic");

bot.help(help);
bot.command("what_i_can_do", what_i_can_do);

module.exports = bot;
