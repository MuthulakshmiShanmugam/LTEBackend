const {Router} =require('express');
const controller=require("../controllers/teacher.controller");

const router=Router();



router.get('/',controller.getTeacher);
router.get('/:teacher_id',controller.getTeacherById);
router.post('/',controller.addTeacher);
router.delete('/:teacher_id',controller.removeTeacher);
router.put('/:teacher_id',controller.updateTeacher);





module.exports=router;