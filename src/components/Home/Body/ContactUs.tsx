import formImage from "../../../assets/contactUs/formImage2.jpg";

import { useForm } from "react-hook-form";

type FormValues = {
  firstName: string;
  lastName: string;
  email: string;
  phone: number;
  message: string;
};

const ContactUs = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmitHandler = (data: object) => {
    console.log(data);
  };

  return (
    <div className="ContactUs" id="contactUs">
      <h3 className="ContactUs__title">✉️ Contact Us ✉️</h3>
      <div className="ContactUs__container">
        <div className="ContactUs__image">
          <img src={formImage} alt="Contact us" />
        </div>
        <form
          className="ContactUs__form"
          onSubmit={handleSubmit(onSubmitHandler)}
        >
          <div className="ContactUs__inputs">
            {errors.firstName && <span>{errors.firstName.message}</span>}
            {errors.lastName && <span>{errors.lastName.message}</span>}
          </div>
          <div className="ContactUs__inputs">
            <input
              type="text"
              placeholder="First Name"
              {...register("firstName", { required: "First name is required" })}
            />
            <input
              type="text"
              placeholder="Last Name"
              {...register("lastName", { required: "Last name is required" })}
            />
          </div>
          <div className="ContactUs__inputs">
            {errors.firstName && <span>{errors.email?.message}</span>}
            {errors.lastName && <span>{errors.phone?.message}</span>}
          </div>
          <div className="ContactUs__inputs">
            <input
              type="email"
              placeholder="Email"
              {...register("email", { required: "Email is required" })}
            />
            <input
              type="number"
              placeholder="Phone Number"
              {...register("phone", {
                required: "Phone number is required",
                valueAsNumber: true,
              })}
            />
          </div>
          {errors.firstName && <span>{errors.message?.message}</span>}
          <div className="ContactUs__message">
            <textarea
              placeholder="Message"
              cols={30}
              rows={10}
              {...register("message", {
                required: "A message is required",
              })}
            ></textarea>
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
