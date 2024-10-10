const fs = require("fs");
module.exports = {
  config:{
	name: "asif",
        version: "1.0.1",
        prefix: false,
	permssion: 0,
	credits: "nayan", 
	description: "Fun",
	category: "no prefix",
	usages: "😒",
        cooldowns: 5, 
},

handleEvent: async function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
  const content = event.body ? event.body : '';
  const body = content.toLowerCase();
  const axios = require('axios')
const media = (
    await axios.get(
      'https://i.imgur.com/6fEMaut.mp4',
      { responseType: 'stream' }
    )
  ).data;

	if (body.indexOf("🫰")==0 || body.indexOf(" ")==0 || body.indexOf(" ")==0 || body.indexOf(" ")==0 || body.indexOf(" ")==0 || body.indexOf(" ")==0 || body.indexOf(" ")==0 || body.indexOf(" ")==0 || body.indexOf(" ")==0 || body.indexOf("🥀")==0) {
		var msg = {
				body: "প্রত্যেকটা মানুষই যে তার চোখের পানি দিয়ে কষ্টটাকে দেখাবে এমনটা না। কারো কারো হাসিঁ মধ্যে ও ভয়ংকর রকম কষ্ট থাকে সেটা কেউ বুজতেও পারে না,😅",
				attachment: media
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("😭", event.messageID, (err) => {}, true)
		}
	},
	start: function({ nayan }) {
  }
}
