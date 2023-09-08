import React from 'react';
import { useDispatch } from 'react-redux';
import { setSearchTerm } from '../redux/searchbox/searchboxSlice'; // Import setSearchTerm from filtersSlice
import styles from './searchbox.module.css';

function Searchbox() {
  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(setSearchTerm(e.target.value));
  };

  return (
    <section className={styles.searchBoxContainer}>
      <input
        type="text"
        className={styles.searchbox}
        placeholder="Enter a country name..."
        onChange={(e) => handleChange(e)}
      />
    </section>
  );
}

export default Searchbox;
