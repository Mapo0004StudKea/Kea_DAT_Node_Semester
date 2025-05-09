MySQL       vs.     MongoDB
--------------------------------
Databases           Databases
Tables              Collections
Row                 Document
Column              Key
Cell                Value

## When to use MongoDB

1. When you have a variable schema
2. When you want to prototype (Proof of Concept)
3. Frankenstein (MongoDB for logging)

MongoDB, all validation heppesn in the code
SQL, validation happens in the database layer


## Commands

MySQL                   vs.             Mongodb
CREATE DATABASE <database_name>         use <database_name>
CREATE TABLE <table_name>               db.createCollection("name")
DROP TABLE <table_name>                 db.<collection_name>.drop()

SELECT                                  find
INSERT                                  insert, insertOne, insertMany, bulkWrite
UPDATE                                  updateOne({"search criteria"}, {$set: {"update with"}}),    updateMany
DELETE                                  deleteOne, deleteMany