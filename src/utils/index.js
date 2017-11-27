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

export {
    setPasswordCrtpto,
    setRandomId
}

