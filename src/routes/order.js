import express from 'express'
import Order from '../controller/order/order'
const router = express.Router()

router.post('/addOrder', Order.addOrder)

router.get('/addOrder', Order.addOrder) //测试

export default router
