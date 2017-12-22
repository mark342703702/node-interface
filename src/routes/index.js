import admin from './admin'
import member from './member'
import shop from './shop'
import product from './product'

export default app => {
    app.use('/admin', admin)
    app.use('/member', member)
    app.use('/shop', shop)
    app.use('/product', product)
}
