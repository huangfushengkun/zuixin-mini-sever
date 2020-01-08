
class HttpException extends Error {
    constructor (msg="服务器异常",errorCode=10000,code=400) {
        super()
        this.errorCode = errorCode
        this.code = code
        this.msg = msg
    }
}

class ParameterException extends HttpException {
    constructor (msg, errorCode) {
        super()
        this.code = 400
        this.msg = msg || "参数错误"
        this.errorCode = errorCode || 10000
    }
}

class Success extends HttpException {
    constructor (msg,errorCode) {
        super()
        this.code = 201,
        this.msg = msg || 'ok',
        this.errorCode = errorCode || 0
    }
}

class NotFount extends HttpException {
    constructor (msg,errorCode) {
        super()
        this.code = 404,
        this.msg = msg || '资源未找到',
        this.errorCode = errorCode || 10000
    }
}

class AuthFailed extends HttpException {
    constructor (msg,errorCode) {
        super()
        this.code = 401,
        this.msg = msg || '授权失败',
        this.errorCode = errorCode || 10004
    }
}

class Forbbiden extends HttpException {
    constructor (msg,errorCode) {
        super()
        this.code = 403,
        this.msg = msg || '禁止访问',
        this.errorCode = errorCode || 10005
    }
}

class LikeError extends HttpException {
    constructor (msg,errorCode) {
        super()
        this.code = 400,
        this.msg = msg || '您已经点过赞了！',
        this.errorCode = errorCode || 12001
    }
}

class DislikeError extends HttpException {
    constructor (msg,errorCode) {
        super()
        this.code = 400,
        this.msg = msg || '您已取消点赞了！',
        this.errorCode = errorCode || 12002
    }
}

class UpdateError extends HttpException {
    constructor (msg,errorCode) {
        super()
        this.code = 400,
        this.msg = msg || '昵称更新失败！',
        this.errorCode = errorCode || 15001
    }
}


module.exports = {
    HttpException,
    ParameterException,
    Success,
    NotFount,
    AuthFailed,
    Forbbiden,
    LikeError,
    DislikeError,
    UpdateError
}