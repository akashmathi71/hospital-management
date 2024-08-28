const express = require("express");
const router = express.Router();
const AdminAuth = require("../middleware/authmiddleware");
const {
  addStaff,
  updateStaff,
  ListofStaff,
  deleteStaff,
  searchStaff,
} = require("../controllers/staffManagement.controllers");

router.post("/addStaff" ,addStaff);
router.put("/updateStaff/:id",  updateStaff);
router.get("/ListofStaff", ListofStaff);
router.delete("/deleteStaff/:id",  deleteStaff);
router.post("/searchStaff",searchStaff);

module.exports = router;
