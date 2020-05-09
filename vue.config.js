const path = require('path');
const px2rem = require('postcss-px2rem')

// 配置postcs-px2rem
const postcss = px2rem({
    remUnit: 70
})
function resolve (dir) {
    return path.join(__dirname, dir)
}

module.exports={
    // runtimeCompiler: true,//是否开启编译器
    lintOnSave: false, //关闭eslint语法检查
    css: { // 添加postcss配置
        loaderOptions: {
            postcss: {
                plugins: [
                    postcss
                ]
            }
        }
    },
    devServer:{
        open:true
    },
    configureWebpack:{//与webpack相关的配置写在这里
        resolve:{//解析
            extensions: [".js", ".json",".vue"],//自动解析以这些为扩展名的文件
            alias:{
                'components':resolve('src/components'),
                'pages':resolve('src/pages'),// 设置文件查找路径，可简写文件查找路径
            }
        }
    },
}