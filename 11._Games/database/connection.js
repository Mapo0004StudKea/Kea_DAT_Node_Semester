import sqlite3 from 'sqlite3';
import { open } from 'sqlite'; // wrapper som giver promises

const connection = await open({
  filename: "games.db",
  driver: sqlite3.Database
});

export default connection;