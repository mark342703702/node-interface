import admin from './admin'
import member from './member'
import shop from './shop'

export default app => {
    app.use('/admin', admin)
    app.use('/member', member)
    app.use('/shop', shop)
}
