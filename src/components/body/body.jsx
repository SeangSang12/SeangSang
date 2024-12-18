import styles from "./body.module.css";
import Profile from "../../assets/profile.png";
import Body from '../../page/Abouts'
const body = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.profile}>
          <div className={styles.box_profile}>
            <img src={Profile} alt="" />
          </div>
        </div>
        <div className={styles.content}>
          <div className={styles.main_box}>
            <h2 datatype="I'm web developer ..">I'm web Developer.</h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default body;
