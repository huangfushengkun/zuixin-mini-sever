
const bcrypt = require('bcryptjs')

const { sequelize } = require('../../core/db')

const { Sequelize, Model } = require('sequelize')

class User extends Model {
    static async VerifyEmailPassword (email,plainPassword) {
        const user = await User.findOne({
            where: {
                email
            }
        })
        if (!user) {
            throw new global.errs.NotFount('账号不存在')
        }
        // 提交的密码 和 数据库信息对比
        const correct = bcrypt.compareSync(plainPassword,user.password)

        if(!correct) {
            throw new global.errs.AuthFailed('密码不正确！')
        }
        return user
    }

    static async getUserByOpenId (openid) {
        const user = await User.findOne({
            where: {
                openid
            }
        })
        return user
    }

    static async getUserByUserId (id) {
        const user = await User.findOne({
            where: {
                id
            }
        })
        return user
    }

    static async registerByOpenId (openid) {
        return await User.create({
            openid,
            authority:8
        })
    }

}

User.init({
    id:{  // 不写 会自动添加
        type:Sequelize.INTEGER,
        primaryKey:true, //把一个字段设置成主键
        autoIncrement:true
    },
    nickname: Sequelize.STRING,
    email: {
        type:Sequelize.STRING(128),
        unique:true
    },
    password: {
        type: Sequelize.STRING,
        set (val) {
            const salt = bcrypt.genSaltSync(10)  //计算机生成 严（salt） 的成本
            const psw = bcrypt.hashSync(val,salt)
            this.setDataValue('password',psw)  // 指定赋值字段
        }
    },
    openid:{
        type: Sequelize.STRING(64),
        unique:true
    },
    authority:{
        type:Sequelize.INTEGER,
        unique:false,
        allowNull: false
    },
    // gender: Sequelize.STRING,  //性别
    // college:Sequelize.STRING,  // 院系
    // grader: Sequelize.STRING,  // 年级
    // enrollment: Sequelize.STRING, //入学登记时间   Personal information

},{
    sequelize,
    tableName: 'user'
})

module.exports = { User }