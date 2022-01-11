const pool = require("../config/dbconfig");
const queries=require("../models/teacher.model");

const getTeacher=(req,res)=>{
   
    pool.query(queries.getTeacher,(error,results)=>{
        if(error) throw error;
        res.status(200).json(results.rows);
    });
};

const getTeacherById=(req,res)=>{
    const id=req.params.teacher_id;
    pool.query(queries.getTeacherById,[id],(error,results)=>{
        if(error)throw error;
        res.status(200).json(results.rows);

    });
};


const addTeacher=(req,res)=>{
    const {teacher_id,teacher_name,contactno,email,is_above_ninth_grade,tentative_start_date,address,city,country,parent_name,parent_contactno,is_apr_residing,apr_reference_name,apr_reference_contact,spoke_lang_1,spoke_lang_2,spoke_lang_3,is_commitment_three_months,is_agreed_lte_policy,group_id,teacher_status,role}=req.body;
    
        //add teacher info to db
        pool.query(queries.addTeacher,[teacher_id,teacher_name,contactno,email,is_above_ninth_grade,tentative_start_date,address,city,country,parent_name,parent_contactno,is_apr_residing,apr_reference_name,apr_reference_contact,spoke_lang_1,spoke_lang_2,spoke_lang_3,is_commitment_three_months,is_agreed_lte_policy,group_id,teacher_status,role],(error,results)=>{
            if(error)throw error;
           
            res.status(201).send("Teacher information created successfully!");
        
        
    });  
};

const removeTeacher=(req,res)=>{
    const id=req.params.teacher_id;

    pool.query(queries.getTeacherById,[id],(error,results)=>{
        const noGroupFound=!results.rows.length;
        if(noGroupFound){
        res.send("Teacher information doesnt exists in db couldnt remove");
    }
    pool.query(queries.removeTeacher,[id],(error,result)=>{
        if(error) throw error;
        res.status(200).send("Teacher information removed successfully");

    });

    });
};

const updateTeacher=(req,res)=>{
    const id=req.params.teacher_id;
    const {teacher_name,contactno,email,is_above_ninth_grade,tentative_start_date,address,city,country,parent_name,parent_contactno,is_apr_residing,apr_reference_name,apr_reference_contact,spoke_lang_1,spoke_lang_2,spoke_lang_3,is_commitment_three_months,is_agreed_lte_policy,group_id,teacher_status,role} =req.body;
    pool.query(queries.getTeacherById,[id],(error,results)=>{
    const noGroupFound=!results.rows.length;
    if(noGroupFound){
    res.send("Teacher information doesnt exists in db couldnt remove");
    }
    pool.query(queries.updateTeacher,[teacher_name,contactno,email,is_above_ninth_grade,tentative_start_date,address,city,country,parent_name,parent_contactno,is_apr_residing,apr_reference_name,apr_reference_contact,spoke_lang_1,spoke_lang_2,spoke_lang_3,is_commitment_three_months,is_agreed_lte_policy,group_id,teacher_status,role,id],(error,results)=>{
        if(error) throw error;
        res.status(200).send("Teacher information updated successfully");
    });

});
}




module.exports={
    getTeacher,
    getTeacherById,
    addTeacher,
    removeTeacher,
    updateTeacher,

   
   
};

