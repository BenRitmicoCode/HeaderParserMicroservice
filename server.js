var express=require('express');
var useragent = require('useragent');
var app = express();
app.get('/',function(req,res){
  var agent = useragent.parse(req.headers['user-agent']);
  var ipAddress = req.headers['x-forwarded-for'].split(',')[0];
  var lang = req.headers['accept-language'].split(',').shift();
  console.log(lang);
  res.json({
    IP: ipAddress,
    language:lang,
    software: agent.os.toString()
  })
})

app.listen(8080,function(){})
