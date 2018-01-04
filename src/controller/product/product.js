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
        let pageSize = parseInt(req.query.pageSize)
        let currentPage = parseInt(req.query.currentPage)
        let pageNum = (currentPage-1)*pageSize
        try{
            const result = await ProductModel.find({})
                                             .sort({sale_price : 1})
                                             .limit(pageSize)
                                             .skip(pageNum)
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

    //更新商品信息
    async updateProduct(req, res, next){
        let { productId, product_name, stock, category } = req.body
        let shopId = category[0]
        let shopResult = await ShopModel.findOne({shopId}, {shop_name : 1})
        let shop_name = shopResult.shop_name
        let params = {
            product_name,
            stock,
            year : category[1],
            season : category[2],
            style : category[3],
            shop : {
                shopId,
                shop_name
            }
        }
        try{
            let result = await ProductModel.update({productId}, {$set : params})
            res.json({
                status : 0,
                message : '商品信息更新成功',
                result
            })
        }catch(err){
            res.json({
                status : 1,
                message : '商品更新失败',
                err
            })
        }
    }

    //删除商品
    async deleteProduct(req, res, next){
        let { productId } = req.body
        try{
            let result = await ProductModel.remove({productId})
            res.json({
                status : 0,
                message : '删除商品信息成功',
                result
            })
        }catch(err){
            res.json({
                status : 1,
                message : '删除商品信息失败',
                err
            })
        }
    }

    //获取商品数量
    async getProductCount(req, res, next){
        try{
            const count = await ProductModel.count();
            res.json({
                status: 0,
                message : '获取商品数量成功',
				count
			})
        }catch(err){
            res.json({
                status : 1,
                message : '获取商品数量失败',
                err
            })
        }   
    }

    //模糊查询商品
    async getProductMisty(req, res, next){

        try{
            const result = await ProductModel.find({})

            res.json({
                status: 0,
                message : '模糊查询商品成功',
				result
            })

        }catch(err){

            res.json({
                status : 1,
                message : '模糊查询商品失败',
                err
            })

        }
    }

}

export default new Product()


