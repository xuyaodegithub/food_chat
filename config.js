let env = 'dev';
//let env = 'product';
let config = {};
if(env=='dev'){
  config={
    apiUrl:"https://qa.puhuoji.com/foodData",
    wssUrl:"wss://qa.puhuoji.com/websocket"
  }
}
else{
  config = {
    apiUrl: "https://shinchi.puhuoji.com/foodData",
    wssUrl: "wss://shinchi.puhuoji.com/websocket"
  }
}

module.exports = config;
