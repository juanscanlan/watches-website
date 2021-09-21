import formImage from "../../../assets/contactUs/formImage2.jpg";

const ContactUs = (props) => {
  return (
    <div className="ContactUs" id="contactUs">
      <h3 className="ContactUs__title">✉️ Contact Us ✉️</h3>
      <div className="ContactUs__container">
        <div className="ContactUs__image">
          <img src={formImage} alt="Contact us" />
        </div>
        <form className="ContactUs__form">
          <div className="ContactUs__inputs">
            <input type="text" placeholder="First Name" />
            <input type="text" placeholder="Last Name" />
          </div>
          <div className="ContactUs__inputs">
            <input type="email" placeholder="Email" />
            <input type="number" placeholder="Phone Number" />
          </div>
          <div className="ContactUs__message">
            <textarea placeholder="Message" cols="30" rows="10"></textarea>
          </div>
          <button type="submit" className="ContactUs__button">
            Submit Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
