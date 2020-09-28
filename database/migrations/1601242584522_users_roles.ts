import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class UsersRoles extends BaseSchema {
  protected tableName = 'users_roles'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.timestamps(true)
      table
        .integer('user_id')
        .unsigned()
        .references('id')
        .inTable('users')
        .onDelete('CASCADE')
      table
        .integer('role_id')
        .unsigned()
        .references('id')
        .inTable('roles')
        .onDelete('CASCADE')
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
