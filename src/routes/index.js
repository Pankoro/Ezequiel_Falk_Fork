import Router from 'koa-router'
import getHealth from './health/health'
import register from './register/register'

const router = new Router()

router.get('/health', getHealth)

router.post('/api/event/threshold/:sec', register.RegisterEvent)

export default router
