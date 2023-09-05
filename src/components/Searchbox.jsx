import styles from "./searchbox.module.css";

const Searchbox = ()=>{
  return (
  <section className={styles.searchBoxContainer}>
    <input type="text" className={styles.searchbox} placeholder="Enter a country name..."/>
  </section>
  )
}

export default Searchbox;