import React from "react";

function SignUp() {
  return (
    <div className="signUp">
      <div className="signUp__box1">
        <h4>Join the newsletter!</h4>

        <form className="signUp__input">
          <input type="email" placeholder="Email" />
          <button type="submit">Sign Up</button>
        </form>
      </div>
      <div className="signUp__box2">
        <h4>Follow us on social media!</h4>
        <div className="signUp__social">
          <i className="fab fa-facebook"></i>
          <i className="fab fa-instagram"></i>
          <i className="fab fa-twitter"></i>
          <i className="fab fa-pinterest"></i>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
