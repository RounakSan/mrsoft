const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

let _db;

const mongoConnect = (callback) => {
    MongoClient.connect('mongodb+srv://rounak:Ttly%402241@mrsoft.v6p1iif.mongodb.net/?retryWrites=true&w=majority')
    .then(client =>{
            console.log("Connected to database");
            _db =client.db();
            callback(client);
        }
    )
    .catch(err =>{
        console.log(err);
        throw err;
    });
};
//connection  pooling behind the scenes by mongoDb
const getDb = () => {
    if(_db){
        return _db;
    }
    throw 'No database found'
}

exports.mongoConnect =  mongoConnect;
exports.getDb =  getDb;