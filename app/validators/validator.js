
const { LinValidator, Rule }  = require('../../core/lin-validator')
const { User } = require('./../models/user')
const { LoginType, ArtType, ArticlesType } = require('./../lib/enum')

class PositiveIntegerValidator extends LinValidator {
    constructor () {
        super()
        this.id = [
            new Rule('isInt', '需要是正整数',{min:1}),  // 可以定义多个规则  之间&&关系
        ]
    }
}

class RegisterValidator extends LinValidator {
    constructor () {
        super()
        this.email = [
            new Rule('isEmail', '请检查email格式')
        ]
        this.password1 = [
            new Rule('isLength', '密码最少6个字符，最多32位字符',{min:6,max:32}),
            new Rule('matches','密码强度太低','^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]')  //使用正则表达式
        ]
        this.password2 = this.password1
        this.nickname = [
            new Rule('isLength', '昵称不符合规范',{min:4,max:32}),
        ]

    }
        // 自定义校验函数 1.命名必须以validate开头 2. vals 包含所有参数 
    validatePassword(vals) {  
        const psw1 = vals.body.password1
        const psw2 = vals.body.password2
        if (psw1 !== psw2) {
            throw new Error('两个密码必须相同')
        }
    }

    /* 验证email唯一性 */
    async validateEmail (vals) {
        // 1.导入自己创建的模型
        // 2. 获取email 3. 查询数据库
        const email = vals.body.email
        // 4.方法文档可查  查询一个 5. 异步得到结果 async await
        const user = await User.findOne({
            where:{
                email:email
            }
        })
        if (user) {
            throw new Error('该email地址已经存在！')
        }
    }
}

class TokenValidator extends LinValidator {
    constructor () {
        super()
        this.account = [
            new Rule('isLength','不符合账号规则',{
                min:4,
                max:32
            })
        ]
        this.secret = [
            // 可以为空 或不传
            new Rule('isOptional'),
            new Rule('isLength','至少6个字符',{
                min:6,
                max:128
            })
        ]
    }

    validateLoginType(vals) {
        if(!vals.body.type) {
            throw new Error('type是必传参数！')
        }
        if (!LoginType.isThisType(vals.body.type)) {
            throw new Error('type参数不合法！')
        }
    }
}

class NotEmptyValidator extends LinValidator {
    constructor () {
        super()
        this.token = [
            new Rule('isLength','token 不为空',{
                min:1,
                // max:32
            })
        ]
    }
}

class LikeValidator extends PositiveIntegerValidator{
    constructor () {
        super()
        // this.art_id = [
        //     new Rule('isLength','art_id不能为空',{min:1})
        // ]
        this.validateType = checkArtType

    }
}

function checkArtType(vals) {
    let type = vals.body.type || vals.path.type
    if (!type) {
        throw new Error("type是必传参数")
    }
    type = parseInt(type)
    // this.parsed.path.type = type  保存变量 this指代 ClassicValidator 继承了 lin-validator
    // this.parsed.default.type 不用区分type 是path body
    if (!ArtType.isThisType(type)) {
        throw new Error('type参数不合法')
    }
}

/* 验证 articles type */
class ArticleTypeValidator extends LinValidator{
    constructor () {
        super()
        this.page = [
            new Rule('isOptional','',1), // 可以为空 默认值为 1
            new Rule('isInt','必须是正整数',{
                min:1,
            })
        ]
        this.limit = [
            new Rule('isOptional','',10),// 可以为空 默认值为 10
            new Rule('isInt','必须是正整数',{
                min:1,
            })
        ]
        this.validateType = checkArticleType
    }
}

class AddCommentValidator extends LinValidator {
    constructor() {
        super()
        this.content = [
            new Rule('isLength', '必须在1到12个字符之间', {
                min: 1,
                max:12
            })
        ]
    }
}

function checkArticleType(vals) {
    let type = vals.path.type
    if (!type) {
        throw new Error("type是必传参数")
    }
    type = parseInt(type)
    if(!ArticlesType.isThisType(type)) {
        throw new Error('type参数不合法')
    }
}


module.exports = {
    PositiveIntegerValidator,
    RegisterValidator,
    TokenValidator,
    NotEmptyValidator,
    LikeValidator,
    ArticleTypeValidator,
    AddCommentValidator
}