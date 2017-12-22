import mongoose from 'mongoose'
const Schema = mongoose.Schema;

//设置售价
var sale_price_set = function(val){
   val = Math.round(val * 1.6);
   return (Math.floor(val / 10)*10 + 9);
}

//商品
var productSchema = new Schema({
    //商品编号
    productId : {type : String, unique: true, required: true},

    //商品描述
    product_name : {type : String, required: true},

    //库存(最小为零)
    stock : {type : Number, min:0, max : 1000, required : true},

    //进价
    buyin_price : {type : Number, min : 0, required : true},

    //售价
    sale_price : {type : Number, min : 0, required : true, set : sale_price_set},

    //所属店铺
    shopId : {type : String, required : true},

    //所属年份
    year : {type : String, required : true},

    //所属季节
    season :  {type : String, enum : ['spring', 'summer', 'autumn', 'winter'], required: true},

    //所属类型
    style : {type : String, required: true}
   
});

const Product = mongoose.model('Product', productSchema)

export default Product