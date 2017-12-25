import crypto from 'crypto' 
import config from 'config-lite'

//明文密码加密,暂时这样设置后期修改
const setPasswordCrtpto = (val) => {
    var hash = crypto.createHmac('sha256', config.cryptoSecret)
                     .update(val)
                     .digest('hex')
    return hash
}

//随机id生成,pre 为前缀默认空, len为长度默认16位
const setRandomId = (pre = '', len = 16) =>{
    let res = ''
    for( var i = 0; i < len; i ++){
        var num = Math.floor(Math.random()*10).toString()
        res += num
    }
    return pre + res
}   


const ObjectStringToJson = (data) => {
    for (let i in data){
        data[i] = JSON.parse(data[i])
    }
    return data
}

//修改季节字段返回
const season_get = (val) => {
    let season_name = ''
    switch(val){

        case 'spring' : 
            season_name = '春季'
            break

        case 'summer' : 
            season_name = '夏季'
            break

        case 'autumn' :
            season_name = '秋季'
            break

        case 'winter' :
            season_name = '冬季'
            break

        default :
            season_name = '字段错误'
    }

    return season_name
}

export {
    setPasswordCrtpto,
    setRandomId,
    ObjectStringToJson,
    season_get
}

