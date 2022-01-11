const {Router} =require('express');
const controller=require("../controllers/batch.controller");

const router=Router();

// router.get('/',(req,res)=>{
//     res.send("using Api route");
// });

router.get('/',controller.getBatch);
router.get('/:batch_id',controller.getBatchById);
router.post('/',controller.addBatch);
router.delete('/:batch_id',controller.removeBatch);
router.put('/:batch_id',controller.updateBatch);
//router.put('/profiles/:group_id',controller.updateGroupProfiles);
router.get('/totalteacher/:batch_id',controller.getTotalTeachersProfilesCount);
router.get('/totalstudent/:batch_id',controller.getTotalStudentsProfilesCount);
router.get('/teacherslist/:batch_id',controller.getTeacherProfiles);
router.get('/studentslist/:batch_id',controller.getStudentProfiles);
router.get('/teachersnames/all',controller.getAllTeacherProfiles);
router.get('/studentsnames/all',controller.getAllStudentProfiles);





module.exports=router;