import mongoose from 'mongoose'
const Schema = mongoose.Schema;

//会员
const memberSchema = new Schema({
    
    //会员id
    memberId : {type: String, unique: true, required : true},

    //电话
    phone : {type : String,  unique: true, required : true },

    //会员姓名
    member_name: { type: String, required: true},

    //余额
    account : {type: Number, default : 0, min : 0, max : 10000},

    //创建日期
    create_time : {type : Date, default : Date.now},

    //积分
    points : {type : Number, default : 0, min : 0}
})

const Member = mongoose.model('Member', memberSchema)

export default Member
