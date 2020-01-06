const Router = require('koa-router')

const { Types } = require('../../models/types')
const { Articles } = require('../../models/articles')

const router = new Router({
    prefix:'/v1/article'
})

const {
    ArticleTypeValidator
} = require('./../../validators/validator')

const { Auth } = require('./../../../middlewares/auth')


/* 获取 articles 类型列表  */
router.get('/types',new Auth().m, async (ctx) => {
    const types = await Types.getTypes()
    ctx.body = types
})
/* 根据 type类型 获取该类型article列表  */
// router.get('/types/:type',new Auth().m, async (ctx) => {
//     const v = await new ArticleTypeValidator().validate(ctx)
//     const articleList = await Articles.getArticleList(v.get('path.type'))
//     ctx.body = articleList
// })
// router.get('/types/:type/:page',new Auth().m, async (ctx) => {
//     const v = await new ArticleTypeValidator().validate(ctx)
//     let page = parseInt(v.get('path.page')) 
//     const articleList = await Articles.getArticleList(v.get('path.type'),page)
//     ctx.body = articleList
// })
router.get('/types/:type',new Auth().m, async (ctx) => {
    const v = await new ArticleTypeValidator().validate(ctx)
    let page = parseInt(v.get('query.page')) 
    let limit = parseInt(v.get('query.limit'))
    const articleList = await Articles.getArticleList(v.get('path.type'),page,limit)
    ctx.body = articleList
})

module.exports = router