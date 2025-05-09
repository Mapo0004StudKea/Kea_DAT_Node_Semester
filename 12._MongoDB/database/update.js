import db from './connection.js';

const updateDisciplines = await db.sports.updateOne({ name: "Boxing"}, { $set: { name: "Thai Bozing"}});
console.log(updateDisciplines);