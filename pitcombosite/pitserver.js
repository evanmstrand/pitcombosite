const express = require('express'); //use express as a framework for node js
const app = express();
var mysql = require('mysql')
var sql = 'Select * From PitMoves;'

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "baseball55555",
    database: 'mydb'
  });
  
  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log(result);
    });
  });

app.set('view engine', 'html');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/'));
app.engine('html', require('ejs').renderFile);

app.get('/', function(req, res) {
		res.render('page',{
			my_title:"Pit Combo Site",
		});	
});

app.listen(3000);