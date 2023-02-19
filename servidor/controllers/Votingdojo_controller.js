const Votingdojo = require("../models/votingdojo_model");

//traer todos
module.exports.findAllVotingdojo = (req, res) => {
  Votingdojo.find()
    .then((allVotingdojo) => res.json({ votingdojos: allVotingdojo }))
    .catch((err) =>
      res.json({ message: "no se trajo los chistes", error: err })
    );
};

//trae el id
module.exports.findOneSingleVotingdojo = (req, res) => {
  Votingdojo.findOne({ _id: req.params.id })
    .then((OneSingleVotingdojo) =>
      res.json({ votingdojo: OneSingleVotingdojo })
    )
    .catch((err) => res.json({ message: "no se trajo el id", error: err }));
};

//las 3 mas importantes
module.exports.findTopSingleVotingdojo = (req, res) => {
  Votingdojo.find()
    .then((allVotingdojo) => {
      const rpta = []

      if (allVotingdojo.length === 0) {
        return res.json({ message: "no hay chistes creados" });
      }

      if (allVotingdojo.length <= 3) {
        return res.json(allVotingdojo);
      }

      allVotingdojo.sort((x, i) => {
        return x.count - i.count;
      });

      rpta.push(allVotingdojo[allVotingdojo.length - 1])
      rpta.push(allVotingdojo[allVotingdojo.length - 2])
      rpta.push(allVotingdojo[allVotingdojo.length - 3])

      return res.json(
        rpta
      );
    })
    .catch((err) =>
      res.json({ message: "no se trajo chistes random,", error: err })
    );
};

//crea una nueva pregunta
module.exports.createNewVotingdojo = (req, res) => {
  Votingdojo.create(req.body)
    .then((newlyCreateVoting) => res.json({ votingdojo: newlyCreateVoting }))
    .catch((err) =>
      res.json({ message: "voting no se ha creado", error: err })
    );
};

//actualiza una pregunta
module.exports.updateExistingVotingDojo = (req, res) => {
  Votingdojo.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
    .then((updatedVotingDojo) => res.json({ updatedVotingDojo: updatedVotingDojo }))
    .catch((err) => res.json({ message: "no se ha actualizado el voto" }));
};
