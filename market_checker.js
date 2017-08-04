var request = require('request');

exchangesMain = ['bittrex','poloniex','bitfinex','kraken','okcoin','bitstamp','coinbase']
exchangesGot = []
exchangesPoll = []

coinPoll = process.argv[2].toUpperCase()
if(coinPoll === 'BTC') coinRef = 'USD'
	else coinRef = 'BTC'

var url = 'https://www.cryptocompare.com/api/data/coinsnapshot/?fsym=' + coinPoll + '&tsym=' + coinRef
request({
      url: url,
      json: true
}, function (error, response, body) {
	if (!error && response.statusCode === 200) {
		for(let i = 0, l = body.Data.Exchanges.length; i < l; i++) {
			exchangesGot.push( body.Data.Exchanges[i].MARKET )

			for (var z = 0; z < exchangesMain.length; z++) {
				for(var j = 0; j < exchangesGot.length; j++) {
					if(exchangesGot[j].indexOf(exchangesMain[z]) != -1) exchangesPoll.push(exchangesGot[j]);
				}
			}
		}
	console.log( exchangesGot )
	console.log( exchangesPoll )
	}
})
