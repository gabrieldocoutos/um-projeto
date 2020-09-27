import { DateTime } from "luxon";
import Hash from "@ioc:Adonis/Core/Hash";
import {
  BaseModel,
  column,
  beforeSave,
  beforeFetch,
} from "@ioc:Adonis/Lucid/Orm";

export default class User extends BaseModel {
  @column({ isPrimary: true })
  public id: number;

  @column.dateTime({ autoCreate: true })
  public created_at: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updated_at: DateTime;

  @column({ columnName: "name" })
  public name: string;

  @column({ columnName: "surname" })
  public surname: string;

  @column({ columnName: "email" })
  public email: string;

  @column({ columnName: "password", serializeAs: null })
  public password: string;

  @column({ columnName: "weight" })
  public weight: number;

  @column({ columnName: "birthdate" })
  public birthdate: DateTime;

  @column({ columnName: "remember_me_token", serializeAs: null })
  public remember_me_token: string;

  @beforeSave()
  public static async hashPassword(auth: User) {
    if (auth.$dirty.password) {
      auth.password = await Hash.make(auth.password);
    }
  }
}