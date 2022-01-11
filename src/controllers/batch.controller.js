const pool = require("../config/dbconfig");
const queries=require("../models/batch.model");

const getBatch=(req,res)=>{
   
    pool.query(queries.getBatch,(error,results)=>{
        if(error) throw error;
        res.status(200).json(results.rows);
    });
};

const getBatchById=(req,res)=>{
    const id=req.params.batch_id;
    pool.query(queries.getBatchById,[id],(error,results)=>{
        if(error)throw error;
        res.status(200).json(results.rows);

    });
};

const getTotalTeachersProfilesCount=(req,res)=>{
    const id=req.params.batch_id;
    


    pool.query(queries.getTotalTeachersProfilesCount,[id],(error,results)=>{
        if(error) throw error;
        console.log(results);
        res.status(200).json("Total Teachers profiles : "+(results.rows[0].count - 1));
    }); 
    
    // const {rows}=pool.query(queries.getTotalProfilesCount,[id]);
    // res.json(rows);

};

const getTotalStudentsProfilesCount=(req,res)=>{
    const id=req.params.batch_id;
    


    pool.query(queries.getTotalStudentsProfilesCount,[id],(error,results)=>{
        if(error) throw error;
        console.log(results);
        res.status(200).json("Total Students profiles : "+(results.rows[0].count - 1));
    }); 
    
    // const {rows}=pool.query(queries.getTotalProfilesCount,[id]);
    // res.json(rows);

};

const getTeacherProfiles=(req,res)=>{
    const id=req.params.batch_id;
    


    pool.query(queries.getTeacherProfiles,[id],(error,results)=>{
        if(error) throw error;
        console.log(results);
        res.status(200).json({message: results.rows[0].teacher_profile_names});
    }); 
    
    // const {rows}=pool.query(queries.getTotalProfilesCount,[id]);
    // res.json(rows);

};

const getStudentProfiles=(req,res)=>{
    const id=req.params.batch_id;
    


    pool.query(queries.getStudentProfiles,[id],(error,results)=>{
        if(error) throw error;
        console.log(results);
        res.status(200).json("Students List : "+(results.rows[0].student_profile_names));
    }); 
    
    // const {rows}=pool.query(queries.getTotalProfilesCount,[id]);
    // res.json(rows);

};

const getAllTeacherProfiles=(req,res)=>{
   

console.log("getAllTeacherProfiles starts");
    pool.query(queries.getAllTeacherProfiles,(error,results)=>{
        if(error) throw error;
        console.log(results);
        res.send(results.rows);

        //res.status(200).json(results.rows.teacher_profile_names);
        
        
    });
    
   

};

const getAllStudentProfiles=(req,res)=>{
    
    
    pool.query(queries.getAllStudentProfiles,(error,results)=>{
        if(error) throw error;
       res.status(200).json(results.rows);
    }); 
    
    

};

const addBatch=(req,res)=>{
    const {batch_id,batch_name,batch_desc,batch_created_at,batch_created_by,teacher_profile1,teacher_profile2,teacher_profile3,teacher_profile4,teacher_profile5,teacher_profile6,teacher_profile7,teacher_profile8,teacher_profile9,teacher_profile10,student_profile1,student_profile2,student_profile3,student_profile4,student_profile5,student_profile6,student_profile7,student_profile8,student_profile9,student_profile10}=req.body;
    
        //add Group info to db
        pool.query(queries.addBatch,[batch_id,batch_name,batch_desc,batch_created_at,batch_created_by,teacher_profile1,teacher_profile2,teacher_profile3,teacher_profile4,teacher_profile5,teacher_profile6,teacher_profile7,teacher_profile8,teacher_profile9,teacher_profile10,student_profile1,student_profile2,student_profile3,student_profile4,student_profile5,student_profile6,student_profile7,student_profile8,student_profile9,student_profile10],(error,results)=>{
            if(error)throw error;
           
            res.status(201).send("Batch information created successfully!");
        
        
    });  
};

const removeBatch=(req,res)=>{
    const id=req.params.batch_id;

    pool.query(queries.getBatchById,[id],(error,results)=>{
        const noBatchFound=!results.rows.length;
        if(noBatchFound){
        res.send("Batch information doesnt exists in db couldnt remove");
    }
    pool.query(queries.removeBatch,[id],(error,result)=>{
        if(error) throw error;
        res.status(200).send("Batch information removed successfully");

    });

    });
};

const updateBatch=(req,res)=>{
    const id=req.params.batch_id;
    const {batch_name,batch_desc,batch_created_at,batch_created_by,teacher_profile1,teacher_profile2,teacher_profile3,teacher_profile4,teacher_profile5,teacher_profile6,teacher_profile7,teacher_profile8,teacher_profile9,teacher_profile10,student_profile1,student_profile2,student_profile3,student_profile4,student_profile5,student_profile6,student_profile7,student_profile8,student_profile9,student_profile10} =req.body;
pool.query(queries.getBatchById,[id],(error,results)=>{
    const noBatchFound=!results.rows.length;
    if(noBatchFound){
    res.send("Batch information doesnt exists in db couldnt remove");
    }
    pool.query(queries.updateBatch,[batch_name,batch_desc,batch_created_at,batch_created_by,teacher_profile1,teacher_profile2,teacher_profile3,teacher_profile4,teacher_profile5,teacher_profile6,teacher_profile7,teacher_profile8,teacher_profile9,teacher_profile10,student_profile1,student_profile2,student_profile3,student_profile4,student_profile5,student_profile6,student_profile7,student_profile8,student_profile9,student_profile10,id],(error,results)=>{
        if(error) throw error;
        res.status(200).send("Batch information updated successfully");
    });

});
}

// const updateGroupProfiles=(req,res)=>{
//     const id=req.params.group_id;
//     const {profile1,profile2,profile3,profile4,profile5,profile6,profile7,profile8,profile9,profile10,profile11,profile12,profile13,profile14,profile15} =req.body;
// pool.query(queries.getGroupById,[id],(error,results)=>{
//     const noGroupFound=!results.rows.length;
//     if(noGroupFound){
//     res.send("Group information doesnt exists in db couldnt remove");
//     }

//     pool.query(queries.updateGroupProfiles,[profile1,profile2,profile3,profile4,profile5,profile6,profile7,profile8,profile9,profile10,profile11,profile12,profile13,profile14,profile15,id],(error,results)=>{
//         if(error) throw error;
//         res.status(200).send("Group Profiles information updated successfully");

   
//     });

// });
// }



module.exports={
    getBatch,
    getBatchById,
    addBatch,
    removeBatch,
    updateBatch,
    //updateGroupProfiles,
    getTotalTeachersProfilesCount,
    getTotalStudentsProfilesCount,
    getTeacherProfiles,
    getStudentProfiles,
    getAllTeacherProfiles,
    getAllStudentProfiles,

};

