import GirlModel from '../../models/admin/girl'
import {setRandomId} from '../../utils/index'

class Girl {

    //添加职员
    async addGirl(req, res, next){
        let {girl_name, phone, shop, girlId} = req.body

        let params = {
            girl_name,
            phone,
            shop,
            girlId
        }

        try{
            const result = await GirlModel.create(params)
            res.json({
                status : 0,
                message : '添加职员成功',
                result
            })
        }catch(err){
            res.json({
                status: 1,
                message: '添加职员失败',
                err
            })
        }

    }

    //获取职员数据
    async getGirl(req, res, next){

        try{
            const result = await GirlModel.find({})

            res.json({
				status : 0,
				message : '获取职员数量成功',
				result
            })
            
        }catch(err){

            res.json({
				status : 1,
				message : '获取职员数量失败',
				err
			})
        }

    }
}

export default new Girl()