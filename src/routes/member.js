import express from 'express'
import Member from '../controller/member/member'
const router = express.Router()

router.post('/addMember', Member.AddMember)
router.get('/findMember', Member.FindMember)
router.get('/findOneMember', Member.FindOneMember)

export default router