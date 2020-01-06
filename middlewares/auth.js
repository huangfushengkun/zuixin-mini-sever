
const basicAuth = require('basic-auth')
const jwt = require('jsonwebtoken')
class Auth {
    constructor (level) {
        this.level = level || 1  // api 等级
        Auth.USER = 8
        Auth.ADMIN = 16
        Auth.SUPER_ADMIN = 32
    }
    get m() {
        return async (ctx, next) => {
            const userToken = basicAuth(ctx.req)
            let errorMsg = 'token 不合法！'
            if (!userToken || !userToken.name) {
                throw new global.errs.Forbbiden(errorMsg)
            }
            /* 校验token */
            try {
                var decode = await jwt.verify(userToken.name,global.config.security.secretKey)
            } catch (error) {
                // 1. token 不合法
                // 2. token 过期
                if (error.name == 'TokenExpiredError') {
                    errorMsg = 'token 已过期，请重新登录！'
                    // throw new global.errs.Forbbiden('token 已过期，请重新登录！')
                }
                // throw new global.errs.Forbbiden('token 已过期，请重新登录！')
                throw new global.errs.Forbbiden(errorMsg)
            }

            // 验证接口权限
            if(decode.scope < this.level) {
                throw new global.errs.Forbbiden('权限不足！')
            }

            // token 检测
            //  令牌传递  token body header 约定 
            // 从令牌中获取 存入的  uid scope  并保存到ctx中
            ctx.auth = {
                uid:decode.uid,
                scope:decode.scope
            }
            // 调用后续中间件
            await next()
        }

    }

    static verifyToken  (token) {
        try {
            jwt.verify(token,global.config.security.secretKey)
            return true
        }
        catch (error) {
            return false
        }
    }

}

module.exports = { Auth }