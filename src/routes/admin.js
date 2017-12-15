import express from 'express'
import Admin from '../controller/admin/admin'
const router = express.Router()

router.get('/removeAdmin', Admin.RemoveAdmin)
router.get('/createAdmin', Admin.CreateAdmin)
router.post('/findAdmin', Admin.findAdmin)
router.get('/findAdmin', Admin.findAdmin)
router.post('/login', Admin.login)

export default router