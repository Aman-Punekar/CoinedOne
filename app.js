require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const app = express();

const db = process.env.DATABASE;

//routes
const blockUnblock = require("./routes/blockUnblock");
const restrictions = require("./routes/restrictions");
const schedule = require("./routes/schedule");

//connecting to the server
mongoose
  .connect(db, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log("Connection is successful");
  })
  .catch((err) => console.log("Connection is unsuccessful"));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// FOR TESTING
// app.use((req, res,next) => {
//   try {
//     req.userId = 3;
//     next();
//     // res.status(200).send("Success");
//   } catch (err) {
//     // res.status(400).send({ err });
//   }
// });

app.use("/api/blockUnblock", blockUnblock);
app.use("/api/restrictions", restrictions);
app.use("/api/schedule", schedule);

app.listen(8000, () => {
  console.log(`Server running on port 8000 🔥`);
});
