import { Link } from 'react-router-dom';
import style from './Dogs.module.css';
import DogCard from '../DogCard/DogCard';

const Dogs = ({ dogs }) => {
  return (
    <div className={style.container_cards}>
      {dogs &&
        dogs.map((el) => {
          return (
            <div className={style.container_card} key={el.id}>
              <Link to={'/home/' + el.id}>
                <DogCard
                  name={el.name}
                  image={el.image}
                  temperament={
                    el.temperaments[0].name
                      ? el.temperaments.map((el) => el.name)
                      : el.temperaments
                  }
                  weight={el.weight}
                  key={el.id}
                />
              </Link>
            </div>
          );
        })}
    </div>
  );
};

export default Dogs;
