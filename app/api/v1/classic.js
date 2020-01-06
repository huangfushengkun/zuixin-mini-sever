const Router = require('koa-router')
const { Flow } = require('../../models/flow')
const { Art } = require('../../models/art')
const { Favor } = require('../../models/favor')
const { Types } = require('../../models/types')
const router = new Router({
    prefix:'/v1/classic'
})

const {
    PositiveIntegerValidator,
    LikeValidator
} = require('./../../validators/validator')

const { Auth } = require('./../../../middlewares/auth')

/* 获取最新一期的期刊信息 */
router.get('/latest', new Auth().m, async (ctx) => {

    const flow = await Flow.findOne({
        order:[
            ['index','DESC']  // index 字段排序  DESC 倒序
        ]
    })
    const art = await Art.getData(flow.art_id, flow.type)
    const likeLatest = await Favor.userLikeIt(flow.art_id, flow.type,ctx.auth.uid)
    art.setDataValue('index',flow.index)
    /* 添加 like_status 字段   当前用户是否喜欢了该期刊  */ 
    art.setDataValue('like_status',likeLatest)
    ctx.body = art
})

/* 获取下一期期刊信息 */
router.get('/:index/next', new Auth().m, async (ctx) => {
    const v = await new PositiveIntegerValidator().validate(ctx,{
        id:'index'
    })
    const index = v.get('path.index')
    const art = await Flow.getNextOrPrevous(index+1,ctx.auth.uid)
    ctx.body = art
})

/* 获取上一期期刊信息 */
router.get('/:index/previous', new Auth().m, async (ctx) => {
    const v = await new PositiveIntegerValidator().validate(ctx,{
        id:'index'
    })
    const index = v.get('path.index')
    const art = await Flow.getNextOrPrevous(index-1,ctx.auth.uid)
    ctx.body = art
})

/* 获取某一期期刊详细信息 */
router.get('/:type/:id', new Auth().m, async (ctx) => {
    const v = await new LikeValidator().validate(ctx)
    const type = parseInt(v.get('path.type')) 
    const id = v.get('path.id')
    const artDetail = await Art.getDetail(id,type,ctx.auth.uid)
    ctx.body = artDetail
})

/* 获取某期期刊的点赞信息 */
router.get('/:type/:id/favor', new Auth().m, async (ctx) => {
    const v = await new LikeValidator().validate(ctx)
    const type = parseInt(v.get('path.type')) 
    const id = v.get('path.id')

    const artDetail = await Art.getData(id,type)
    const like_status = await await Favor.userLikeIt(id,type,ctx.auth.uid)
    ctx.body = {
        fav_nums:artDetail.fav_nums,
        like_status
    }
})

/* 获取用户喜欢期刊列表 */
router.get('/favor', new Auth().m, async (ctx) => {
    const favorList = await Favor.getMyfavorList(ctx.auth.uid)
    ctx.body = favorList
})

/* 获取 articles 类型列表  */
// router.get('/types',new Auth().m, async (ctx) => {
//     const types = await Types.getTypes()
//     ctx.body = types
// })

module.exports = router