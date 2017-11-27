import mongoose from 'mongoose'
const Schema = mongoose.Schema;

//会员
const memberSchema = new Schema({
    //会员姓名
    member_name: { type: String, required: true},
    //电话
    phone : {type : String, required : true },
    //会员id
    memberId : {type: String, unique: true, required : true},
    //余额
    account : {type: Number, default : 0, min : 0, max : 10000}
})

const Member = mongoose.model('Member', memberSchema);

export default Member
