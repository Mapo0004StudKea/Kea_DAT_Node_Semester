// hashes må aldrig sendes til klienter

import bcrypt from 'bcryptjs';

const saltRounds = 20;
const password = "Hunter12";

const passwordHash = await bcrypt.hash(password, saltRounds);

console.log(passwordHash);