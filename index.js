/*
* @Author: huanglijie
* @Date:   2017-10-10 18:00:48
* @Last Modified by:   huanglijie
* @Last Modified time: 2017-10-10 18:12:17
*/
const express=require("express"),
	request=require("request");

const app=express();

app.use(express.static('./public'));

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.get('/getToplist',function(req,res){
	request('https://cnodejs.org/api/v1/topics', function (error, response, body) {
		if(response.statusCode==200){
			res.writeHead(200,{"content-type":"text/plain;charset=utf-8"});
			res.write(body)
		}else{
			res.write(response.statusCode)
		}
		res.end()
	});
})

app.listen(3000)
console.log('server started on 127.0.0.1:3000');