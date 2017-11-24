import mongoose from 'mongoose'
const Schema = mongoose.Schema;

const adminSchema = new Schema({
    //姓名
    user_name: { type: String, required: true},
    //密码
    password: { type: String, required: true},
    //QQ
    QQ : { type: String, unique: true, required: true},
    //创建时间
	create_time: {type : Date, default : Date.now},
    //Admin:普通管理、 superAdmin:超级管理员
	status: { type : String, enum : ['Admin', 'superAdmin'], required: true}
})

const Admin = mongoose.model('Admin', adminSchema);

export default Admin
