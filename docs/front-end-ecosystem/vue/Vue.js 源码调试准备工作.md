# Vue.js 源码调试准备工作

> 工欲善其事，必先利其器。调试 Vue.js 之前的准备工作。

> 本次源代码调试是基于 `Vue.js v2.6.11` 。

默认情况下是下载好了 `vue-dev`文件，同时 `node` 环境配置 OK。

1. `npm install` 安装依赖包；
2. 修改 `package.json` 文件中 `scripts` 命令行；
	```js
	{
		// ...
		"scripts": {
			"dev": "rollup -w -c scripts/config.js --environment TARGET:web-full-dev --sourcemap",
			// ...
		}
	}
	```
3. `dist` 文件夹下创建文件 `server.js` （启动本地服务）；
	```js
	// server.js
	const http = require('http');
	const fs = require('fs');
	const url = require('url');

	http.createServer((request, response) => {
		// 解析请求
		let pathname = url.parse(request.url).pathname;

		pathname = pathname === '/' ? '/index.html': pathname

		// 从文件系统中读取请求的文件内容
		fs.readFile(pathname.substr(1), (error, data) => {
			if (error) {
				console.log(error);
				response.writeHead(404, {
					'Content-Type': 'text/html'
				});
			} else {
				// 设置响应请求头
				response.writeHead(200, {
					'Content-Type': 'text/html'
				});

				// 响应文件内容
				response.write(data.toString());
			}
			// 发送响应数据
			response.end();
		})
	}).listen(8009, () => {
		console.log('Server running at http://127.0.0.1:8009')
	})
	```
4. `dist` 文件夹下创建文件 `index.html` （引用 vue.js）；
	```js
	<!DOCTYPE html>
	<html lang="en">
	<head>
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<title>调试 vue.js</title>
	</head>
	<body>
		<h1 style="margin: 30px; text-align: center;">
			调试 vue.js
		</h1>
		<hr>
		<div id="app">
			{{ msg }}
		</div>

		<script src="./vue.js"></script>
		<script>
			new Vue({
				el: '#app',
				data: {
					msg: 'this is message'
				}
			});
		</script>
	</body>
	</html>
	```
5. `dist` 文件夹下创建文件夹 `javascripts` （引用各种调试 js 文件）；

至此也就完成了调试的准备工作，最后只需跑两个命令即可；

```js
// 启动 Vue 项目，方便 console 时，实时更新生成的 vue.js 文件；
npm run dev
	
// 启动本地服务，查看 index.html 生成的页面（需要在 dist 文件夹下跑命令）；
nodemon server.js
```

接下来就可以开始愉快的（其实并不愉快）调试代码了，看看 Vue.js 里面是怎么一回事了