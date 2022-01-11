const getBatch="SELECT * FROM batch_info";
const getBatchById="SELECT * FROM batch_info WHERE batch_id= $1";

const addBatch="INSERT INTO batch_info(batch_id,batch_name,batch_desc,batch_created_at,batch_created_by,teacher_profile1,teacher_profile2,teacher_profile3,teacher_profile4,teacher_profile5,teacher_profile6,teacher_profile7,teacher_profile8,teacher_profile9,teacher_profile10,student_profile1,student_profile2,student_profile3,student_profile4,student_profile5,student_profile6,student_profile7,student_profile8,student_profile9,student_profile10) VALUES($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17,$18,$19,$20,$21,$22,$23,$24,$25)";
const removeBatch="DELETE FROM batch_info WHERE batch_id=$1";
const updateBatch="UPDATE batch_info SET batch_name=$1,batch_desc=$2,batch_created_at=$3,batch_created_by=$4,teacher_profile1=$5,teacher_profile2=$6,teacher_profile3=$7,teacher_profile4=$8,teacher_profile5=$9,teacher_profile6=$10,teacher_profile7=$11,teacher_profile8=$12,teacher_profile9=$13,teacher_profile10=$14,student_profile1=$15,student_profile2=$16,student_profile3=$17,student_profile4=$18,student_profile5=$19,student_profile6=$20,student_profile7=$21,student_profile8=$22,student_profile9=$23,student_profile10=$24 WHERE batch_id=$25";
//const updateGroupProfiles="UPDATE group_info SET profile1=$1,profile2=$2,profile3=$3,profile4=$4,profile5=$5,profile6=$6,profile7=$7,profile8=$8,profile9=$9,profile10=$10,profile11=$11,profile12=$12,profile13=$13,profile14=$14,profile15=$15 WHERE group_id=$16";
const getTotalTeachersProfilesCount="SELECT COUNT(*) FROM(SELECT teacher_profile1 FROM batch_info WHERE batch_id=$1 UNION SELECT teacher_profile2 FROM batch_info WHERE batch_id=$1 UNION SELECT teacher_profile3 FROM batch_info WHERE batch_id=$1 UNION SELECT teacher_profile4 FROM batch_info WHERE batch_id=$1 UNION SELECT teacher_profile5 FROM batch_info WHERE batch_id=$1 UNION SELECT teacher_profile6 FROM batch_info WHERE batch_id=$1 UNION SELECT teacher_profile7 FROM batch_info WHERE batch_id=$1 UNION SELECT teacher_profile8 FROM batch_info WHERE batch_id=$1 UNION SELECT teacher_profile9 FROM batch_info WHERE batch_id=$1 UNION SELECT teacher_profile10 FROM batch_info WHERE batch_id=$1 )as total_teachers_profile";
const getTotalStudentsProfilesCount="SELECT COUNT(*) FROM(SELECT student_profile1 FROM batch_info WHERE batch_id=$1 UNION SELECT student_profile2 FROM batch_info WHERE batch_id=$1 UNION SELECT student_profile3 FROM batch_info WHERE batch_id=$1 UNION SELECT student_profile4 FROM batch_info WHERE batch_id=$1 UNION SELECT student_profile5 FROM batch_info WHERE batch_id=$1 UNION SELECT student_profile6 FROM batch_info WHERE batch_id=$1 UNION SELECT student_profile7 FROM batch_info WHERE batch_id=$1 UNION SELECT student_profile8 FROM batch_info WHERE batch_id=$1 UNION SELECT student_profile9 FROM batch_info WHERE batch_id=$1 UNION SELECT student_profile10 FROM batch_info WHERE batch_id=$1 )as total_students_profile";
//const getTeacherProfiles="SELECT CONCAT (teacher_profile1, ', ', teacher_profile2, ', ', teacher_profile3, ', ',teacher_profile4, ', ',teacher_profile5, ', ',teacher_profile6, ', ',teacher_profile7, ', ',teacher_profile8, ', ',teacher_profile9, ', ',teacher_profile10) AS teacher_profile_names FROM batch_info WHERE batch_id=$1  ";
const getTeacherProfiles="SELECT CONCAT_WS ( ',',teacher_profile1, teacher_profile2, teacher_profile3,teacher_profile4,teacher_profile5 ,teacher_profile6,teacher_profile7,teacher_profile8,teacher_profile9,teacher_profile10) AS teacher_profile_names FROM batch_info WHERE batch_id=$1 ";
const getStudentProfiles="SELECT CONCAT_WS ( ',',student_profile1, student_profile2, student_profile3,student_profile4,student_profile5 ,student_profile6,student_profile7,student_profile8,student_profile9,student_profile10) AS student_profile_names FROM batch_info WHERE batch_id=$1 ";

const getAllTeacherProfiles="SELECT CONCAT_WS ( ',',teacher_profile1, teacher_profile2, teacher_profile3,teacher_profile4,teacher_profile5 ,teacher_profile6,teacher_profile7,teacher_profile8,teacher_profile9,teacher_profile10) AS teacher_profile_names FROM batch_info";
const getAllStudentProfiles="SELECT CONCAT_WS ( ',',student_profile1, student_profile2, student_profile3,student_profile4,student_profile5 ,student_profile6,student_profile7,student_profile8,student_profile9,student_profile10) AS student_profile_names FROM batch_info";
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
    getAllStudentProfiles,
    getAllTeacherProfiles,
};