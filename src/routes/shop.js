import express from 'express'
import Shop from '../controller/shop/shop'

const router = express.Router()

router.post('/addShop', Shop.addShop)
router.get('/getShop', Shop.getShop)
// router.get('/addGirlToShop', Shop.addGirlToShop)

export default router