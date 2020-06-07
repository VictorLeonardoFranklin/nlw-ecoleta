import Knex from 'knex';

// Criar a tabela points_items
export async function up(knex: Knex) {
    return knex.schema.createTable('points_items', table => {
        table.increments('id').primary();
        table.integer('point_id')
            .notNullable()
            .unsigned()
            .references('id')
            .inTable('points');
        table.integer('item_id')
            .notNullable()
            .unsigned()
            .references('id')
            .inTable('items');
    })
}

// Drop table roll back points_items
export async function down(knex: Knex) {
    return knex.schema.dropTable('points_items');
}