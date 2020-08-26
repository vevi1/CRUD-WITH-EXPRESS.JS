const express      = require('express')
const path         = require('path')
const hbs          = require('hbs')
const bodyParser   = require('body-parser')
const Product      = require('./model/product')
const router       = require('./router/products')
const db           = require('./db/mongoose')



const app          = express()


//set views file
app.set('views',path.join(__dirname,'views'));


//set view engine
app.set('view engine', 'hbs');
app.use(bodyParser.json());


app.use(bodyParser.urlencoded({ extended: false }));
app.use("/", router)



//set public folder as static folder for static file
app.use('/assets',express.static(__dirname + '/public'));




const port = process.env.PORT || 9088
app.listen(port, () => {
    console.log('server is listening on port ' + port )
})
 