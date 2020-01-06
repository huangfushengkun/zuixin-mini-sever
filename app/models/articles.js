const { sequelize } = require('../../core/db')

const { Sequelize, Model } = require('sequelize')

class Articles extends Model {
    static async getArticleList(type,currentPage=1,pageSize=10) {
        let articleList = await Articles.findAll({
            where:{
                type_id:type
            },
            raw:true,
            offset:(currentPage - 1) * pageSize,
            limit:pageSize
        })
        return articleList
    }
}

Articles.init({
    title:Sequelize.STRING,
    play_time:Sequelize.INTEGER,
    author:Sequelize.STRING,
    podcast:Sequelize.STRING,
    duration:Sequelize.STRING,
    img_url:Sequelize.STRING,
    mp3_url:Sequelize.STRING,
    content:Sequelize.STRING,
    labels:Sequelize.STRING,
    created_time:Sequelize.STRING,
    type_id:Sequelize.INTEGER,
    type:Sequelize.INTEGER,
    fav_nums:Sequelize.INTEGER,
},{
    sequelize,
    tableName: 'articles'
})
module.exports = {
    Articles
}
