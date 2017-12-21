import mongoose from 'mongoose'
const Schema = mongoose.Schema;
import {setPasswordCrtpto} from '../../utils/index'

/*
用户通过QQ和密码进行登录
*/

//管理员
const adminSchema = new Schema({
    //管理员id
    AdminId : {type: String, unique: true, required : true},
    //姓名
    admin_name: { type: String, required: true},
    //密码
    password: { type: String, required: true, set : setPasswordCrtpto},
    //QQ
    QQ : { type: String, unique: true, required: true},
    //创建时间
	create_time: {type : Date, default : Date.now},
    //Admin:普通管理、 superAdmin:超级管理员
	status: { type : String, enum : ['Admin', 'superAdmin'], required: true, default : 'Admin'}
})

const Admin = mongoose.model('Admin', adminSchema);

export default Admin
