const { Router } = require("express");
const dogsImageRoute = Router();
const { getDogsImages } = require("../controllers/getDogs");

dogsImageRoute.get("/", async (req, res) => {
  try {
    const oneImage = await getDogsImages();
    console.log(oneImage);
    if (oneImage) {
      res.status(200).send(oneImage);
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
});

module.exports = dogsImageRoute;
