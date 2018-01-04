import express from 'express'
import Admin from '../controller/admin/admin'
import Girl from '../controller/admin/girl'

const router = express.Router()

// router.get('/removeAdmin', Admin.RemoveAdmin)

router.post('/addAdmin', Admin.addAdmin)
router.post('/login', Admin.login)

router.post('/girl/addGirl', Girl.addGirl)
router.get('/girl/getGirl', Girl.getGirl)

export default router