const mongoose = require('mongoose');
require('dotenv').config()
//mongoose.connect(`mongodb+srv://ghanem:ghanem@cluster0.b6hyt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`,{useNewUrlParser: true, useUnifiedTopology : true})
// mongoose.Promise = global.Promise;
mongoose.connect(`mongodb+srv://ghanem:ghanem@cluster0.b6hyt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`,{useNewUrlParser: true, useUnifiedTopology : true})
    
    // mongoose.connect(`mongodb://${DB_URL}/test`,{useNewUrlParser: true, useUnifiedTopology : true})
    .then(() => console.log('Connected.'))
    .catch((err)=> console.log(err));
    
module.exports = mongoose;