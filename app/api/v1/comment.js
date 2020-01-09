const Router = require('koa-router')

// const router = new Router()
const { Comment } = require('./../../models/comment')
const { User } = require('./../../models/user')
const { AddCommentValidator } = require('../../validators/validator')
const { Auth } = require('./../../../middlewares/auth')

const router = new Router({
    prefix:'/v1/comment'
})

router.post('/add', new Auth().m, async (ctx, next) => {
    const v = await new AddCommentValidator().validate(ctx)
    const art_id = v.get('body.art_id')
    const type = v.get('body.type')
    const content = v.get('body.content')
    const user_id = ctx.auth.uid
    const user = await User.getUserByUserId(user_id)
    let nickname = user.nickname 
    let avatar_url = user.avatarUrl 
    await Comment.addComment(user_id,nickname,art_id,type,content,avatar_url)
    throw new global.errs.Success()
})


router.get('/mycoments/', new Auth().m, async (ctx,next) => {
    const myCommentList = await Comment.getMyCommentList(ctx.auth.uid)
    ctx.body = myCommentList
})

router.get('/get/:id/:type', new Auth().m, async (ctx, next) => {
    const id = ctx.params.id
    const type = ctx.params.type
    const commentList = await Comment.getComments(id,type)
    ctx.body = commentList
})

module.exports = router