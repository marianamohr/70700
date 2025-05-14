const { Router } = require("express");

const router = Router();

const pets = [{ pet: "Olivia", specie: "dog" }];

router.param("pet", (req, res, next, pet) => {
  console.log("param pet", pet);
  if (pet.length >= 3) {
    req.pet = pet;
    return next();
  }
  return res.status(400).send("Pet name must have more than 3 characters");
});

router.post("/", (req, res) => {
  const { pet, specie } = req.body;
  pets.push({ pet, specie });
  return res.status(201).send({ pet, specie });
});

router.get("/", (req, res) => {
  res.status(200).send(pets);
});

router.get("/:pet", (req, res) => {
  const { pet } = req;
  console.log("pet", pet);

  const petFound = pets.filter((p) => p.pet.toLowerCase().includes(pet.toLowerCase()));
  return res.status(200).json(petFound);
});
// especificidade certeza
router.put("/:pet",  (req, res) => {
  const { pet } = req;
  console.log("pet put", pet);
  const petIndex = pets.findIndex((p) => p.pet === pet);
  console.log(petIndex)
  console.log(pets[petIndex])
  pets[petIndex].adotado = true
  console.log(pets[petIndex])

  return res.status(200).json({pet: pets[petIndex]});
})

module.exports = router;
