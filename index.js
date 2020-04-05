const express = require('express');
// const cookieParser = require('cookie-parser');
const app = express();
const port = 8000;
// const expressLayouts = require('express-ejs-layouts');
const db = require('./config/mongoose');
// const MongoStore = require('connect-mongo')(session);
app.use(express.urlencoded());
app.use(express.static('./assets'));
// make the uploads path available to the browser
app.use('/uploads', express.static(__dirname + '/uploads'));
app.set('view engine', 'ejs');
app.set('views', './views');
app.use('/', require('./routes'));
app.listen(port, function(err){
    if (err){
        console.log(`Error in running the server: ${err}`);
    }

    console.log(`Server is running on port: ${port}`);
});
