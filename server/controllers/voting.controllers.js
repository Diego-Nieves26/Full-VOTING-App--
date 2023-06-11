const VotingModel = require("../models/voting.model");

//traer todos
module.exports.findAllVoting = (req, res) => {
  VotingModel.find()
    .then((allVotings) => res.json({ allVotings: allVotings }))
    .catch((err) => res.json({ message: "Ocurrio un error", error: err }));
};

//trae el id
module.exports.findOneSingleVoting = (req, res) => {
  VotingModel.findOne({ _id: req.params.id })
    .then((OneSingleVoting) => res.json({ voting: OneSingleVoting }))
    .catch((err) => res.json({ message: "Ocurrio un error", error: err }));
};

//las 3 mas importantes
module.exports.findTopSingleVoting = (req, res) => {
  VotingModel.find()
    .then((allVoting) => {
      const rpta = [];

      if (allVoting.length === 0) {
        return res.json({ message: "no hay chistes creados" });
      }

      if (allVoting.length <= 3) {
        return res.json(allVoting);
      }

      allVoting.sort((x, i) => {
        return x.count - i.count;
      });

      rpta.push(allVoting[allVoting.length - 1]);
      rpta.push(allVoting[allVoting.length - 2]);
      rpta.push(allVoting[allVoting.length - 3]);

      return res.json(rpta);
    })
    .catch((err) => res.json({ message: "Ocurrio un error", error: err }));
};

//crea una nueva pregunta
module.exports.createNewVoting = (req, res) => {
  VotingModel.create(req.body)
    .then((newVoting) => res.json({ newVoting: newVoting }))
    .catch((err) => res.json({ message: "Ocurrio un error", error: err }));
};

//actualiza una pregunta
module.exports.updateExistingVoting = (req, res) => {
  VotingModel.findOneAndUpdate({ _id: req.params.id }, req.body)
    .then((updatedVoting) => res.json({ updatedVoting: updatedVoting }))
    .catch((err) => res.json({ message: "Ocurrio un error", error: err }));
};
