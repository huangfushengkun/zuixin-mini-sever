const { sequelize } = require('../../core/db')


const { Sequelize, Model } = require('sequelize')

class Types extends Model {

    static async getTypes () {
        const types = await Types.scope('bh').findAll({
            order:[
                ['id']  //   ['id','DESC']  倒序
            ]
        })
        return types
    }
}

Types.init({
    type:Sequelize.STRING,
    // created_time:Sequelize.STRING,
},{
    sequelize,
    tableName: 'types'
})
module.exports = {
    Types
}
