module.exports = {
  apps : [{
    name: "Proxy",
    script: "./app.js"
  },{
    name: "BotV2-1-tBTCUSD",
    script: "../../../../botV2/_work/bot/bot/dist/main.js",
    env: {
      "port": 3000,
      "symbol": "tBTCUSD",
      "botVer": "botV2"
    }
  },{
    name: "BotV2-2-tETHUSD",
    script: "../../../../botV2/_work/bot/bot/dist/main.js",
    env: {
      "port": 3001,
      "symbol": "tETHUSD",
      "botVer": "botV2"
    }
  },{
    name: "BotV3-1",
    script: "../../../../botV3/_work/botV3/botV3/dist/main.js",
    env: {
      "port": 3002,
      "botVer": "botV3",
      "name": "BotV3-1"
    }
  },{
    name: "BotV3-2731",
    script: "../../../../botV3/_work/botV3/botV3/dist/main.js",
    env: {
      "port": 3003,
      "botVer": "botV3",
      "name": "BotV3-2731"
    }
  }]
}