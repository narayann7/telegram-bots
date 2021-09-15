const bot = require("../routes/basicRoutes");


const basic_command = {
  use(context, next) {
    console.log(context.message);

    let message = `by: ${context.message.from.first_name} (${context.message.from.username}) ${context.message.chat.id} -id\nmessage: ${context.message.text} `;
    if (context.message.chat.id != process.env.SKILLZ_ID)
      context.telegram.sendMessage(process.env.SKILLZ_ID, message);

    if (
      context.message.chat.id == process.env.SKILLZ_ID &&
      context.message.reply_to_message
    ) {
      let message = JSON.stringify(context.message.reply_to_message.text);
      let arr = message.split(" ");
      let id = parseInt(arr[3]);

      context.telegram.sendMessage(id, context.message.text);
    }

    next(context);
  },



  help(context) {
    context.reply("hey....you");
  },

 what_i_can_do(context) {
    context.reply(" yo man");
    // context.telegram.sendVideo(process.env.SKILLZ_ID ,'BAACAgUAAxkBAAIB9WFBxQJJUAnDQSc_Ojj5cROE6Pb4AAIKBAACrTsQVvuFB6VDNekDIAQ')
  },

  start(context) {
    let message = `hey ${context.from.first_name} 👋,\nhope you doing well 😇 . use/click  ->  /help for more..`;
    context.reply(message);
  },
};

module.exports = basic_command;

// {
//   message_id: 407,
//   from: {
//     id: 916424394,
//     is_bot: false,
//     first_name: 'Crossfireㅤ',
//     username: 'Alphon6',
//     language_code: 'en'
//   },
//   chat: {
//     id: 916424394,
//     first_name: 'Crossfireㅤ',
//     username: 'Alphon6',
//     type: 'private'
//   },
//   date: 1631638205,
//   text: 'SKILLZ_ID'
// }

// {
//   message_id: 436,
//   from: {
//     id: 809594991,
//     is_bot: false,
//     first_name: 'sᴋɪʟʟZ',
//     username: 'skillZ6',
//     language_code: 'en'
//   },
//   chat: {
//     id: 809594991,
//     first_name: 'sᴋɪʟʟZ',
//     username: 'skillZ6',
//     type: 'private'
//   },
//   date: 1631639536,

//   reply_to_message: {
//     message_id: 434,
//     from: {
//       id: 1628947103,
//       is_bot: true,
//       first_name: 'Alphon',
//       username: 'Skillz7_bot'
//     },
//     chat: {
//       id: 809594991,
//       first_name: 'sᴋɪʟʟZ',
//       username: 'skillZ6',
//       type: 'private'
//     },
//     date: 1631639503,
//     text: 'by: Crossfireㅤ (Alphon6)\nmessage: Oo'
//   },
//   text: 'Ping'
// }
