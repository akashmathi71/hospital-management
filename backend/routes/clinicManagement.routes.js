const express = require("express");
const router = express.Router();
const AdminAuth = require("../middleware/authmiddleware");
const {
  addClinic,
  updateClinicLocation,
  deleteClinicLocation,
  getAllClinics,
} = require("../controllers/clinicManagement.controllers");

//route for adding a new clinic location
router.post("/addClinic", addClinic);
router.put("/updateClinicLocation/:clinicId",  updateClinicLocation);
router.delete(
  "/deleteClinicLocation/:clinicId",

  deleteClinicLocation
);
router.get("/getAllClinics", getAllClinics);

module.exports = router;
