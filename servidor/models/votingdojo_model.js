const mongoose = require("mongoose");

const Votingdojo_Schema = new mongoose.Schema({
  question: { type: String },
  answer: [{ i: String, count: Number }],
  count: {type: Number}
});

const Votingdojo = mongoose.model("Votingdojo", Votingdojo_Schema);

module.exports = Votingdojo;
