const getAdminLogin="SELECT * FROM adminlogin_info";
const getAdminLoginById="SELECT * FROM adminlogin_info WHERE admin_id= $1";
const getAdminLoginValues="SELECT username,password FROM adminlogin_info WHERE username=$1 AND password=$2";
const addAdmin="INSERT INTO adminlogin_info(admin_id,username,password) VALUES ($1,$2,$3)";


module.exports={
    getAdminLogin,
    getAdminLoginById,
    getAdminLoginValues,
    addAdmin
    
};