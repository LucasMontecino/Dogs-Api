const axios = require("axios");
const { Dog, Temperament } = require("../db");
const apiKey =
  "live_PQABFoa3dOATTWeu88Ff60pEhDkYqFLjJJamzt5RQMIJSlyutrpdfOheuumTqrHo";

const getDogsImages = async () => {
  const apiUrl = await axios.get(
    `https://api.thedogapi.com/v1/images/?limit=10&page=0&order=DESC`
  );
  const apiInfo = apiUrl.data;
  console.log(apiInfo);
  return apiInfo;
};

const getDogsApi = async () => {
  const apiUrl = await axios.get(
    `https://api.thedogapi.com/v1/breeds?api_key=${apiKey}`
  );
  const apiInfo = apiUrl.data.map((dog) => {
    let tempArray = [];
    if (dog.temperament) {
      tempArray = dog.temperament.split(", ");
    }

    let heightArray = [];
    if (dog.height.metric) {
      heightArray = dog.height.metric.split(" - ");
    }

    let weightArray = [];
    if (dog.weight.metric) {
      weightArray = dog.weight.metric.split(" - ");
    }

    return {
      id: dog.id ? dog.id : "id doesnt exist",
      name: dog.name ? dog.name : "name doesnt exist",
      height: heightArray ? heightArray : "height doesnt exist",
      weight: weightArray ? weightArray : "weight doesnt exist",
      temperaments: tempArray ? tempArray : "temp doesnt exist",
      life_span: dog.life_span ? dog.life_span : "life_span doesnt exist",
      image: dog.reference_image_id
        ? dog.reference_image_id
        : "image not found",
    };
  });
  return apiInfo;
};

const getDogsDb = async () => {
  return await Dog.findAll({
    include: {
      model: Temperament,
      attributes: ["name"],
      through: {
        attributes: [],
      },
    },
  });
};

const getDogs = async () => {
  const apiDogs = await getDogsApi();
  const dbDogs = await getDogsDb();
  const infoTotal = [...apiDogs, ...dbDogs];
  return infoTotal;
};

module.exports = { getDogs, getDogsImages };
