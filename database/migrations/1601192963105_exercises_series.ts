import BaseSchema from "@ioc:Adonis/Lucid/Schema";

export default class ExercisesSeries extends BaseSchema {
  protected tableName = "exercise_series";

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.uuid("id").primary();
      table.timestamps(true);
      table.uuid("exercise_id").unsigned();
      table.foreign("exercise_id").references("exercises.id");
      table.integer("repetitions");
      table.float("weight");
    });
  }

  public async down() {
    this.schema.dropTable(this.tableName);
  }
}
