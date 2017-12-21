import GirlModel from '../../models/admin/girl'
import {setRandomId} from '../../utils/index'

class Girl {
    async addGirl(req, res, next){
        let {girl_name, phone, shop} = req.body

        let params = {
            girl_name,
            phone,
            shop,
            girlId : setRandomId('gir', 16)
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
}

export default new Girl()