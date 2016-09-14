
var username = "postgres";
var password = "123";
var hostname = "localhost";
var port = "5432";
var database = "MyNewPet";

var connectionString = "postgres://"+username+":"+password+"@"+hostname+":"+port+"/"+database;

exports.connectionString = connectionString;

exports.WEBPORT = 3000;


