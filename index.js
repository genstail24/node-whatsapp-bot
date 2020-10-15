/*
	Whatsapp bot by genstail24
	Instagram: https://instagram.com/genstaathoriq
	Portfolio: https://genstail24.github.io
*/
const  fs = require('fs');
const qrcode = require('qrcode-terminal');
const { Client } = require('whatsapp-web.js');
const axios = require('axios');
const moment = require('moment')

const quotesHandler = require('./library/quotes.js')

// Path where the session data will be stored
const SESSION_FILE_PATH = './session.json';

// Load the session data if it has been previously saved
let sessionData;
if(fs.existsSync(SESSION_FILE_PATH)) {
    sessionData = require(SESSION_FILE_PATH);
}

// Use the saved values
const client = new Client({
    session: sessionData
});

// Save session values to the file upon successful auth
client.on('authenticated', (session) => {
    sessionData = session;
    fs.writeFile(SESSION_FILE_PATH, JSON.stringify(session), function (err) {
        if (err) {
            console.error(err);
        }
    });
});

client.on('qr', qr => {
    qrcode.generate(qr, {small: true});
});

client.on('ready', () => {
    console.log('Client is ready!');
});

const menus = `Stupid menus:
1. #quotes
2. #tagall
3. #infocovid19-countryName
4. #about
5. #coming soon...`

let counter = 0;
client.on('message', async message => {

	// for counting how many messages has come
	counter++;
	console.log('message number ' + counter.toString());

	//variables
	const {body, from} = message;
	const command = body.toLowerCase().split(' ')[0];	

	// validate command
	if(body === 'hi holiwis' || body === 'hallo holiwis') client.sendMessage(from, 'holiwis UwU 😙');

	if(command.includes('#')){
		const command = body.toLowerCase().split(' ')[0];
		if(command === '#menu'){
			await client.sendMessage(from, menus);
		}else if(command === '#quotes'){
			const sendMessage = quotesHandler();
			client.sendMessage(from, sendMessage);	
		}else if(command === '#tagall'){
			// tag all the members
			const chat = await message.getChat();
	        let text = "";
	        let mentions = [];
	 		text += 'Mention all members 🙉';
	        for(let participant of chat.participants) {
	            const contact = await client.getContactById(participant.id._serialized);
	 
	            mentions.push(contact);
	            text += `\n@${participant.id.user} `;
	        }
	 
	        chat.sendMessage(text, { mentions });
		}else if(command.includes("#infocovid19")){
			const a = command.toLowerCase().split('-');
			let textForSend;
			if(a.length > 1){
				try{					
					const country = a[1];
					dataCovid19 = await getInfoCovid19(country)
					textForSend = `The last data of covid-19 in ${country} confirmed at ${moment(dataCovid19.Date).format('MMMM Do YYYY')}\n\nConfirmed: ${dataCovid19.Confirmed}\nDeath: ${dataCovid19.Deaths}\nRecovered: ${dataCovid19.Recovered}\nActive: ${dataCovid19.Active}`;
				}catch(error){
					textForSend = `Insert the correct country\nExample: #infocovid19-indonesia`;
					console.log('error terjadi ' + error)
				}
			}else{
				textForSend = 'insert the right country'
			}
			client.sendMessage(from, textForSend.toString());
		}else if(command === '#cooming' || body === '#cooming soon'){
	        client.sendMessage(from, `Command hasnt come yet. \nType #menu to see all the command lists`);
		}else if(command === '#about'){
			client.sendMessage(from, `Hello World! I am a stupid bot\n\n\nCreated by genstail24\nTouch me at https://genstail24.github.io`)
		}else{
			await client.sendMessage(from, `Command doesnt exist. \nType #menu to see all the command lists`);
		}
	}

});

const getQuote = () => {
	let fileString = fs.readFileSync('library/quotes.json').toString();
	let fileObj = JSON.parse(fileString);
	const quotes = fileObj;
	const randomIndex = Math.floor(Math.random() * quotes.length);
	const randomKey = quotes[randomIndex];
	const sendMessage =  `${randomKey.quote} - ${randomKey.by}`;
	return sendMessage;
}

const getInfoCovid19 = async (country) => {

	let today = new Date();
	let from = new Date();
	// console.log('Today is: ' + d.toISOString());
	from.setDate(from.getDate() - 10);
	const response = await axios.get('https://api.covid19api.com/total/country/'+ country);
	const [dataCovid] = response.data.slice(-1);
	return dataCovid;
}

client.initialize();