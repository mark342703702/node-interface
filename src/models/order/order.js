import mongoose from 'mongoose'
const Schema = mongoose.Schema;

//订单
const orderSchema = new Schema({
    //订单id
    orderId : {type: String, unique: true, required : true},

    //售出商品
    soldGoods : [
                {
                    productId : {type : String, required: true},
                    product_name : {type : String},
                    current_sale_price : {type : Number, min : 0, required : true},
                    buyin_price : {type : Number, min : 0, required : true},
                    goodsNumber : {type : Number, min : 1, required : true},
                    goodsTotal : {type : Number, min : 0, required : true}
                }
    ],

    //退回商品
    returnGoods : [
                {
                    productId : {type : String, required: true},
                    product_name : String,
                    current_sale_price : {type : Number, min : 0, required : true},
                    buyin_price : {type : Number, min : 0, required : true},
                    goodsNumber : {type : Number, min : 1, required : true},
                    goodsTotal : {type : Number, max : 0, required : true}
                }
    ],

    //创建时间
    create_time : {type : Date, default : Date.now},
    
    //销售员
    saler : {
        girl_name : { type: String, required: true},
        girlId : {type: String, required : true}
    },
    
    //所属店铺
    shop : {
        shopId : {type : String, required : true},
        shop_name : {type : String, required : true}
    }

})

const Order = mongoose.model('Order', orderSchema)

export default Order