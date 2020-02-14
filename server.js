// server.js
const mongoose = require('mongoose');
const throng = require('throng');
require('dotenv').config({path: '.env'});

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/purchaseOrders', {
    useMongoClient: true,
});
mongoose.Promise = require('bluebird');

mongoose.connection.on('error', (err) => {
    console.error(` Database Error   → ${err}`);
});


function server() {
    /* You should require your models here so you don't have to initialise them all the time in
    different controlers*/
    require('./models/Shop');

    const app = require('./app');
    app.set('port', process.env.PORT || 3000);
    const server = app.listen(app.get('port'), () => {
        console.log(`Express running → PORT ${server.address().port}`);
    });
}


throng({
    workers: process.env.WEB_CONCURRENCY || 1,
}, server);
