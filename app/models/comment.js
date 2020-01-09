const { sequelize } = require('./../../core/db')
const { Model, Sequelize } = require('sequelize')
const { Art } = require('./art')


class Comment extends Model {

    static async addComment (user_id,nickname,art_id,type, content,avatar_url) {
        const comment = await Comment.findOne({
            where: {
                content
            }
        })
        if (!comment) {
            return await Comment.create({
                user_id,
                nickname,
                avatar_url,
                art_id,
                type,
                content
            })
        } else {
            return await comment.increment('like_nums', {
                by: 1
            })
        }

    }

    static async getComments(art_id,type) {
        const comments = Comment.findAll({
            order:[
                ['id','DESC']  // index 字段排序  DESC 倒序
            ],
            where: {
                art_id,
                type
            }
        })
        return comments
    }

    static async getMyCommentList(user_id) {
        const myCommentlist = await Comment.findAll({
            // order:[
            //     ['id','DESC']  // index 字段排序  DESC 倒序
            // ],
            where: {
                user_id
            }
        })
        if(!myCommentlist) {
            throw new global.errs.NotFound()
        }
        return await Art.getList(myCommentlist)
        // return myCommentlist
    }

}
Comment.prototype.exclude = ['book_id','id']

Comment.init({
    content: Sequelize.STRING(12),
    like_nums: {
        type:Sequelize.INTEGER,
        defaultValue:0
    },
    dislike_nums: {
        type:Sequelize.INTEGER,
        defaultValue:0
    },
    art_id:Sequelize.INTEGER,
    user_id:Sequelize.INTEGER,
    type:Sequelize.INTEGER,
    nickname: Sequelize.STRING,
    avatar_url: Sequelize.STRING,
},{
    sequelize,
    tableName: 'comment'
})


module.exports = {
    Comment
}