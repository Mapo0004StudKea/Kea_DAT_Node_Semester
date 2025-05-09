import db from './connection.js';

const data = await db.sports.find().toArray();
console.log(data);