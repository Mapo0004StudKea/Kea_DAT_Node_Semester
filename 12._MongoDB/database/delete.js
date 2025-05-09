import db from './connection.js';

const deleteDiscipline = await db.sports.deleteOne({ name: "Boxing"})
console.log(deleteDiscipline)