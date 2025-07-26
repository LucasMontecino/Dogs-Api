import ReactLoading from 'react-loading';
import style from './Home.module.css';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  filterCreated,
  getDogs,
  orderByName,
  orderByWeight,
  getTemperaments,
  filterDogsByTemperaments,
} from '../../actions';
import { Link } from 'react-router-dom';
import Paginate from '../Paginate/Paginate';
import SearchBar from '../SearchBar/SearchBar';
import Dogs from '../Dogs/Dogs';
import Footer from '../Footer/Footer';
import logoImg from '../../images/logo.png';

export default function Home() {
  const dispatch = useDispatch();
  // este es el arreglo del estado con todos los perros OBVIAMENTE!!!
  const allDogs = useSelector((state) => state.dogs);
  const allTemperaments = useSelector((state) => state.temperaments);
  const isLoading = useSelector((state) => state.isLoading);

  const [toggle, setToggle] = useState(false);

  const [order, setOrder] = useState('');

  const [currentPage, setCurrentPage] = useState(1);
  const dogsPerPage = 8;
  const indexOfLastDog = currentPage * dogsPerPage;
  const indexOfFirstDog = indexOfLastDog - dogsPerPage;
  const currentDogs = allDogs.slice(indexOfFirstDog, indexOfLastDog);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    dispatch(getDogs());
    dispatch(getTemperaments());
  }, [dispatch]);

  const handleFilterTemperaments = (e) => {
    e.preventDefault();
    dispatch(filterDogsByTemperaments(e.target.value));
    setCurrentPage(1);
  };

  const handleSort = (e) => {
    e.preventDefault();
    dispatch(orderByName(e.target.value));
    setCurrentPage(1);
    setOrder(`${e.target.value}`);
  };

  const handleWeight = (e) => {
    e.preventDefault();
    dispatch(orderByWeight(e.target.value));
    setOrder(`${e.target.value}`);
  };

  const handleFilterCreated = (e) => {
    dispatch(filterCreated(e.target.value));
    setCurrentPage(1);
  };

  const handleButton = () => {
    dispatch(getDogs());
    dispatch(getTemperaments());
    setCurrentPage(1);
  };

  if (isLoading) {
    return (
      <div className={style.box_loading}>
        <ReactLoading
          type={'spin'}
          color={'#fff'}
          height={'350px'}
          width={'350px'}
        />
        <p className={style.text_loading}>Loading...</p>
      </div>
    );
  }

  return (
    <>
      <header className={style.header}>
        <div className={`${style.container} ${style.row}`}>
          <button
            className={style.navToggle}
            onClick={() => setToggle((prev) => !prev)}
          >
            <span className={style.hamburger}></span>
          </button>
          <Link to="/" className={style.logo}>
            <img src={logoImg} alt="dogs-img" />{' '}
          </Link>

          <nav
            className={`${style.nav} ${toggle ? style.nav__visibility : ''}`}
          >
            <SearchBar setCurrentPage={setCurrentPage} />

            <div className={style.column}>
              <div className={style.select__child}>
                <select onChange={(e) => handleSort(e)} value={order}>
                  <option value="">Alphabetical order</option>
                  <option value="asc">Ascending</option>
                  <option value="desc">Descending</option>
                </select>

                <select onChange={(e) => handleWeight(e)} value={order}>
                  <option value="">Filter by weigth</option>
                  <option value="max_weight">Max</option>
                  <option value="min_weight">Min</option>
                </select>
              </div>

              <div className={style.select__child}>
                <select onChange={(e) => handleFilterTemperaments(e)}>
                  <option disabled defaultValue>
                    Temperaments
                  </option>
                  <option value="All">All Temperaments</option>
                  {allTemperaments?.map((temp) => (
                    <option value={temp.name} key={temp.id}>
                      {temp.name}
                    </option>
                  ))}
                </select>

                <select onChange={(e) => handleFilterCreated(e)}>
                  <option disabled defaultValue>
                    Api/Created Filter
                  </option>
                  <option value="All">All</option>
                  <option value="api">Api</option>
                  <option value="created">Created</option>
                </select>
              </div>
            </div>

            <button className={style.create_dog} onClick={handleButton}>
              Reset Filters
            </button>
            <Link to="/dog">
              <button className={style.create_dog}>Create New Dog</button>
            </Link>
          </nav>
        </div>
      </header>

      <div className={style.main_container}>
        <Dogs dogs={currentDogs} />
        <Paginate
          dogsPerPage={dogsPerPage}
          allDogs={allDogs.length}
          paginate={paginate}
        />
      </div>
      <Footer />
    </>
  );
}
