import express  from 'express'
import config  from 'config-lite'
import router from './routes/index'
import session from 'express-session'
import db from './mongodb/db'
import bodyParser from 'body-parser'
const MongoStore = require('connect-mongo')(session)
const app = express()

app.use(bodyParser.urlencoded({extended: true}));

//设置session
app.use(session({
    //设置 cookie 中保存 session id 的字段名称
    name : config.session.key,
    // 通过设置 secret 来计算 hash 值并放在 cookie 中，使产生的 signedCookie 防篡改
    secret : config.session.secret,
    cookie : {
        //过期时间，过期后 cookie 中的 session id 自动删除
        maxAge: config.session.maxAge
    },
    store :new MongoStore({
        url : config.mongodb
    }),
    //强制更新 session
    resave: true,  
    // 设置为 false，强制创建一个 session，即使用户未登录
	saveUninitialized: false 

}))

router(app);

app.listen(config.port, () => {
    console.log(`程序运行在端口3000`)
})
