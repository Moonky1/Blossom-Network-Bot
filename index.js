console.log('▶ DISCORD_TOKEN raw:', process.env.DISCORD_TOKEN);
require('dotenv').config();
const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.once('ready', () => {
  console.log(`¡Blossom listo! Conectado como ${client.user.tag}`);
});

client.login(process.env.DISCORD_TOKEN)
  .then(() => console.log('Login OK'))
  .catch(err => console.error('Login ERR:', err));

// Si Railway lo detecta como Web Service, expón un puerto:
require('http')
  .createServer((req, res) => res.end('OK'))
  .listen(process.env.PORT || 3000);
