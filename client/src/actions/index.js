import dogService from '../services/dogs';
import temperamentService from '../services/temperaments';

export function getDogs() {
  return async function (dispatch) {
    dispatch(getBreedsStart());
    try {
      const dogs = await dogService.getAll();
      return dispatch({
        type: 'GET_DOGS',
        payload: dogs,
      });
    } catch (error) {
      console.log({ message: error.message });
    }
  };
}

export function getDogsName(name) {
  return async function (dispatch) {
    dispatch(getBreedsStart());
    try {
      const dog = await dogService.getResourceByQuery(name);
      return dispatch({
        type: 'GET_DOGS_NAME',
        payload: dog,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function getTemperaments() {
  return async function (dispatch) {
    const temperaments = await temperamentService.getAll();
    return dispatch({
      type: 'GET_TEMPERAMENTS',
      payload: temperaments,
    });
  };
}

export function postDog(payload) {
  return async function () {
    const newDog = await dogService.create(payload);
    return newDog;
  };
}

export function orderByName(payload) {
  return {
    type: 'ORDER_BY_NAME',
    payload,
  };
}

export function orderByWeight(payload) {
  return {
    type: 'ORDER_BY_WEIGHT',
    payload,
  };
}

export function getDogDetail(id) {
  return async function (dispatch) {
    dispatch(getBreedsStart());
    try {
      if (id) {
        const dog = await dogService.getResourceByParams(id);
        return dispatch({
          type: 'GET_DOG_DETAIL',
          payload: dog,
        });
      } else {
        return dispatch({
          type: 'GET_DOG_DETAIL',
          payload: null,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
}

export function filterDogsByTemperaments(payload) {
  return {
    type: 'GET_FILTER_BY_TEMPERAMENTS',
    payload,
  };
}

export function filterCreated(payload) {
  return {
    type: 'FILTER_CREATED',
    payload,
  };
}

export function getBreedsStart() {
  return {
    type: 'GET_BREEDS_START',
  };
}
