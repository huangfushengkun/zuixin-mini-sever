const { sequelize } = require('../../core/db')

const { Sequelize, Model } = require('sequelize')
const { Art } = require('./art')
const { Favor } = require('./favor')
class Flow extends Model {
    static async getNextOrPrevous (index,uid) {
        const flow = await Flow.findOne({
            where:{
                index
            }
        })
        if (!flow) {
            throw new global.errs.NotFount()
        }
        let art = await Art.getData(flow.art_id,flow.type)
        const likeNext = await Favor.userLikeIt(flow.art_id,flow.type,uid)
        art.setDataValue('index',flow.index)
        art.setDataValue('like_status',likeNext)
        return art
    }
}

Flow.init({
    index: Sequelize.INTEGER, // 期刊序号
    art_id: Sequelize.INTEGER, // 期刊id
    type: Sequelize.INTEGER, // 期刊类型
    // type:100 Movie
    // type:200 Music
    // type:300 Sentence
    // type:400 articles
},{
    sequelize,
    tableName: 'flow'
})
module.exports = {
    Flow
}




