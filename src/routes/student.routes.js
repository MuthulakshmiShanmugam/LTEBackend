const {Router} =require('express');
const controller=require("../controllers/student.controller");

const router=Router();



router.get('/',controller.getStudent);
router.get('/:student_id',controller.getStudentById);
router.post('/',controller.addStudent);
router.delete('/:student_id',controller.removeStudent);
router.put('/:student_id',controller.updateStudent);





module.exports=router;