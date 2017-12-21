import mongoose from 'mongoose'
const Schema = mongoose.Schema;

//订单
const orderSchema = new Schema({
    //订单id
    orderId : {type: String, unique: true, required : true},

    //商品
    goods : [
                {
                    productId : {type : String, required: true},
                    description : String,
                    sale_price : {type : Number, min : 0, required : true},
                    buyin_price : {type : Number, min : 0, required : true}
                }
            ],

    //创建时间
    create_time : {type : Date, default : Date.now},

    //销售员
    saler : {
        girl_name : { type: String, required: true},
        girlId : {type: String, unique: true, required : true}
    },

    //所属店铺
    shop : {
        shopId : {type : String, required : true},
        shop_name : {type : String, required : true}
    }
})