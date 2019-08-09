const path = require("path")
module.exports = {
    devServer:{
        proxy:{
         "/server":{
                target:"https://m.228.cn",
                changeOrigin:true,
            },
            "/upload":{
                target:"http://static.228.cn", //http://static.228.cn/upload/2018/07/27/1532681634284_l7u8_m1.jpg
                changeOrigin:true,
            }
        }
    },
    // 代替../
    configureWebpack:{
        resolve:{
            alias:{
                "@":path.join(__dirname,"./src"),
                "api":path.join(__dirname,"./src/api"),
                "components":path.join(__dirname,"./src/components"),
                "views":path.join(__dirname,"./src/views"),
                "common":path.join(__dirname,"./src/common"),
                "utils":path.join(__dirname,"./src/utils"),
                "router":path.join(__dirname,"./src/router"),
                "store":path.join(__dirname,"./src/store"), 
                "lib":path.join(__dirname,"./src/lib"), 
            }
        }
    }
}
 