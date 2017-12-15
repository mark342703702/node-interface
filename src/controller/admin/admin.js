import AdminModel from '../../models/admin/admin'
import {setRandomId, setPasswordCrtpto} from '../../utils/index'

class Admin {

    //增加管理员
    async CreateAdmin(req, res, next){
        let params = {
            QQ : '342703702',
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

    //找到管理员
    async findAdmin(req, res, next){
        let id = req.body.id;
        console.log(req.body)
        let params = {
            QQ : '223s'
        }
        try{
            const result = await AdminModel.findOne(params) 
            res.json({
                status: 0,
                message: '查询管理员成功',
                result : result
            })
        }catch(err){
            res.json({
                status: 1,
                message: '查询管理员失败',
                err : err
            })
        }
    }

    //登录
    async login(req, res, next){
        let userQQ = req.body.QQ;
        let userPassword = req.body.password;
        console.log(userQQ)
        try {
            const result = await AdminModel.findOne({QQ : userQQ})
            if( result.password === setPasswordCrtpto(userPassword)){
                res.json({
                    status : 1,
                    message : '登录成功'
                })
            }else{
                res.json({
                    status : 0,
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