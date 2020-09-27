import BaseSchema from "@ioc:Adonis/Lucid/Schema";

export default class Workouts extends BaseSchema {
  protected tableName = "workouts";

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.uuid("id").primary();
      table.timestamps(true);
      table.string("name");
      table.uuid("exercise_series_id").unsigned();
      table.foreign("exercise_series_id").references("exercise_series.id");
    });
  }

  public async down() {
    this.schema.dropTable(this.tableName);
  }
}
