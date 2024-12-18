import styles from './footer.module.css'
const footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.contain_box}>
        <div className={styles.box}>
          <div className={styles.box_items}>
            <div className={styles.contents}>
              <p>Social Media: SeangSang</p>
              <p>Terms of User Privacy Policy</p>
              <p>@2025 SeangSang</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default footer