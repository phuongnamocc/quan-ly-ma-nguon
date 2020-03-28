var express = require("express");
var bodyParser =require('body-parser');

var app =express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extends:false}));
app.post('/api/dang-nhap',function(req,res)
{
    if(req.body.username == 'phuongnam'&&req.body.password == '123456')
    {
        res.send('Chao mung quay tro lai' + req.body.username);
    }else
    {
        res.send('Vui long thu lai mk hoac tk');
    }
}
)
app.listen(3000,function()
{
    console.log('Ban dang chay server tren port 3000')
});