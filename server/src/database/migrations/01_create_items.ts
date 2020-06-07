import Knex from 'knex';

// Criar a tabela items
export async function up(knex: Knex) {
    return knex.schema.createTable('items', table => {
        table.increments('id').primary();
        table.string('image').notNullable();
        table.string('title').notNullable();        
    })
}

// Drop table items roll back
export async function down(knex: Knex) {
    return knex.schema.dropTable('items');
}