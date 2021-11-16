import { Response, Request } from 'express'
import EmailService from '../service/EmailService'

const users = [{ name: 'Daniel', email: 'daniel_l0l@hotmail.com' }]

export default {
  async index(req: Request, res: Response) {
    return res.json(users)
  },

  async create(req: Request, res: Response) {
    const emailService = new EmailService()

    emailService.sendMail({
      to: {
        name: 'Daniel medrado',
        email: 'daniel_l0l@hotmail.com'
      },
      message: {
        subject: 'Bme-vindo ao sistema',
        body: 'seja bem-vindo'
      }
    })
    return res.send()
  }
}
