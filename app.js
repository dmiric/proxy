var express = require('express');
var app = express();
var httpProxy = require('http-proxy');
var apiProxy = httpProxy.createProxyServer();
var pm2 = require('./bots.config')

for (var bot of pm2['apps']) {
    if (bot['script'] == './app.js') {
        continue
    }

    // var path = bot['env'].botVer + "/" + bot['env'].symbol + "/*";
    var path = '/' + bot.name + "/*";
    app.all(path, function (req, res) {
        for (var bot of pm2['apps']) {
            if (bot['script'] == './app.js') {
                continue
            }
            var url = req.originalUrl.split("/")

            if (bot['env'].botVer == 'botV2') {
                if (bot.name == url[1]) {
                    req.url = '/' + url[2]
                    var server = 'http://localhost:' + bot['env'].port
                    apiProxy.web(req, res, {
                        target: server
                    });
                    break
                }
            }
            if (bot['env'].botVer == 'botV3') {
                req.url = ''
                url.forEach(function(u) {
                    if(u != '' && u != bot.name) {
                        req.url = req.url + '/' + u
                    }
                })

                var server = 'http://localhost:' + bot['env'].port
                apiProxy.web(req, res, {
                    target: server
                });
                break

            }
        }
    });

}

app.listen(8080);