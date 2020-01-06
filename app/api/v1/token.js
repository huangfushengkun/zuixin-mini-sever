const Router = require('koa-router')
const { TokenValidator, NotEmptyValidator } = require('./../../validators/validator')
const { LoginType } = require('./../../lib/enum')
const { User } = require('./../../models/user')

const { generateToken } = require('./../../../core/util')
const { Auth } = require('./../../../middlewares/auth')
const { WXManager } = require('./../../services/wx')

const router = new Router({
    prefix:'/v1/token'
})
router.post('/', async (ctx) => {
    const v = await new TokenValidator().validate(ctx)
    // await
    let token;
    switch (v.get('body.type')) {
        case LoginType.USER_EMAIL:
            token = await emailLogin(v.get('body.account'),v.get('body.secret'))
            break;
        case LoginType.USER_MINI_PROGRAM:
            token = await WXManager.codeToToken(v.get('body.account'))

            break;
        case LoginType.ADMIN_EMAIL:
            break
        default:
            throw new global.errs.ParameterException('没有相应的处理函数！')
    }
    ctx.body = {
        token
    }

})

router.post('/verify', async (ctx) => {
    const v = await new NotEmptyValidator().validate(ctx)
    let token = v.get('body.token')
    ctx.body = {
        is_valid:Auth.verifyToken(token)
    }
    
})

async function emailLogin (account,secret) {
    const user = await User.VerifyEmailPassword(account,secret)



    return token = generateToken(user.id, Auth.USER)
}

module.exports = router