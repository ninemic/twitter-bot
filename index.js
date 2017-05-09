var Twit = require('twit')

var bot = new Twit({
    consumer_key: process.env.MIG_BOT_CONSUMER_KEY,
    consumer_secret: process.env.MIG_BOT_CONSUMER_SECRET,
    access_token: process.env.MIG_BOT_ACCESS_TOKEN,
    access_token_secret: process.env.MIG_BOT_ACCESS_TOKEN_SECRET,
    timeout_ms: 60*1000
});

bot.post('statuses/update' , { status :'hello world from twit bot !!' }
    , function (err, data, response){
        if (err) {
            console.log(err)
        } else {
            console.log(data.text + ' was tweeted');
        }
    }
)