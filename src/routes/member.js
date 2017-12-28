import express from 'express'
import Member from '../controller/member/member'
const router = express.Router()

router.post('/addMember', Member.AddMember)
router.get('/findOneMember', Member.FindOneMember)
router.get('/getMember',Member.getMember)
router.get('/getMemberCount', Member.getMemberCount)
export default router