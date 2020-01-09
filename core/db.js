const Sequelize = require('sequelize')
const { dbname, host, port, user, password } = require('./../config/config').database
const sequelize = new Sequelize(dbname,user,password,{
    dialect:'mysql',  // 安装驱动 mysql2 
    host,
    port,
    logging:false, //命令行显示具体操作
    timezone: '+08:00', // 时区设置
    define: {
        timestamps:true,   // 设置为 false 隐藏创建时间 等字段 create_time update_time delete_time
        paranoid:true,
        createdAt:'created_at',
        updatedAt:'updated_at',
        deletedAt:'deleted_at',
        underscored:true,
        scopes: {
            bh: {
                attributes: {
                    exclude: ['created_at', 'updated_at', 'deleted_at']
                }
            }
        }
    }
})

sequelize.sync({
    force:false  // true 启动服务 清空数据库
})

module.exports = {
    sequelize
}