const { sequelize } = require('../../core/db')

const { Sequelize, Model } = require('sequelize')

const { Art } = require('./art')


class Favor extends Model {

    static async like (art_id, type, uid) {
        // 1. 添加一条记录
        // 2. 修改 fav_nums 数据
        // 数据库事务  保证数据一致性  ** ACID 原子性 一致性 隔离性 持久性 ** 
        const favor = await Favor.findOne({
            where: {
                art_id,
                type,
                uid
            }
        })
        if (favor) {
            throw new global.errs.LikeError()
        }
        return sequelize.transaction( async t => {
            await Favor.create({
                art_id,
                type,
                uid
            },{transaction:t})  //  transaction  注意 该字段位置
            const art = await Art.getData(art_id,type,false)  //第三个参数 false 查询是不用scope
            await art.increment('fav_nums',{by:1,transaction:t})  // 数据表中字段数据加一
        })
    }

    static async disLike (art_id, type, uid) {
        const favor = await Favor.findOne({
            where: {
                art_id,
                type,
                uid
            }
        })
        if (!favor) {
            throw new global.errs.DislikeError()
        }
        return sequelize.transaction( async t => {
            await favor.destroy({
                force:true,
                transaction:t
            })
            const art = await Art.getData(art_id,type,false)  //第三个参数 false 查询是不用scope
            await art.decrement('fav_nums',{by:1,transaction:t})  // 数据表中字段数据加一
        })
    }

    static async userLikeIt (art_id, type, uid) {
        const favor = await Favor.findOne({
            where: {
                art_id,
                type,
                uid
            }
        })
        if (favor) {
            return true
        } else {
            return false
        }
    }

    static async getMyfavorList (uid) {
        const art_ids = await Favor.findAll({
            where:{
                uid
            }
        })
        if(!art_ids) {
            throw new global.errs.NotFound()
        }
        return await Art.getList(art_ids)
    }

}

Favor.init({
    uid: Sequelize.INTEGER,
    art_id:Sequelize.INTEGER,
    type:Sequelize.INTEGER,

},{
    sequelize,
    tableName:'favor'
})
module.exports = {
    Favor
}