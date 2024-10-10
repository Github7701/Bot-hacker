const fs = require("fs");
module.exports = {
  config:{
	name: "asif2",
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

	if (body.indexOf("🫰")==0 || body.indexOf(" ")==0 || body.indexOf(" ")==0 || body.indexOf("🥀")==0 || body.indexOf(" ")==0 || body.indexOf(" ")==0 || body.indexOf(" ")==0 || body.indexOf(" ")==0 || body.indexOf(" ")==0 || body.indexOf("family")==0) {
		var msg = {
				body: "•ডিপ্রে'শনে থাকা মানুষগুলো জানে-🙂/nপ্রতিটা সেকে'ন্ড প্রতিটা রা'ত তাদের জন্য কি..!😭💔🥀",
				attachment: media
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("😭", event.messageID, (err) => {}, true)
		}
	},
	start: function({ nayan }) {
  }
}
