const util = require('util')
const axios = require('axios')
const { User } = require('./../models/user')
const { generateToken } = require('./../../core/util')
const { Auth } = require('./../../middlewares/auth')
class WXManager {
    static async codeToToken (code) {
        // openid 
        //  code appid appsecret 
        let { loginUrl, appId, appSecret } = global.config.wx
        const url = util.format(loginUrl,appId,appSecret,code)
        const result = await axios.get(url)
        // console.log(result)
        if (result.status !== 200) {
            throw new global.errs.AuthFailed('openid获取失败')
        }
        /* 异常情况处理 */
        const errcode = result.data.errcode
        const errormsg = result.data.errmsg
        if ( errcode ) {
            throw new AuthFailed('openid获取失败'+ errormsg)
        }
        /* 根据得到的openid 查询数据库 */
        let user = await User.getUserByOpenId(result.data.openid)
        if(!user) {
            user = await User.registerByOpenId(result.data.openid)
        }
        /* 生成并返回token */
        return generateToken(user.id, Auth.USER)
    }

}

module.exports = {
    WXManager
}