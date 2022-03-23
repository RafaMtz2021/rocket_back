require('dotenv').config();

const db = require('./src/lib/db')
const port = process.env.PORT || '8080'

const server = require('./src/lib/server')

require('./src/models/user.model')


//dbConnect(process.env)
db.sync()
    .then(()=>{
        console.log('DB Connected!');
        server.listen(port,()=>{
            console.log('Server is running on port: ' + port);
        })
    })
    .catch((error)=>{
        console.error(error);
    });
