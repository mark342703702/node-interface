import mongoose from 'mongoose'
const Schema = mongoose.Schema;

//小时代姑娘
const girlSchama = new Schema({

    //职员姓名
    girl_name : { type: String, required: true},

    //职员电话
    phone : {type : String,  unique: true, required : true },

    //工号
    girlId : {type: String, unique: true, required : true},

    //入职日期
    create_time : {type : Date, default : Date.now},

    //所属店铺
    shop : {
        shopId : {type : String, required : true},
        shop_name : {type : String, required : true}
    }

})

const Girl = mongoose.model('Girl', girlSchama)

export default Girl