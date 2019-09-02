var student = require("./student")
var input = require("readline-sync")
var http = require("http")

var ajoc = new student();
do {
   console.log("Add Student : ")
   ajoc.setName(input.question("\tName : "))
   console.log("Add Course : ")
   ajoc.addCourse(input.question("\tCourse : "),input.question("\tYear : "))
   console.log("Add Schedule :")
   ajoc.addSchedule(input.question("\tDay : "),input.question("\tTime : "))
} while (input.question("exit? : ")!= "yes");
   console.log("Successfully Added data!")
http.createServer(function(request , response){
   console.log("server started!")
   response.write()
   response.end()
}).listen(8888)