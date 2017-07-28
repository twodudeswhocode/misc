const cointicker=require("coin-ticker")
var sprintf=require("sprintf-js").sprintf

res=process.argv[2]+"_BTC"
sym="฿"

function ticker(exchange,res){
	if (res === "BTC_USD") sym="$"
	cointicker(exchange,res)
		.then((tick)=>{
		if(tick.last === undefined) return 1
		console.log(sprintf("%-10s: %s%f",exchange.toUpperCase(),sym,tick.last))})
}


if (process.argv[2].toUpperCase() === "BTC"){
	res="BTC_USD"
}

exchange = ["bittrex","poloniex","kraken","okcoin","bitstamp","coinbase"]
for(i=0;i<exchange.length-1;i++){
	ticker(exchange[i],res)
}
