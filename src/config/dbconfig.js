
const Pool=require('pg').Pool;
//require('dotenv').config();
const pool=new Pool({
    user:process.env.USER||"postgres",
    
    host:process.env.HOST || "localhost",
    database:process.env.DATABASE||"ltebackend",
    password:process.env.PASSWORD||"mapostgres",
    port:process.env.PORT||"5432",

});


// const pool = new Pool({
//   connectionString: process.env.DATABASE_URL,
//   ssl: { rejectUnauthorized: false },
// });

pool.connect((err)=>{

    if(!err){
        console.log("database connection succeeded");
    }else{
        console.log("database connection failed"+err);
    }
  });


// pool.connect((err)=>{

//   if(!err){
//       console.log("database connection succeeded");
//   }else{
//       console.log("database connection failed"+err);
//   }
// });



module.exports=pool;


