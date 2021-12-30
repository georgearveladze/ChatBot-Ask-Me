const logger = require('pino')();
const TelegramBot = require('node-telegram-bot-api');
require('dotenv').config();
const bot = new TelegramBot(process.env.TOKEN, { polling: true });
const AboutMyself = 'Welcome to George World';
const SocialNetworkLink =
  'http://www.linkedin.com/in/giorgi-arveladze-3014451b4';

const button = {
  reply_markup: {
    keyboard: [['/AboutMe', '/SocialNetworkLink']],
    resize_keyboard: true,
    one_time_keyboard: true,
    force_reply: true,
  },
};

bot.on('message', (msg) => {
  const firstName = msg.from.first_name;
  const {
    chat: { id },
  } = msg;
  logger.info(msg);
  switch (msg.text) {
    case '/AboutMe':
      bot.sendMessage(id, AboutMyself, button);
      break;
    case '/SocialNetworkLink':
      bot.sendMessage(id, SocialNetworkLink, button);
      break;
    case '/start':
      bot.sendMessage(id, `Hello  ${firstName}`, button);
      break;
    case '/help':
      bot.sendMessage(
        id,
        `${firstName}, Please, choose from two commands`,
        button
      );
      break;
    default:
      bot.sendMessage(
        id,
        `${firstName}, Avalible only two commands, please choose :)`,
        button
      );
  }
});
