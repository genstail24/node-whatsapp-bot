// const words = "#dfdf test";

// const word2 = "test";

// const message = "#test testtb tedfdfdfst";

// console.log(message.split(' ')[1]);

// console.log(`Command doesnt exist. \nType #menu to see all the command lists`);

// if(words.includes('#')){
// 	console.log('exist\ntest')
// }else{
// 	console.log('doesnt exist');
// }
 // $.getJSON('library/quotes.json', function (data) {
 //        allQuestions = data.quiz;
 //    })

const  fs = require('fs');
const testdf = require('./library/quotes.js')
console.log(testdf.a)
const getQuote = () => {
	let fileString = fs.readFileSync('library/quotes.json').toString();
	let fileObj = JSON.parse(fileString);
	const quotes = fileObj;
	const randomIndex = Math.floor(Math.random() * quotes.length);
	const randomKey = quotes[randomIndex];
	const sendMessage =  `${randomKey.quote} - ${randomKey.by}`;
	return sendMessage;
}

// console.log(getQuote());

const axios = require('axios');
const a = async () => {

	let today = new Date();
	let from = new Date();
	// console.log('Today is: ' + d.toISOString());
	from.setDate(from.getDate() - 10);
	const response = await axios.get('https://api.covid19api.com/total/country/indonesia');
	const [dataCovid] = response.data.slice(-1);
	console.log(dataCovid)
}

// a();
// Date().now();
// console.loGnew Date().toISOString()

// let d = new Date();
// console.log('Today is: ' + d.toISOString());
// d.setDate(d.getDate() - 3);
// console.log('3 days ago was: ' + d.toISOString());

// 	let today = new Date();
// 	let from = new Date();
// 	// console.log('Today is: ' + d.toISOString());
// 	from.setDate(from.getDate() - 10);
// console.log('endpoint: ' + 'https://api.covid19api.com/total/country/south-africa/status/confirmed?from='+ from.toISOString() +'&to='+ today.toISOString())

	// console.log(command);
			let command = '#infoCovid19-fdfd dfdf'
			command = command.toLowerCase().split(' ')[0];
			// const country =dfd[0];
			// textForSend = await infoCovid(country)
			// client.sendMessage(from, textForSend.toString());
			// console.log(country)


			// if(command.includes("#infocovid19")){
			// 	const a = command.toLowerCase().split('-');
			// 	console.log('panjang: ' + a.Length)
			// 	const country = a[1];
			// 	textForSend = await infoCovid(country)
			// 	client.sendMessage(from, textForSend.toString());
			// 	console.log(country + ' ahaa ada')
			// }
const moment = require('moment')
const time = new Date();
// console.log(time.getMonth());
console.log( moment(time).format('MMMM Do YYYY') )


const fd = 'hdffholdfiwis';
if(fd.includes('holiwis')){
	console.log('ok')
}