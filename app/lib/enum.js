

function isThisType (val) {
    for (let key in this) {
        if (this[key] == val) {
            return true
        }
    }
    return false
}
const LoginType = {
    USER_MINI_PROGRAM:100,  // 微信用户
    USER_EMAIL:101,     // 普通用户
    USER_MOBILE:102,    // 手机用户
    ADMIN_EMAIL:200,    // 管理员
    isThisType
}

const ArtType = {
    MOVIE:100,
    MUSIC:200,
    SENTENCE:300,
    ARTICLE:400,
    BOOK:500,
    isThisType
}

const ArticlesType = {
    MUSIC: 5,
    Labs: 6,
    Reading: 1,
    Emotion: 2,
    School: 4,
    Broadcast: 3,
    isThisType
}

module.exports = {
    LoginType,
    ArtType,
    ArticlesType
}