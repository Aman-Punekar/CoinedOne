const express = require("express");
const router = express.Router();
const {
  blockApp,
  unblockApp,
  getBlockedApps,
} = require("../controllers/blockUnblock");

router.post("/blockApp", blockApp);
router.delete("/unblock", unblockApp);
router.get("/getBlockedApps", getBlockedApps);

module.exports = router;
