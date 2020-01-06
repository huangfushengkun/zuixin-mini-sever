
const { flatten } = require('lodash')
const { Op } = require('sequelize')

const { Music, Movie, Sentence } = require('./classic')
const { Articles } = require('./articles')

class Art {
    // constructor () {
    // }
    static async getDetail (art_id,type,uid) {
        const { Favor } = require('./favor')
        const art = await Art.getData(art_id,type)
        const like_status = await Favor.userLikeIt(art_id,type,uid)
        art.setDataValue('like_status',like_status)
        return art
        
    }

    static async getData (art_id, type,useScope=true) {
        let art = null   // 接收 查询结果
        const finder = {
            where: {
                id:art_id
            }
        }
        const scope = useScope ? 'bh' :null
        switch (type) {
            case 100:
                art = await Movie.scope(scope).findOne(finder)
                break
            case 200:
                art = await Music.scope(scope).findOne(finder)
                break
            case 300:
                art = await Sentence.scope(scope).findOne(finder)
                break
            case 400:
                art = await Articles.scope(scope).findOne(finder)
                break
            default:
                break
        }
        return art
    }

    static async getList (artInfoList) {
        const artInfoObj = {
            100: [],
            200: [],
            300: [],
            400: []
        }
        for(let artInfo of artInfoList) {
            artInfoObj[artInfo.type].push(artInfo.art_id)
        }
        const arts = []
        for (let key in artInfoObj) {
            const ids = artInfoObj[key]
            if (ids.length===0) {
                continue  //跳出当前循环 进行下一次循环
            }
            key = parseInt(key)  //取出的key 是string类型 转为number 后使用
            arts.push(await Art._getListByType(ids, key))
        }
        return flatten(arts)  // flatten 引入 展平 二维数组
    }

    static async _getListByType(ids,type) {
        let arts = null
        const finder = {
            where:{
                id:{
                    [Op.in]:ids
                }
            }
        }
        const scope = 'bh'
        switch (type) {
            case 100:
                arts = await Movie.scope(scope).findAll(finder)
                break
            case 200:
                arts = await Music.scope(scope).findAll(finder)
                break
            case 300:
                arts = await Sentence.scope(scope).findAll(finder)
                break
            case 400:
                arts = await Articles.scope(scope).findAll(finder)
                break
            default:
                break
        }
        return arts
    }
}
module.exports = {
    Art
}