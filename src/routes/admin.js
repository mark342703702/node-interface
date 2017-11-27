import express from 'express'
import Admin from '../controller/admin/admin'
const router = express.Router()

router.get('/removeAdmin', Admin.RemoveAdmin)
router.get('/createAdmin', Admin.CreateAdmin)

export default router