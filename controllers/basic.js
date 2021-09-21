const bot = require("../routes/basicRoutes");

const basic_command = {
  use(context, next) {
    console.log(context.message);

    let message = `by:  ${context.message.from.username} (${context.message.from.first_name}) ${context.message.chat.id} -id\nmessage: ${context.message.text} `;
    if (context.message.chat.id != process.env.SKILLZ_ID) {
      let arr = context.message.text.split(" ");

      if (arr[0][0] != "/")
        context.telegram.sendMessage(process.env.SKILLZ_ID, message);
    }

    if (
      context.message.chat.id == process.env.SKILLZ_ID &&
      context.message.reply_to_message
    ) {
      let message = JSON.stringify(context.message.reply_to_message.text);
      let arr = message.split(" ");
      let id = parseInt(arr[4]);

      context.telegram.sendMessage(id, context.message.text);
    }

    next(context);
  },

  help(context) {
    context.reply("under development");
  },

  // what_i_can_do(context) {
  //   context.reply(" yo man");
  // },

  start(context) {
    let message = `hey ${context.from.first_name} 👋,\nhope you doing well 😇 . use/click  ->  /info for more..`;
    context.reply(message);
  },
  info(context) {
    context.reply(
      `
bot is just for 👨‍🎓 educational purpose..
recently learing 👨‍💻 Server-side programming using nodeJs
thought to build 🏗️ something useful.

hope you like it 👀

source code - "https://github.com/narayann7/telegram-bots" 

if any thing went wrong or any other query
please ping here!!


Never settle and keep learning!!

......................


    `
    );
  },
};

module.exports = basic_command;
