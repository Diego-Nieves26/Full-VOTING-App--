const Votingdojo_Controller = require("../controllers/Votingdojo_Controller");

module.exports = (app) => {
  app.get("/api/votingdojo", Votingdojo_Controller.findAllVotingdojo);
  app.get("/api/votingdojo/top", Votingdojo_Controller.findTopSingleVotingdojo);
  app.post("/api/votingdojo/new", Votingdojo_Controller.createNewVotingdojo);
  app.get("/api/votingdojo/:id", Votingdojo_Controller.findOneSingleVotingdojo);
  app.put("/api/votingdojo/update/:id", Votingdojo_Controller.updateExistingVotingDojo);
};
