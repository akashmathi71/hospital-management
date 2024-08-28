const express = require("express");
const router = express.Router();
const AdminAuth = require("../middleware/authmiddleware");
const {
  addPatient,
  sendPatientLinks,
  getAllPatients,
  updatePatient,
  deletePatient,
} = require("../controllers/patientManagement.controllers");

router.post("/addPatient",  addPatient);
router.post("/sendPatientLinks/:patientId",sendPatientLinks);
router.get("/getAllPatients", getAllPatients);
router.put("/updatePatient/:patientId", updatePatient);
router.delete("/deletePatient/:patientId", deletePatient);

module.exports = router;
