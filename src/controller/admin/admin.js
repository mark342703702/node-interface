import AdminModel from '../../models/admin/admin'

class Admin {

    //注册
    async register(req, res, next){
        const params = {
            user_name : 'asd'
        }
        try {
            const res1 = await AdminModel.find(params)
            res.json({
                status: 0,
                message: '表单信息错误',
                result : res1
            })
        }catch(err){
            res.json({
                status: 0,
                message: '表单信息错误'
            })
        }
    }
}

export default new Admin()