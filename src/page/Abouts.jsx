import styles from "./style/About.module.css";
import MainProfile from "../assets/sang.jpg";
import m1 from "../assets/m1.jpg";
import m2 from "../assets/m2.jpg";
import m3 from "../assets/m3.jpg";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaGraduationCap, FaBriefcase } from "react-icons/fa";
const Abouts = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.profile}>
          <img src={MainProfile} alt="Profile" />
        </div>
        <h1>I'm Seang Sang</h1>
        <p> Student BBU compus of BMC.</p>
      </div>
      <div className={styles.box_gallery}>
        <div className={styles.Gallery}>
          <h3>Gallery Gradeuation Day</h3>
          <div className={styles.box_img}>
            <div className={styles.img}>
              <img src={m2} alt="memory" />
            </div>
            <div className={styles.img}>
              <img src={m1} alt="memory" />
            </div>
            <div className={styles.img}>
              <img src={m3} alt="memory" />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.box_education}>
        <h1>Education</h1>
        <h1>Experince</h1>
        {/* timeline */}
        <VerticalTimeline lineColor="#000">
          <VerticalTimelineElement
            className={styles.education}
            iconStyle={{ background: "#000", color: "#fff" }}
            icon={<FaBriefcase />}
            date="Present - 2023"
          >
            <h3>IT Support</h3>
            <p>I'm IT Support office at RAYA Group.</p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className={styles.education}
            iconStyle={{ background: "#000", color: "#fff" }}
            icon={<FaGraduationCap />}
            date="2023 - 2020"
          >
            <h3>University</h3>
            <p>I'm graduated Bachelor Degree at BBU.</p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className={styles.education}
            iconStyle={{ background: "#000", color: "#fff" }}
            icon={<FaGraduationCap />}
            date="2019 - 2014"
          >
            <h3>High School</h3>
            <p>I completed Hen Sen Kla Kon High School.</p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className={styles.education}
            iconStyle={{ background: "#000", color: "#fff" }}
            icon={<FaGraduationCap />}
            date="2013 - 2007"
          >
            <h3>Primary School</h3>
            <p>I completed Nonsiri Primary School.</p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </>
  );
};

export default Abouts;
