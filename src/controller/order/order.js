import OrderModel from '../../models/order/order'
import GirlModel from '../../models/admin/girl'
import {setRandomId} from '../../utils/index'

class Order {

    //添加订单
    async addOrder(req, res, next){
        let {
            create_time, saler, shop, soldGoods, returnGoods
        } = req.body

        let params = {
            orderId : setRandomId('order', 24),
            shop,
            create_time,
            soldGoods,
            returnGoods,
            saler : {}
        }
        
        try{
            let girlResult = await GirlModel.findOne({girlId : saler})
            params.saler.girl_name = girlResult.girl_name
            params.saler.girlId = girlResult.girlId
            let orderResult = await OrderModel.create(params)
            res.json({
                status : 0,
                message : '订单添加成功',
                orderResult
            })
            
        }catch(err){
            res.json({
                status : 1,
                message : '订单添加失败',
                err
            })
        }
       
    }
}

export default new Order()