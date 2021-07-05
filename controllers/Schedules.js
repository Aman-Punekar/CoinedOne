const Data = require("../models/modelSchema");

const addSchedule = async (req, res) => {
  try {
    await Data.updateOne(
      { userId: req.userId },
      { "$push": { workTime: req.body } }
    );

    res.status(200).send({ msg: true });
  } catch (err) {
    res.status(400).send({err});
  }
};

const getSchedules = async (req, res) => {
  try {
    let workTimings = await Data.findOne(
      { userId: req.userId },
      { workTime: 1, _id: 0 }
    );

    res.status(200).send( workTimings);
  } catch (err) {
    res.status(400).send({err});
  }
};

const deleteSchedule = async (req, res) => {
  try {
    await Data.updateOne(
      { userId: req.userId },
      { "$pull": { "workTime": {"_id":req.body.id} } }
    );

    res.status(200).send({ msg: true });
  } catch (err) {
    res.status(400).send({err});
  }
};

const updateSchedule = async (req, res) => {
  try {
    await Data.updateOne(
      { "workTime._id": req.body._id },
      { "$set": { "workTime.$": req.body } }
    );
    res.status(200).send({ msg: true });
  } catch (err) {
    res.status(400).send({err});
  }
};

module.exports = {addSchedule, getSchedules, deleteSchedule, updateSchedule};