var http = require('http');
var config = require('./config');

var app = http.createServer(function(req, res) {
    res.writeHead(200, {"Content-Type": "text/html;charset=utf-8"});

    res.write('hello node.js');

    console.log(config);

    res.end();
})

app.listen(8888);

/**
 * 1.我们可以把公共的功能 抽离成为一个单独的 js  文件 作为一个模块，默认情况下面这
    个模块里面的方法或者属性，外面是没法访问的。如果要让外部可以访问模块里面的方法或
    者属性，就必须在模块里面通过 exports 或者 module.exports 暴露属性或者方法。

    2. 在需要使用这些模块的文件中，通过 require 的方式引入这个模块。这个时候就可以
    使用模块里面暴露的属性和方法。
 */