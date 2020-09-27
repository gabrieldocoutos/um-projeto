import BaseSchema from "@ioc:Adonis/Lucid/Schema";

export default class UsersWorkouts extends BaseSchema {
  protected tableName = "users_workouts";

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments("id").primary();
      table.timestamps(true);
      table.integer("user_id").unsigned();
      table.foreign("user_id").references("users.id");
      table.integer("workout_id").unsigned();
      table.foreign("workout_id").references("workouts.id");
    });
  }

  public async down() {
    this.schema.dropTable(this.tableName);
  }
}
