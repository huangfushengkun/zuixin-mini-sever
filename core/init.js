
const requireDirectory = require('require-directory')
const Router = require('koa-router')

 class InitManager {
    static initCore (app) {  // 初始化管理器
        // 入口方法
        InitManager.app = app
        InitManager.initLoadRouters ()
        InitManager.loadHttpException()
        InitManager.loadConfig()
    }

    static initLoadRouters () {  // 1. 初始化路由
        const apiDirectory = `${process.cwd()}/app/api` // 获取 路由文件夹的绝对路径
        requireDirectory(module, apiDirectory,{
            visit:whenLoadModule
        })
        
        function whenLoadModule (obj) {
            if (obj instanceof Router) {  //路由模块中只导出路由模块
                InitManager.app.use(obj.routes())
            }
        }
    }

    static loadHttpException () {
        const errors = require('./http-exception')
        global.errs = errors
    }

    static loadConfig(path='') {
        const configPath = path || process.cwd() + '/config/config.js'
        const config = require(configPath)
        global.config = config
    }
}

module.exports = InitManager

