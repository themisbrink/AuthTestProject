const  mongoose = require('mongoose'); 

const userSchema = new mongoose.Schema({
    email:String,
    password:String
})

// userSchema.statics.findByName((email) => {
//     return this.find({email});
// })

module.exports = mongoose.model('user', userSchema, 'store_users'); // Export model directly by name, schema, collection