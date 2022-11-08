// Iteration #1
//
require("./../db/index");
const Drone = require("./../models/Drone.model.js");

const drones = [
  { name: "Creeper XL 500", propellers: 3, maxSpeed: 12 },
  { name: "Racer 57", propellers: 4, maxSpeed: 20 },
  { name: "Courier 3000i", propellers: 6, maxSpeed: 18 },
];

seed();

async function seed() {
  await Drone.deleteMany();
  await Drone.create(drones);
  mongoose.connection.close();
}
