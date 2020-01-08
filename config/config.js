module.exports = {
    //prod
    environment:"dev",
    database:{
        dbname:'wolong',
        host:'localhost',
        port:3306,
        user:'root',
        // password: '7521SUNhuiyan!'
        password:'7521huangfu'
    },
    security: {
        secretKey:'huangfu',
        expiresIn:60*60*24
    },
    wx:{
        appId:'wxb0c6e76834dffc68',
        appSecret:'9eea58e0bcc6a1f68c7d6671b6293653',
        loginUrl:'https://api.weixin.qq.com/sns/jscode2session?appid=%s&secret=%s&js_code=%s&grant_type=authorization_code'
    }
}