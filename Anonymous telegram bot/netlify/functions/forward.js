const TelegramBot = require('node-telegram-bot-api');
const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

const botToken = process.env.BOT_TOKEN;
const channelId = process.env.CHANNEL_ID;
const bot = new TelegramBot(botToken, { polling: false });

exports.handler = async (event) => {
  try {
    const { message, type, userId } = JSON.parse(event.body);
    const messageId = Date.now().toString(36);
    const commentUrl = `${process.env.URL}/comment.html?msg=${messageId}`;

    // Store in Supabase
    const { error } = await supabase
      .from('messages')
      .insert([{
        message_id: messageId,
        user_id: userId,
        content: message,
        message_type: type
      }]);

    if (error) throw error;

    const formattedMessage = `${getTypeEmoji(type)} Anonymous ${type}:\n\n${message}\n\n💬 [Comment anonymously](${commentUrl})`;

    await bot.sendMessage(channelId, formattedMessage, {
      parse_mode: 'Markdown',
      disable_web_page_preview: true
    });

    return { statusCode: 200, body: JSON.stringify({ success: true }) };
  } catch (error) {
    return { statusCode: 500, body: JSON.stringify({ error: error.message }) };
  }
};

function getTypeEmoji(type) {
  const emojis = { text: '✉️', feedback: '📝', question: '❓', suggestion: '💡' };
  return emojis[type] || '✉️';
}
