import mongoose from 'mongoose'
const Schema = mongoose.Schema;

const categorySchema = new Schema({
    
    //所属店铺
    shop_name : {type : String, unique : true, required : true},
    shopId : {type : String, unique : true, required : true},
    
    //所属年份
    year_name : [
            {
                year_number : {type : String, required : true},
                sub_category : {type : Array, required : true}
            }
    ]

})

const Category = mongoose.model('Category', categorySchema)

export default Category
