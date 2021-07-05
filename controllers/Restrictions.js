const Data = require("../models/modelSchema");

const setLimit = async (req, res) => {
  try {
    await Data.updateOne(
      { userId: req.userId },
      { "$push": { usageLimit: req.body } }
    );

    return res.status(200).send({msg:true});
  } catch (err) {
    return res.status(400).send({err});
  }
};

const updateLimit = async (req, res) => {
  try {
    await Data.findOneAndUpdate(
      { "$and": [{ userId: req.userId }, { "usageLimit.app": req.body.app }] },
      {
        "$set": {
          "usageLimit.$.weekdays": req.body.weekdays,
          "usageLimit.$.weekends": req.body.weekends,
        },
      }
    );

    res.status(200).send({msg:true});
  } catch (err) {
    return res.status(400).send({ err});
  }
};

const deleteLimit = async (req, res) => {
  try {
    await Data.findOneAndUpdate(
      { userId: req.userId },
      { "$pull": { "usageLimit": {"app":req.body.app} } }
    );

    res.status(200).send({ msg: true });
  } catch (err) {
    return res.status(400).send({ err });
  }
};

const getLimit = async (req, res) => {
  try {
    let usageLimit = await Data.findOne(
      { userId: req.userId },
      { usageLimit: 1, _id: 0 }
    );
    res.status(200).send(usageLimit);
  } catch (err) {
    return res.status(400).send({ err });
  }
};

module.exports = { setLimit, updateLimit, deleteLimit, getLimit };
