const {Router} =require('express');
const controller=require("../controllers/adminlogin.controller");

const router=Router();



router.get('/',controller.getAdminLogin);
router.get('/:id',controller.getAdminLoginById);
router.get('/:username/:password',controller.getAdminLoginValues);



module.exports=router;