const { password } = require("pg/lib/defaults");
const pool = require("../config/dbconfig");
const queries=require("../models/adminlogin.model");
const jwt=require('jsonwebtoken');
//require('dotenv').config();

const getAdminLogin=(req,res)=>{
   
    pool.query(queries.getAdminLogin,(error,results)=>{
        if(error) throw error;
        res.status(200).json(results.rows);
    });
};

const getAdminLoginById=(req,res)=>{
    const id=req.params.admin_id;
    pool.query(queries.getAdminLoginById,[id],(error,results)=>{
        if(error)throw error;
        res.status(200).json(results.rows);

    });
};

const getAdminLoginValues=(req,res,err)=>{
    const username=req.params.username;
    const password=req.params.password;
    console.log("entered name"+username);
    
    pool.query(queries.getAdminLoginValues,[username,password],(error,results)=>{

    let jwtSecretKey = "gfg_jwt_secret_key";
    console.log(jwtSecretKey);
    let data = {
    username:username,
    
}
console.log(data);

const token = jwt.sign({username:username}, jwtSecretKey);
      
    console.log("token ="+token);
     
        //if((results.rows[0].username && results.rows[0].password).length > 0)
        if(results.rows[0]){
            console.log(results.rows[0]);
           
           res.status(200).json({message:"success",access_token:token});
        }else{
            res.status(404).json({message:"Failed"});
        }
            
           
           
        
        
        // if(error)throw error;
        // res.status(200).json(results.rows);

    });
};


// const addAdmin =(req,res)=>{
//     const {admin_id,username,password}=req.body;

//     let jwtSecretKey = process.env.JWT_SECRET_KEY;
//     let data = {
//         username:username
        
//     }
  
//     const token = jwt.sign(data, jwtSecretKey);
//     console.log("token ="+token);
//     //Encrypt user password
//     //encryptedPassword = await bcrypt.hash(password, 10);
//     pool.query(queries.addAdmin,[admin_id,username,password],(error,results)=>{
//         if(error)throw error;
           
//         res.status(201).send("Admin information created successfully!",token);
//     });




// };





module.exports={
    getAdminLogin,
    getAdminLoginById,
    getAdminLoginValues,
       
};

