import express from 'express'
import Category from '../controller/product/category'
const router = express.Router()

router.get('/getCategory', Category.getCategory)
router.get('/addCategory', Category.addCategory)
router.get('/addYearToCategory', Category.addYearToCategory)

export default router