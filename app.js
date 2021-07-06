require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = process.env.PORT || 8000


if(process.env.NODE_ENV=="production"){
  const db = process.env.MONGOURL;
}else{
  const db = process.env.DATABASE;
}

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
app.use((req, res, next) => {
  req.userId = 3;
  next();
});

app.use("/api/blockUnblock", blockUnblock);
app.use("/api/restrictions", restrictions);
app.use("/api/schedule", schedule);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
