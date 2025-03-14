const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const routesSchema = new Schema({
  name: { type: String, required: true },
  start: { type: String, required: true },
  end: { type: String, required: true },
  duration: { type: String, required: true },
  arrivalLocation: {
    name: { type: String, required: true }
  },
  departureLocation: {
    name: { type: String, required: true }
  },
 

});

module.exports = mongoose.model("Routes", routesSchema);