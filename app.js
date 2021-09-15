require("dotenv").config();
const bot = require("./routes/basicRoutes");
const bot_one = require("./routes/basicRoutes");

bot.on("message", (context) => {
  console.log(context);
});

bot_one.launch();
