const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/CRUD', {
    useNewUrlParser:true,
    useCreateIndex:true,
    useFindAndModify:false,
})