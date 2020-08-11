console.log(process.env.NODE_ENV);
const port  = process.env.port || 9999;
const path = require('path');
function resolve(dir){
    return path.join(__dirname,dir);
}
module.exports = {
    lintOnSave: process.env.NODE_ENV === 'production',
    devServer:{
        port,
        open:true,
        proxy:{
            'api':{
                target:"http://localhost:8000/mock",
                changeOrigin:true,
                pathRewrite:{
                    
                }
            }
        }
    },
    configureWebpack:{
        resolve:{
            alias:{
                "@":resolve("src"),
                "components":resolve("src/components"),
                "utils":resolve("src/utils")
            }
        }
    }
}