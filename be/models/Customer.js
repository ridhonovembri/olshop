const mongoose = require("mongoose");

const customerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    index: true,
  },
  mobileNo: {
    type: String,
    require: true,
  },
  address: {
    type: String,
    require: false,
  },
});

const Customer = mongoose.model("Customer", customerSchema);

module.exports = Customer;
