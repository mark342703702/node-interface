import ProductModel from '../../models/product/product'
import ShopModel from '../../models/shop/shop'
import {season_get} from '../../utils/index'

class Product {
    
    //添加商品
    async addProduct(req, res, next){
        let {
            productId, product_name, stock,
            buyin_price, shopId, year, season, style
        } = req.body

        let shopResult = await ShopModel.findOne({shopId}, {shop_name : 1})
        let shop_name = shopResult.shop_name

        let params = {
            productId,
            product_name,
            stock,
            buyin_price,
            sale_price : buyin_price,
            year,
            season,
            style,
            shop : {
                shopId : shopId,
                shop_name : shop_name
            }
        }

        try{
            const result = await ProductModel.create(params)
            res.json({
                status : 0,
                message : '添加商品成功',
                result
            })
        }catch(err){
            res.json({
                status : 1,
                message : '添加商品失败',
                err
            })
        }

    }

    //获取商品数据
    async getProduct(req, res, next){
        try{
            const result = await ProductModel.find({})
            result.map( (item) => {
                item.season = season_get(item.season)
                return item
            })
            res.json({
                status : 0,
                message : '获取商品成功',
                result
            })
        }catch(err){
            res.json({
                status : 1,
                message : '获取商品失败',
                result
            })
        }
    }
}

export default new Product()


