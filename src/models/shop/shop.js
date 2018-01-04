import mongoose from 'mongoose'
const Schema = mongoose.Schema;

//店铺
var shopSchema = new Schema({
    //店铺id
    shopId : {type : String, unique: true, required : true},
    //店铺名称
    shop_name : {type : String, unique: true, required : true},
    //创建时间
    create_time : {type : Date, default : Date.now},
    //下属职员
    girl : {type : Array, default : []}
})

const Shop = mongoose.model('Shop', shopSchema)

export default Shop