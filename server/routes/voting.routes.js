const express = require("express");

// Controllers
const Controllers = require("../controllers/voting.controllers");

const votingRouter = express.Router();

//Routes

votingRouter.get("/", Controllers.findAllVoting);

votingRouter.get("/top", Controllers.findTopSingleVoting);

votingRouter.post("/new", Controllers.createNewVoting);

votingRouter.get("/:id", Controllers.findOneSingleVoting);

votingRouter.put("/update/:id", Controllers.updateExistingVoting);

module.exports = { votingRouter };
