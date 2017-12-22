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
				result : result
			})

		}catch(err){

			res.json({
                status: 1,
                message: '添加会员失败',
                err : err
			})
			
		}

	}

	//查找会员
	async FindMember(req, res, next){
		let params = {} 
		try {

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