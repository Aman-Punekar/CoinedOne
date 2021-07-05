const express = require("express");
const router = express.Router();
const {
  addSchedule,
  getSchedules,
  deleteSchedule,
  updateSchedule,
} = require("../controllers/Schedules");

router.post("/addSchedule", addSchedule);
router.get("/getSchedules", getSchedules);
router.delete("/deleteSchedule", deleteSchedule);
router.put("/updateSchedule", updateSchedule);

module.exports = router;