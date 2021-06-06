const TelegramBot = require('node-telegram-bot-api');
var request =require("request")

var apikey = "1304493179:AAFlGt1O-xlAztgFD0EENP850xhhAtX90dA"

var bot = new TelegramBot(apikey, {polling: true});
bot.on('message',function(a){
  console.log(a.text)
 
	request('https://coronavirus-19-api.herokuapp.com/countries/'+a.text,function(error,response,body){
        			 console.log(JSON.parse(body))
                    bot.sendMessage(a.chat.id,"Cases: "+JSON.parse(body).cases);
                    bot.sendMessage(a.chat.id,"Today's Cases: "+JSON.parse(body).todayCases);
                    bot.sendMessage(a.chat.id,"Deaths: "+JSON.parse(body).deaths);
                    bot.sendMessage(a.chat.id,"Today Deaths: "+JSON.parse(body).todayDeaths);
                    bot.sendMessage(a.chat.id,"Recovered: "+JSON.parse(body).recovered);
                    bot.sendMessage(a.chat.id,"active: "+JSON.parse(body).active);
                    bot.sendMessage(a.chat.id,"critical: "+JSON.parse(body).critical);
                    bot.sendMessage(a.chat.id,"Cases Per One Million: "+JSON.parse(body).casesPerOneMillion);
                    bot.sendMessage(a.chat.id,"Deaths Per One Million: "+JSON.parse(body).deathsPerOneMillion);                         
                    bot.sendMessage(a.chat.id,"Total Tests: "+JSON.parse(body).totalTests);
                    bot.sendMessage(a.chat.id,"Tests Per One Million: "+JSON.parse(body).testsPerOneMillion);
        

})
	 })





/*
  if (a.text.toLowerCase() === "hi" || a.text.toLowerCase() === "hello"){
  bot.sendMessage(a.chat.id,"Hi "+a.chat.first_name)
}*/