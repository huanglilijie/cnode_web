/*
* @Author: huanglijie
* @Date:   2017-10-10 15:17:41
* @Last Modified by:   huanglijie
* @Last Modified time: 2017-10-10 17:54:02
*/
const http=require("http");
const request=require("request");
const url=require("url");

// 创建http服务
var app = http.createServer(function (req, res) {
	var pathName=url.parse(req.url).pathname;
	if(pathName=='/getToplist'){
		request('https://cnodejs.org/api/v1/topics', function (error, response, body) {
			if(response.statusCode==200){
				res.writeHead(200,{"content-type":"text/plain;charset=utf-8"});
				res.write(body)
			}else{
				res.write(response.statusCode)
			}
			res.end()
		});
	}else{
		res.write(pathName)
		res.end()
	} 
});
// 访问127.0.0.1:3001查看效果
app.listen(3000);
console.log('server started on 127.0.0.1:3000');