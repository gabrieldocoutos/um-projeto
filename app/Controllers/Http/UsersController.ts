import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'

export default class UsersController {
  public async index() {
    return User.query().preload('roles')
  }

  public async create(ctx: HttpContextContract) {
    console.log(ctx.request.hasBody)
    const user = await User.create(ctx.request.all())
    return user
  }

  public async me(ctx) {
    console.log(ctx.auth.user)
    return ctx.auth.user
  }

  public async login(ctx: HttpContextContract) {
    const email = ctx.request.input('email')
    const password = ctx.request.input('password')
    console.log({ email, password })
    const token = await ctx.auth.use('api').attempt(email, password)
    return token.toJSON()
  }
}
