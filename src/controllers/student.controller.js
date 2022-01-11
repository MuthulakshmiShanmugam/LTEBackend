const pool = require("../config/dbconfig");
const queries=require("../models/student.model");

const getStudent=(req,res)=>{
   
    pool.query(queries.getStudent,(error,results)=>{
        if(error) throw error;
        res.status(200).json(results.rows);
    });
};

const getStudentById=(req,res)=>{
    const id=req.params.student_id;
    pool.query(queries.getStudentById,[id],(error,results)=>{
        if(error)throw error;
        res.status(200).json(results.rows);

    });
};


const addStudent=(req,res)=>{
    const {student_id,student_name,whatsappno,is_under_eighteen,student_age,education,level_reading_skill,medium_education,sponser_name,sponser_contactno,sponser_address,spoken_language_1,spoken_language_2,is_terms_agreed,parent_name,parent_contactno,class_contactno,student_status,role}=req.body;
    
        //add student info to db
        pool.query(queries.addStudent,[student_id,student_name,whatsappno,is_under_eighteen,student_age,education,level_reading_skill,medium_education,sponser_name,sponser_contactno,sponser_address,spoken_language_1,spoken_language_2,is_terms_agreed,parent_name,parent_contactno,class_contactno,student_status,role],(error,results)=>{
            if(error)throw error;
           
            res.status(201).send("Student information created successfully!");
        
        
    });  
};

const removeStudent=(req,res)=>{
    const id=req.params.student_id;

    pool.query(queries.getStudentById,[id],(error,results)=>{
        const noGroupFound=!results.rows.length;
        if(noGroupFound){
        res.send("Student information doesnt exists in db couldnt remove");
    }
    pool.query(queries.removeStudent,[id],(error,result)=>{
        if(error) throw error;
        res.status(200).send("Student information removed successfully");

    });

    });
};

const updateStudent=(req,res)=>{
    const id=req.params.student_id;
    const {student_name,whatsappno,is_under_eighteen,student_age,education,level_reading_skill,medium_education,sponser_name,sponser_contactno,sponser_address,spoken_language_1,spoken_language_2,is_terms_agreed,parent_name,parent_contactno,class_contactno,student_status,role} =req.body;
pool.query(queries.getStudentById,[id],(error,results)=>{
    const noGroupFound=!results.rows.length;
    if(noGroupFound){
    res.send("Student information doesnt exists in db couldnt remove");
    }
    pool.query(queries.updateStudent,[student_name,whatsappno,is_under_eighteen,student_age,education,level_reading_skill,medium_education,sponser_name,sponser_contactno,sponser_address,spoken_language_1,spoken_language_2,is_terms_agreed,parent_name,parent_contactno,class_contactno,student_status,role,id],(error,results)=>{
        if(error) throw error;
        res.status(200).send("Student information updated successfully");
    });

});
}




module.exports={
    getStudent,
    getStudentById,
    addStudent,
    removeStudent,
    updateStudent,

   
   
};

