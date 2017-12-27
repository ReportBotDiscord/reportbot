const Discord = require('discord.js');
const client = new Discord.Client();
const token = require('./config.json').token;

client.on("ready", () => {
    client.user.setGame(`-report [@name] [reason]`);
    console.log(`${client.guilds.size} Servers,  ${client.users.size} Users, \n Online!`);
  });

var prefix = "-report"
var prefix2 = "-"
client.on('message', message => {
	if (message.content === '-avatar') {
	  message.reply(message.author.avatarURL);
	}
	

	if (message.author.bot) return;

	if (message.content.includes('delete this message report bot')) {
		message.delete(1);
    }

	if (!message.content.startsWith(prefix)) return;
	if (message.author.bot) return;

	if (message.content.startsWith(prefix2 + `ping`)) {
		message.channel.send('Pinging...').then(sent => {
			sent.edit(`Pong!\nTook \`${(sent.createdTimestamp - message.createdTimestamp) / 2}\`ms`)
		  })
		}

		if (message.content.startsWith(prefix + ``)) {
		message.reply('Thank You For Using Our Report System! You Will Shortly Get A DM From An Owner!');
	} else

	if (message.content.startsWith(`-say`)) {
    // makes the bot say something and delete the message. As an example, it's open to anyone to use. 
    // To get the "message" itself we join the `args` back into a string with spaces: 
    const sayMessage = args.join(" ");
    // Then we delete the command message (sneaky, right?). The catch just ignores the error with a cute smiley thing.
    message.delete().catch(O_o=>{}); 
    // And we get the bot to say the thing: 
    message.channel.send(sayMessage);
  }
  
	if (message.content.startsWith(prefix2 + `ping simple`)) {
		message.channel.send('Pong!');
	}
});

client.login(process.env.BOT_TOKEN);
