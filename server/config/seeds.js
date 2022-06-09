const db = require("./connection");
const { User } = require("../models");

db.once("open", async () => {
  await User.deleteMany();

  await User.create({
    firstName: "Pamela",
    lastName: "Washington",
    email: "pamela@testmail.com",
    password: "password12345",
    age: 18,
    city: 'Pembroke Pines',
    level: 'beginner',
    drink: true,
    smoke: false
  });

  await User.create({
    firstName: "Elijah",
    lastName: "Holt",
    email: "eholt@testmail.com",
    password: "password12345",
    age: 18,
    city: 'Pembroke Pines',
    level: 'beginner',
    drink: true,
    smoke: false
  });

  console.log("users seeded");

  process.exit();
});
