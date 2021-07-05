const mongoose = require("mongoose");

const dataSchema = new mongoose.Schema({
  userId: Number,   // for testing 
  workTime: [
    {
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
