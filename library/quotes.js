const fs = require('fs')

module.exports = () => {
	let fileString = fs.readFileSync('./library/quotes.json').toString();
	let fileObj = JSON.parse(fileString);
	const quotes = fileObj;
	const randomIndex = Math.floor(Math.random() * quotes.length);
	const randomKey = quotes[randomIndex];
	const sendMessage =  `${randomKey.quote} - ${randomKey.by}`;
	return sendMessage;
}