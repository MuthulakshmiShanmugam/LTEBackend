
const express= require('express');

const batchRoutes=require('./src/routes/batch.routes');
const teacherRoutes=require('./src/routes/teacher.routes');
const studentRoutes=require('./src/routes/student.routes');
const adminloginRoutes=require('./src/routes/adminlogin.routes');

const app=express();
const port=process.env.PORT || 8080;
const bodyParser = require("body-parser");
const cors = require("cors");

//used to post data in json (middleware)
app.use(express.json());

// var corsOptions = {
//   origin: "http://localhost:8081"
// };

app.use(cors());


//CORS-HEADERS- Required for cross origin and cross server communication
app.use((req,res,next)=>{
  res.setHeader('Access-Control_Allow-Origin','*');
  res.setHeader('Access-Control-Allow-Headers',
  'Origin,X-Requested-With,Content-Type,Accept,Authorization');

res.setHeader('Access-Control-Allow-Methods','GET','POST','PATCH','DELETE','OPTIONS');
next();
});

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse requests of content-type - application/json
app.use(bodyParser.json())
// define a root route
app.get("/",(req,res)=>{
    res.send("Hai Welcome To Our LTE APP!");
});

app.use('/api/batch',batchRoutes);
app.use('/api/teacher',teacherRoutes);
app.use('/api/student',studentRoutes);
app.use('/api/adminlogin',adminloginRoutes);

app.listen(port,()=> console.log(`app listening to ${port}`));

