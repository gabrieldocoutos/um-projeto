import BaseSchema from "@ioc:Adonis/Lucid/Schema";

export default class UsersWorkouts extends BaseSchema {
  protected tableName = "users_workouts";

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.uuid("id").primary();
      table.timestamps(true);
      table.uuid("user_id").unsigned();
      table.foreign("user_id").references("users.id");
      table.uuid("workout_id").unsigned();
      table.foreign("workout_id").references("workouts.id");
    });
  }

  public async down() {
    this.schema.dropTable(this.tableName);
  }
}
