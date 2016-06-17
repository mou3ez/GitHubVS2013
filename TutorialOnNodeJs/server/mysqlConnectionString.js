

var mysqlConnectionString = {
    
    connection  :{
        
        dev : {
            host: 'localhost',
            user: 'root',
            password : 'root',
            database : 'productmanagement'
        }

        ,
        
        qa : {
            host: 'localhost',
            user: 'root',
            password : 'root',
            database : 'productmanagement'
        }
        ,prod : {
            host: 'localhost',
            user: 'root',
            password : 'root',
            database : 'productmanagement'
        }
    
    }

};

module.exports.mysqlConnectionString = mysqlConnectionString;
