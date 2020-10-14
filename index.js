/*
	Whatsapp bot by genstail24
	Instagram: https://instagram.com/genstaathoriq
	Portfolio: https://genstail24.github.io
*/

const qrcode = require('qrcode-terminal');

const { Client } = require('whatsapp-web.js');
const client = new Client();

client.on('qr', qr => {
    qrcode.generate(qr, {small: true});
});

client.on('ready', () => {
    console.log('Client is ready!');
});


// Untuk sementara pake data dummy dulu
const quotes = [
  {
    "by": "A. France",
    "quote": "Lebih baik mengerti sedikit daripada salah mengerti."
  },
  {
    "by": "Abraham Lincoln",
    "quote": "Hampir semua pria memang mampu bertahan menghadapi kesulitan. Namun, jika Anda ingin menguji karakter sejati pria, beri dia kekuasaan."
  },
  {
    "by": "Aeschylus",
    "quote": "Bila tekad seseorang kuat dan teguh, Tuhan akan bergabung dalam usahanya."
  },
  {
    "by": "Aesop",
    "quote": "Penderitaan adalah pelajaran."
  },
  {
    "by": "Albert Einstein",
    "quote": "Ilmu pengetahuan tanpa agama adalah pincang."
  },
  {
    "by": "Albert Einstein",
    "quote": "Hidup itu seperti sebuah sepeda, agar tetap seimbang kita harus tetap bergerak."
  },
  {
    "by": "Albert Einstein",
    "quote": "Perbedaan masa lalu, sekarang, dan masa depan tak lebih dari ilusi yang keras kepala."
  },
  {
    "by": "Albert Einstein",
    "quote": "Sebuah meja, sebuah kursi, semangkuk buah, dan sebuah biola; apa lagi yang dibutuhkan agar seseorang bisa merasa bahagia?."
  },
  {
    "by": "Albert Enstein",
    "quote": "Belas kasihanlah terhadap sesama, bersikap keraslah terhadap diri sendiri."
  },
  {
    "by": "Alex Osborn",
    "quote": "Cara paling baik untuk menggerakkan diri Anda ialah memberi tugas kepada diri sendiri."
  },
  {
    "by": "Alexander A. Bogomoletz",
    "quote": "Kita tidak boleh kehilangan semangat. Semangat adalah stimulan terkuat untuk mencintai, berkreasi dan berkeinginan untuk hidup lebih lama."
  },
  {
    "by": "Alexander Solzhenitsyn",
    "quote": "Manusia akan bahagia selama ia memilih untuk bahagia."
  },
  {
    "by": "Ali Javan",
    "quote": "Saya tidak berharap menjadi segalanya bagi setiap orang. Saya hanya ingin menjadi sesuatu untuk seseorang."
  },
  {
    "by": "Ali bin Abi Thalib",
    "quote": "Apabila sempurna akal seseorang, maka sedikit perkataannya."
  },
  {
    "by": "Ali bin Abi Thalib",
    "quote": "Bahagialah orang yang dapat menjadi tuan untuk dirinya, menjadi kusir untuk nafsunya dan menjadi kapten untuk bahtera hidupnya."
  },
  {
    "by": "Ali bin Abi Thalib",
    "quote": "Sahabat yang jujur lebih besar harganya daripada harta benda yang diwarisi dari nenek moyang."
  },
  {
    "by": "Anne M. Lindbergh",
    "quote": "Yang palin melelahkan dalam hidup adalah menjadi orang yang tidak tulus."
  },
  {
    "by": "Anonim",
    "quote": "Terbuka untuk Anda, begitulah Tuhan memberi kita jalan untuk berusaha. Jangan pernah berfikir jalan sudah tertutup."
  },
  {
    "by": "Anonim",
    "quote": "Penundaan adalah kuburan dimana peluang dikuburkan."
  },
  {
    "by": "Antonie De Saint",
    "quote": "Cinta bukan saling menatap mata, namun melihat ke arah yang sama bersama-sama."
  },
  {
    "by": "Aristoteles",
    "quote": "Kita adalah apa yang kita kerjakan berulang kali. Dengan demikian, kecemerlangan bukan tindakan, tetapi kebiasaan."
  },
  {
    "by": "Arnold Glasow",
    "quote": "Jangan pernah mencoba menjadikan putra atau putri Anda menjadi seperti Anda. Diri Anda hanya cukup satu saja."
  },
  {
    "by": "Art Buchwald",
    "quote": "Jika Anda bisa membuat orang lain tertawa, maka Anda akan mendapatkan semua cinta yang Anda inginkan."
  },
  {
    "by": "Artemus Ward",
    "quote": "Masalah akan datang cepat atau lambat. Jika masalah datang, sambut dengan sebaik mungkin. Semakin ramah Anda menyapanya, semakin cepat ia pergi."
  },
  {
    "by": "Ashleigh Brilliant",
    "quote": "Kita tak bisa melakukan apapun untuk mengubah masa lalu. Tapi apapun yang kita lakukan bisa mengubah masa depan."
  },
  {
    "by": "Augustine",
    "quote": "Kesabaran adalah teman dari kebijaksanaan."
  },
  {
    "by": "Ayn Rand",
    "quote": "Orang-orang kreatif termotivasi oleh keinginan untuk maju, bukan oleh keinginan untuk mengalahkan orang lain."
  },
  {
    "by": "Arianda ro uffu",
    "quote": "Saat kamu menjadi orang tua, kamu adalah hantu bagi masa depan anakmu."
  },
  {
    "by": "Arianda dan Genta",
    "quote": "Pintar itu relatif tetapi nyontek itu alternatif."
  }
 ];

const menus = `Stupid menus:
1. Say hi or hallo
2. #quotes
3. #tagall
4. #coming soon...

script by genstail24
touch me at https://genstail24.github.io`

let counter = 0;
client.on('message', async message => {

	// for counting how many messages has come
	counter++;
	console.log('message number ' + counter.toString());

	//variables
	const {body, from} = message;
	const command = body.toLowerCase().split(' ')[0];

	// validate command
	if(command === 'hi' || command === 'hallo') client.sendMessage(from, 'holiwis UwU');

	if(body.includes('#')){
		if(command === '#menu'){
			await client.sendMessage(from, menus);
		}else if(command === '#quotes'){
			const randomIndex = Math.floor(Math.random() * quotes.length);
			const randomKey = quotes[randomIndex];
			const sendMessage =  `${randomKey.quote} - ${randomKey.by}`;
			await client.sendMessage(from, sendMessage);
		}else if(command === '#tagall'){
			// tag all the members
			const chat = await message.getChat();
	        let text = "";
	        let mentions = [];
	 
	        for(let participant of chat.participants) {
	            const contact = await client.getContactById(participant.id._serialized);
	 
	            mentions.push(contact);
	            text += `\n@${participant.id.user} `;
	        }
	 
	        chat.sendMessage(text, { mentions });
		}else if(command === '#cooming' || command === '#cooming soon'){
	        client.sendMessage(from, `Command hasnt come yet. \nType #menu to see all the command lists`);
		}else{
			await client.sendMessage(from, `Command doesnt exist. \nType #menu to see all the command lists`);
		}
	}

});

client.initialize();