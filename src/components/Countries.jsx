import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCountries } from '../redux/countries/countriesSlice';
import styles from './countries.module.css';

function Countries() {
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.countries.countries);
  const loading = useSelector((state) => state.countries.loading);
  const error = useSelector((state) => state.countries.error);

  useEffect(() => {
    dispatch(fetchCountries());
  }, [dispatch]);

  if (loading) {
    return (<div>Loading ...</div>);
  } if (error) {
    return (<div>{error.message}</div>);
  }
  return (
    <div className={styles.container}>
      <h1 className={styles.header}>List of Countries</h1>
      <div className={styles.countriesContainer}>
        {countries.map((country) => (
          <div className={styles.countryContainer} key={country.name.common}>
            <img src={country.flags.svg} alt={country.flags.alt} className={styles.flag} />
            <span className={styles.commonName}>
              Common Name:
              {' '}
              {country.name.common}
            </span>
            <span className={styles.capitalName}>
              Capital Name:
              {' '}
              {country.capital}
            </span>
            <span className={styles.population}>
              Population:
              {' '}
              {country.population}
            </span>

          </div>
        ))}
      </div>
    </div>
  );
}

export default Countries;
