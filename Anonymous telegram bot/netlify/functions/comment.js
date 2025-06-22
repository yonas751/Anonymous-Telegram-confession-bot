const TelegramBot = require('node-telegram-bot-api');
const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

const botToken = process.env.BOT_TOKEN;
const bot = new TelegramBot(botToken, { polling: false });

exports.handler = async (event) => {
  try {
    const { messageId, comment } = JSON.parse(event.body);

    // Get original message from Supabase
    const { data, error } = await supabase
      .from('messages')
      .select('user_id')
      .eq('message_id', messageId)
      .single();

    if (error || !data) throw new Error('Message not found');

    await bot.sendMessage(
      data.user_id,
      `💬 New anonymous comment:\n\n${comment}\n\n(Replies to your message)`
    );

    return { statusCode: 200, body: JSON.stringify({ success: true }) };
  } catch (error) {
    return { statusCode: 500, body: JSON.stringify({ error: error.message }) };
  }
};
