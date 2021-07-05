const express = require("express");
const router = express.Router();
const {
  setLimit,
  updateLimit,
  deleteLimit,
  getLimit,
} = require("../controllers/Restrictions");

router.post("/setLimit", setLimit);
router.put("/updateLimit", updateLimit);
router.delete("/deleteLimit", deleteLimit);
router.get("/getLimit", getLimit);

module.exports = router;
