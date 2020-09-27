import { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import { schema } from "@ioc:Adonis/Core/Validator";

import Exercise from "App/Models/Exercise";

const exerciseSchema = schema.create({
  name: schema.string(),
  muscle_group: schema.string(),
});

export default class ExercisesController {
  public async index() {
    return Exercise.all();
  }
  public async create(ctx: HttpContextContract) {
    const { request } = ctx;

    try {
      await request.validate({ schema: exerciseSchema });
      return Exercise.create(request.all());
    } catch (error) {
      return ctx.response.status(400).send(error);
    }
  }
}
