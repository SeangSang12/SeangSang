import "./style/Contact.css";
import { FaTelegram,FaEnvelope,FaGithub,FaLinkedin } from "react-icons/fa";
const Contact = () => {
  return (
    <div className="container-contact">
      <div className="box-contact">
        <h3>Social Media Contact</h3>
        <div className="box-icons">
          <FaEnvelope size={30} color="white"/>
          <div className="text">
          <h4>seangsang@gmail.com</h4>
          </div>
        </div>
        <div className="box-icons">
          <FaTelegram size={30} color="white"/>
          <div className="text">
          <h4>seangsang</h4>
          </div>
        </div>
        <div className="box-icons">
          <FaLinkedin size={30} color="white"/>
          <div className="text">
          <h4>seangsang</h4>
          </div>
        </div>
        <div className="box-icons">
          <FaGithub size={30} color="white"/>
          <div className="text">
          <h4>seangsang</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
