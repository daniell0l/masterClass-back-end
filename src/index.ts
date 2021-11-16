import express from 'express'
import cors from 'cors'
import router from './router'

const app = express()

app.use(cors())

app.use(router)

app.listen(3000, () => console.log('serve is running on port 3000'))
