const { Client } = require('pg');
const client = new Client({
  connectionString: 'postgres://postgres:mysecretpassword@localhost:5432/kibun',
});

async function main() {
  await client.connect();

  await client.query(`CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    firstName VARCHAR(255) NOT NULL,
    lastName VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL);
    `);

  await client.end();
}

main();

