var sql = require('mssql');

console.log('before');

sql.connect("mssql://user:password@gistia-sqlserver1.database.windows.net:1433/Test?encrypt=true").then(function() {
    // Query

    console.log('before');
    new sql.Request().query("SELECT * FROM information_schema.tables WHERE TABLE_TYPE='BASE TABLE'").then(function(recordset) {
    // new sql.Request().query("SELECT * FROM SalesLT.ProductDescription").then(function(recordset) {
        console.log(recordset);
    }).catch(function(err) {
        console.log('error', err);
        // ... query error checks
    });

    // Stored Procedure

    // new sql.Request()
    // .input('input_parameter', sql.Int, value)
    // .output('output_parameter', sql.VarChar(50))
    // .execute('procedure_name').then(function(recordsets) {
    //     console.dir(recordsets);
    // }).catch(function(err) {
    //     // ... execute error checks
    // });

    // ES6 Tagged template literals (experimental)

    // sql.query`select * from mytable where id = ${value}`.then(function(recordset) {
    //     console.dir(recordset);
    // }).catch(function(err) {
    //     // ... query error checks
    // });
}).catch(function(err) {
    console.log('err', err);
});
