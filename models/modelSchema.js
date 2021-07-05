const mongoose = require("mongoose");
// var ObjectId = require('mongodb').ObjectID;

const dataSchema = new mongoose.Schema({
  userId: Number,
  workTime: [
    {
      // id: {
      //   type: Number,
      //   default: Date.now(),
      // },
      days: [String],
      slots: [
        {
          start: Number,
          end: Number,
        },
      ],
    },
  ],
  blockedApps: [String],
  usageLimit: [
    {
      app: String,
      weekdays: Number,
      weekends: Number,
    },
  ],
});

module.exports = mongoose.model("Data", dataSchema);
