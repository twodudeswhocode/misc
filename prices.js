const cointicker=require("coin-ticker")
var sprintf=require("sprintf-js").sprintf

function ticker(exchange,res){
	sym="฿"
	if (res === "BTC_USD" || res === "USDT_BTC" || res === "USD_BTC") sym="$"
	cointicker(exchange,res)
		.then((tick)=>{
		if(tick.last === undefined) return 1
		console.log(sprintf("%-10s: %s%f",exchange.toUpperCase(),sym,tick.last))})
}

switch(process.argv[2].toUpperCase()){
	case "BTC": 
		res="BTC_USD"
		break
	case "USD": 
		res="USD_BTC"
		break
	case "USDT": 
		res="USDT_BTC"
		break
	default: res=process.argv[2]+"_BTC"
}

exchange = ["bittrex","poloniex","kraken","okcoin","bitstamp","coinbase"]
for(i=0;i<exchange.length-1;i++){
	ticker(exchange[i],res)
}
