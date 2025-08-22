const mongoose = require('mongoose');
// Schema
const categorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Category name is required'],
        unique: [true, 'Category name must be unique'],
        mainlength: [3, 'Category name must be at least 3 characters long'],
        maxlength: [32, 'Category name must be less than 32 characters long']
    },
    slug: {
        type: String,
        lowercase: true,
    },
    image: String,
},{
    timestamps: true
});
// categorySchema.pre(/^find/, function (next) {
//    this.populate({ 
//     path: 'category',
//      select: 'name -_id' 
//     });
//     next();
// });
// Model
module.exports  = mongoose.model('Category', categorySchema);
