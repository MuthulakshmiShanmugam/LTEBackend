const getStudent="SELECT * FROM student_info";
const getStudentById="SELECT * FROM student_info WHERE student_id= $1";

const addStudent="INSERT INTO student_info (student_id,student_name,whatsappno,is_under_eighteen,student_age,education,level_reading_skill,medium_education,sponser_name,sponser_contactno,sponser_address,spoken_language_1,spoken_language_2,is_terms_agreed,parent_name,parent_contactno,class_contactno,student_status,role) VALUES($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17,$18,$19)";
const removeStudent="DELETE FROM student_info WHERE student_id=$1";
const updateStudent="UPDATE student_info SET student_name=$1,whatsappno=$2,is_under_eighteen=$3,student_age=$4,education=$5,level_reading_skill=$6,medium_education=$7,sponser_name=$8,sponser_contactno=$9,sponser_address=$10,spoken_language_1=$11,spoken_language_2=$12,is_terms_agreed=$13,parent_name=$14,parent_contactno=$15,class_contactno=$16,student_status=$17,role=$18  WHERE student_id=$19";

module.exports={
    getStudent,
    getStudentById,
    addStudent,
    removeStudent,
    updateStudent,
    
};