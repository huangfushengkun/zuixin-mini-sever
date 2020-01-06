
const { HttpException }  = require('./../core/http-exception')
const catchError = async (ctx, next) =>  {
    try {
        await next ()
    } catch (error) {
         // 简化error
        // 开发环境 生产环境
        const isHttpException = error instanceof HttpException
        const isDev = global.config.environment === 'dev'

        if (isDev && !isHttpException) {
            throw error
        }
        if (isHttpException) {  // 已知
            ctx.body = {
                msg: error.msg,
                errorCode:error.errorCode,
                request: `${ctx.method} ${ctx.path}`
            },
            ctx.status = error.code
        } else {  //未知错误
            ctx.body = {
                mag: 'we made a mistake --',
                errorCode:999 ,
                request: `${ctx.method} ${ctx.path}`
            }
            ctx.status = 500
        }
    }

}

module.exports = catchError