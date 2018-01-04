import ShopModel from '../../models/shop/shop'
import {setRandomId, ObjectStringToJson} from '../../utils/index'

class Shop {

    //增加店铺
    async addShop(req, res, next){
        let {shop_name} = req.body
        let params = {
            shop_name,
            shopId : setRandomId('shop', 8)
        }
        
        try{
            const result = await ShopModel.create(params)
            res.json({
                status : 0,
                message : '添加店铺成功',
                result
            })
        }catch(err){
            res.json({
                status : 1,
                message : '添加店铺失败',
                err
            })
        }
    }

    //获取店铺数据
    async getShop(req, res, next){
        let data = req.query
        let {conditions , fields, options} = ObjectStringToJson(data)
        try{
            const result = await ShopModel.find(conditions, fields, options)
            res.json({
                status : 0,
                message : '查询店铺数据成功',
                result
            })
        }catch(err){
            res.json({
                status : 1,
                message : '查询店铺数据失败',
                err
            })
        }
    }

    // async addGirlToShop(req, res, next){

    //     try{
    //         const result = await ShopModel.update({shopId : 'shop66218481'}, {$addToSet : {girl : '1223'}})
    //         res.json({
    //                 status : 0,
    //                 message : '查询店铺数据成功',
    //                 result
    //             })
    //     }catch(err){
    //         res.json({
    //             status : 1,
    //             message : '添加职员到店铺数据失败',
    //             err
    //         })
    //     }
    // }
}

export default new Shop()
