import db from './connection.js';

const newDiscipline = await db.sports.insertOne({ name: "Boxing" })
console.log(newDiscipline);