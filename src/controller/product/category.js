import CategoryModel from '../../models/product/category'
import {sub_category} from '../../initData/category'
class Category {
    async getCategory(req, res, next){
        try {
            const result = await CategoryModel.find()
            res.json({
                status : 0,
                message : '查询分类成功',
                result
            })
        } catch (err) {
            res.json({
                status : 1,
                message : '查询分类失败',
                err
            })
        }
    }

    async addCategory(req, res, next){
        let params = {
            shop_name : 'adiads',
            shopId : '1234',
            year_name : {
                year_number : '2017',
                sub_category : sub_category
            }
        }
        try {
            const  result = await CategoryModel.create(params)
            res.json({
                status : 0,
                message : '添加分类成功',
                result
            })
        } catch (err) {
            res.json({
                status: 1,
                message: '添加分类失败',
                err
            })
        }
    }

    async addYearToCategory(req, res, next){
        let params = {
            shopId : '1234'
        }

        let update = {
            $push : {
                year_name : {
                    year_number : 2018,
                    sub_category : sub_category
                }
            }
        }

        try{
            const result = await CategoryModel.update(params, update)  
            res.json({
                status : 0,
                message : '添加年份分类成功',
                result
            })
        }catch(err){
            res.json({
                status: 1,
                message: '添加年份分类失败',
                err
            })
        }
    }
}

export default new Category()