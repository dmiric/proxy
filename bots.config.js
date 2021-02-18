module.exports = {
  apps : [{
    name: "Proxy",
    script: "./app.js"
  },{
    name: "tBTCUSD",
    script: "../bfx-bot/dist/main.js",
    env: {
      "port": 3000,
      "symbol": "tBTCUSD"
    }
  },{
    name: "tETHUSD",
    script: "../bfx-bot/dist/main.js",
    env: {
      "port": 3001,
      "symbol": "tETHUSD"
    }
  }]
}