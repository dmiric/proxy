var express = require('express');
var app = express();
var httpProxy = require('http-proxy');
var apiProxy = httpProxy.createProxyServer();
var pm2 = require('./bots.config')

for(var bot of pm2['apps']) {
    if(bot['script'] == './app.js') {
        continue
    }

    var path = "/" + bot['env'].symbol + "/*"; 
    app.all(path, function(req, res) {
        var url = req.originalUrl.split("/")
        req.url = '/' + url[2]
        for(var bot of pm2['apps']) {          
            if(bot.name == url[1]) {
                var server = 'http://localhost:' + bot['env'].port
                apiProxy.web(req, res, {target: server});
                break
            }
        }
    });
}

app.listen(80);