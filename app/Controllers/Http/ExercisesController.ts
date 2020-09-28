import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema } from '@ioc:Adonis/Core/Validator'

import Exercise from 'App/Models/Exercise'

const exerciseSchema = schema.create({
  name: schema.string(),
  muscle_group: schema.string(),
})

export default class ExercisesController {
  public async index() {
    return Exercise.all()
  }
  public async create(ctx: HttpContextContract) {
    const { request } = ctx

    try {
      await request.validate({ schema: exerciseSchema })
      return Exercise.create(request.all())
    } catch (error) {
      return ctx.response.status(400).send(error)
    }
  }

  public async update(ctx: HttpContextContract) {
    const { request, params, response } = ctx

    const id: number = params.id

    if (isNaN(id)) {
      return response.status(400).send({ message: 'invalid parameters!' })
    }

    try {
      await request.validate({ schema: exerciseSchema })

      const exercise: Exercise | null = await Exercise.find(id)

      if (!exercise) {
        return response.status(404).send({ message: 'exercise not found!' })
      }
      return Exercise.updateOrCreate({ id }, request.all())
    } catch (error) {
      return response.status(400).send(error)
    }
  }

  public async delete(ctx: HttpContextContract) {
    const { response, params } = ctx
    const id: number = params.id

    const exercise: Exercise | null = await Exercise.findOrFail(id)

    if (exercise) {
      exercise.delete()

      return { message: 'deleted!' }
    }
    return response.status(404).send({ message: 'exercise not found!' })
  }
}
