const mongoose      = require('mongoose')



const productSchema = new mongoose.Schema({
  name: {
    type: 'String',
    require: true,
    trim: true,
    lowercase: true
  },
  email: {
    type: 'string',
    require:true,
    trim:true,
    lowercase:true
  },
  address: {
    type: 'String',
    require: true,
    trim: true,
    lowercase: true
  },
  phone: {
    type: 'String',
    require: true,
    validate(value) {
      if (value < 11) throw new Error("invalid input.");
    }
  },
});

const Product  = mongoose.model("Product", productSchema);
module.exports = Product;