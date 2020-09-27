import BaseSchema from "@ioc:Adonis/Lucid/Schema";

export default class Exercises extends BaseSchema {
  protected tableName = "exercises";

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.uuid("id").primary();
      table.timestamps(true);
      table.string("name");
      table.string("muscle_group");
    });
  }

  public async down() {
    this.schema.dropTable(this.tableName);
  }
}
