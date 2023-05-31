const express = require ("express");
const router = express.Router()
const controllers = require ("../controllers/ContactControllers");

//method POST
//Adding New Contact
router.get("/",controllers.getContact);
router.post("/newuser",controllers.postContact);
router.put("/:id",controllers.updateContactByID);
router.delete("/:id",controllers.deleteContactByID);
module.exports = router