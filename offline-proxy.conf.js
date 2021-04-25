const PROXY_CONFIG = {
  "/api/": {
    "target": "http://localhost:3000",
    "secure": false,
    "bypass": function (req, res, proxyOptions) {
        //console.log('Request=', req);
        return "/assets/proxy"+req.url+'.json';
    }/*,
    logLevel:"debug"*/
  }
}

module.exports = PROXY_CONFIG;
