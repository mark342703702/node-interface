import express from 'express'
import Category from '../controller/product/category'
import Product from '../controller/product/product'
const router = express.Router()

router.get('/getCategory', Category.getCategory)
router.get('/addCategory', Category.addCategory)
router.get('/addYearToCategory', Category.addYearToCategory)

router.post('/addProduct', Product.addProduct)
router.get('/getProduct', Product.getProduct)
router.post('/updateProduct', Product.updateProduct)
router.post('/deleteProduct', Product.deleteProduct)
router.get('/getProductCount', Product.getProductCount)
router.get('/getProductMisty', Product.getProductMisty)

export default router