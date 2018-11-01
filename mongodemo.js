/**
 * New node file
 */

var MongoClient = require('mongodb').MongoClient;
var DB_CONN_STR = 'mongodb://localhost:27017/gomall';    

var insertData = function(db, callback) {  
    //连接到表  
    var collection = db.collection('tb1');
    //插入数据
    var data = [{"name":'xyz',"age":21},{"name":'abc',"age":22}];
    collection.insert(data, function(err, result) { 
        if(err)
        {
            console.log('Error:'+ err);
            return;
        }     
        callback(result);
    });
}

MongoClient.connect(DB_CONN_STR, function(err, db) {
    console.log("连接成功！");
    insertData(db, function(result) {
        console.log(result);
        db.close();
    });
});

