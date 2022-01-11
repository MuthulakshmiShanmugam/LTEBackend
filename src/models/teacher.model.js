const getTeacher="SELECT * FROM teacher_info";
const getTeacherById="SELECT * FROM teacher_info WHERE teacher_id= $1";

const addTeacher="INSERT INTO teacher_info (teacher_id,teacher_name,contactno,email,is_above_ninth_grade,tentative_start_date,address,city,country,parent_name,parent_contactno,is_apr_residing,apr_reference_name,apr_reference_contact,spoke_lang_1,spoke_lang_2,spoke_lang_3,is_commitment_three_months,is_agreed_lte_policy,group_id,teacher_status,role) VALUES($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17,$18,$19,$20,$21,$22)";
const removeTeacher="DELETE FROM teacher_info WHERE teacher_id=$1";
const updateTeacher="UPDATE teacher_info SET teacher_name=$1,contactno=$2,email=$3,is_above_ninth_grade=$4,tentative_start_date=$5,address=$6,city=$7,country=$8,parent_name=$9,parent_contactno=$10,is_apr_residing=$11,apr_reference_name=$12,apr_reference_contact=$13,spoke_lang_1=$14,spoke_lang_2=$15,spoke_lang_3=$16,is_commitment_three_months=$17,is_agreed_lte_policy=$18,group_id=$19,teacher_status=$20,role=$21 WHERE teacher_id=$22";

module.exports={
    getTeacher,
    getTeacherById,
    addTeacher,
    removeTeacher,
    updateTeacher,
    
};