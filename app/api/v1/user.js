
const Router = require('koa-router')

const { RegisterValidator } = require('./../../validators/validator')
const { User } = require('./../../models/user')  // 导入user
const router = new Router({
    prefix:'/v1/user'  //v1前记得加  ’/‘
})

router.post('/register', async (ctx) => {
        // 注册  接收参数  校验  email username nikename ...
    const v = await new RegisterValidator().validate(ctx)

    // 校验通过 存储数据  model操作数据库 1.导入user
    //2.提取数据
    const user = {
        email: v.get('body.email'),
        nickname: v.get('body.nickname'),
        password: v.get('body.password2'),
        authority:8
    }

    const r = await User.create(user)  //3.保存数据 并返回User模型 
    throw new global.errs.Success()
})

module.exports = router