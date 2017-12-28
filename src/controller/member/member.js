import MemberModel from '../../models/member/member'
import {setRandomId, setPasswordCrtpto} from '../../utils/index'

class Member {
	//增加会员
	async AddMember(req, res, next){
		
		let {member_name, phone} = req.body
		
		let params = {
			member_name,
			phone,
			memberId : setRandomId('mem', 16)
		}

		
		try{
			
			const result = await MemberModel.create(params)
			res.json({
				status : 0,
				message : '添加会员成功',
				result
			})

		}catch(err){

			res.json({
                status: 1,
                message: '添加会员失败',
                err
			})
			
		}

	}

	async getMember(req, res, next){
		let pageSize = parseInt(req.query.pageSize)
        let currentPage = parseInt(req.query.currentPage)
		let pageNum = (currentPage-1)*pageSize
		try{
            const result = await MemberModel.find({}).limit(pageSize).skip(pageNum)
            res.json({
                status : 0,
                message : '获取会员成功',
                result
            })
        }catch(err){
            res.json({
                status : 1,
                message : '获取会员失败',
                result
            })
        }
	}

	async getMemberCount(req, res, next){
		try{
			const count = await MemberModel.count()
			res.json({
				status : 0,
				message : '获取会员数量成功',
				count
			})
		}catch(err){
			res.json({
				status : 1,
				message : '获取会员数量失败',
				err
			})
		}
	}

	
	

	//精确查找会员(根据会员id)
	async FindOneMember(req, res, next){
		let params = {
			'memberId' : 'mem6208592058707607'
		}

		try{

			const result = await MemberModel.find(params)
			res.json({
				status : 0,
				message : '查询会员成功',
				result : result
			})

		}catch(err){

			res.json({
				status : 1,
				message : '查询会员失败',
				err : err
			})

		}
	}

}

export default new Member()