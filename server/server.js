require("dotenv").config();

const express = require("express");
const app = express();
const cors = require("cors");

// Routers
const { votingRouter } = require("./routes/voting.routes");

require("./config/mongoose_config");

app.use(cors());

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

// Define endpoints
app.use("/api/v1/voting", votingRouter);

const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log("Listening at Port " + port);
});
