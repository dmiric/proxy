module.exports = {
  apps : [{
    name: "Proxy",
    script: "./app.js"
  },{
    name: "tBTCUSD",
    script: "../botV2/_work/bot/bot/dist/main.js",
    env: {
      "port": 3000,
      "symbol": "tBTCUSD"
    }
  },{
    name: "tETHUSD",
    script: "../botV2/_work/bot/bot/dist/main.js",
    env: {
      "port": 3001,
      "symbol": "tETHUSD"
    }
  }]
}