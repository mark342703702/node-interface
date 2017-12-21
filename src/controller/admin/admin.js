import AdminModel from '../../models/admin/admin'
import {setRandomId, setPasswordCrtpto} from '../../utils/index'

class Admin {

    //增加管理员
    async addAdmin(req, res, next){
        let {QQ, admin_name, password, AdminId} = req.body
        let params = {
            QQ,
            admin_name,
            password,
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


    //登录
    async login(req, res, next){
        let userQQ = req.body.QQ;
        let userPassword = req.body.password;

        try {
            const result = await AdminModel.findOne({QQ : userQQ})
            if( result.password === setPasswordCrtpto(userPassword)){
                res.json({
                    status : 0,
                    message : '登录成功'
                })
            }else{
                res.json({
                    status : 1,
                    message : '用户密码或者QQ不对'
                })
            }
        }catch(err){
                res.json({
                    status : 2,
                    message : '登录失败',
                    err : err
                })
        }

    }
    
}

export default new Admin()