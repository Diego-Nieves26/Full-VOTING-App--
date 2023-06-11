const mongoose = require("mongoose");

const VotingSchema = new mongoose.Schema({
  question: { type: String },
  answer: [{ i: String, count: Number }],
  count: { type: Number },
  createDate: { type: String },
});

const VotingModel = mongoose.model("VotingModel", VotingSchema);

module.exports = VotingModel;
