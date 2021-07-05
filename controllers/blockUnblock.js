const Data = require("../models/modelSchema");

const blockApp = async (req, res) => {
  try {
    await Data.updateOne(
      { userId: Number(req.userId) },
      { "$push": { blockedApps: req.body.blockApp } }
    );

    return res.status(200).send({ msg: true });
  } catch (err) {
    return res.status(400).send({ err });
  }
};

const unblockApp = async (req, res) => {
  try {
    await Data.updateOne(
      { userId: req.userId },
      { "$pull": { blockedApps: req.body.unblockApp } }
    );

    return res.status(200).send({ msg: true });
  } catch (err) {
    return res.status(400).send({ err });
  }
};

const getBlockedApps = async (req, res) => {
  try {
    let blockedApps = await Data.findOne(
      { userId: req.userId },
      { blockedApps: 1, _id: 0 }
    );
    return res.status(200).send(blockedApps);
  } catch (err) {
    res.status(400).send({err});
  }
};

module.exports = { blockApp, unblockApp, getBlockedApps };
