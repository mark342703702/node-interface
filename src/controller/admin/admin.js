import AdminModel from '../../models/admin/admin'
import {setRandomId} from '../../utils/index'

class Admin {

    //增加管理员
    async CreateAdmin(req, res, next){
        let params = {
            QQ : '223s',
            user_name : 's',
            password : '123',
            status : 'Admin',
            AdminId : setRandomId('adm', 16)
        }
        try{
            const result = await AdminModel.create(params)
            res.json({
                status: 0,
                message: '添加管理员成功',
                result : result
            })
        }catch(err){
            res.json({
                status: 1,
                message: '添加管理员失败',
                err : err
            })
        }
    }

    //删除管理员 
    async RemoveAdmin(req, res, next){
        let params = {
            QQ : '223s',
            status : 'Admin'
        }
        try{
            const result = await AdminModel.remove(params)
            res.json({
                status: 0,
                message: '删除管理员成功',
                result : result
            })
        }catch(err){
            res.json({
                status: 1,
                message: '删除管理员失败',
                err : err
            })
        }
    }

    
}

export default new Admin()