import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getDogDetail } from "../actions";
import style from "./DogDetail.module.css";
import ReactLoading from "react-loading";

export default function DogDetail(props) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDogDetail(props.match.params.id));
    return () => {
      dispatch(getDogDetail(""));
    };
  }, [dispatch, props.match.params.id]);

  const details = useSelector((state) => state.detail);
  const isLoading = useSelector((state) => state.isLoading);

  if (isLoading) {
    return (
      <div className={style.box_loading}>
        <ReactLoading
          type={"spin"}
          color={"#fff"}
          height={"350px"}
          width={"350px"}
        />
        <p className={style.text_loading}>Loading...</p>
      </div>
    );
  }

  return (
    <div className={style.main_container}>
      <div className={style.button_container}>
        <Link to="/home">
          <button className={style.button_home}>Home</button>
        </Link>
      </div>
      {details && (
        <div className={style.sub_container}>
          <div className={style.container_elements}>
            <div className={style.image_container}>
              <img src={details.image} alt="img not found" />
            </div>

            <div className={style.right_container}>
              <h1>{details.name}</h1>
              <h3>{`Height: ${details.height && details.height[0]} - ${
                details.height && details.height[1]
              } cm.`}</h3>
              <h3>{`Weight: ${details.weight && details.weight[0]} - ${
                details.weight && details.weight[1]
              } kg.`}</h3>
              <h3>{"Life Span: " + details.life_span}</h3>
              <div>
                <h3>Temperaments:</h3>
                <ul className={style.list_container}>
                  {details.temperaments && details.temperaments[0].name
                    ? details.temperaments.map((el) => (
                        <li key={el.name}>{el.name}</li>
                      ))
                    : details.temperaments &&
                      details.temperaments.map((el) => <li>{el}</li>)}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// {/* <div>
// <img src={details.image} alt={`imagen de ${details.name}`}/>
// </div>

// <div>
// <h1>{details.name}</h1>
// <h3>{`Height: ${details.height && details.height[0]} - ${details.height && details.height[1]} cm.`}</h3>
// <h3>{`Weight: ${details.weight && details.weight[0]} - ${details.weight && details.weight[1]} kg.`}</h3>
// <h3>{`Lifespan: ${details.life_span}`}</h3>
// <div>
//     <h3>Temperaments</h3>
//     <p>{details.temperaments}</p>
//     {/* <ul>
//         {temperamentDog.map(t => <li key={t}>{t}</li>)}
//     </ul> */}
// </div>
// </div> */}
