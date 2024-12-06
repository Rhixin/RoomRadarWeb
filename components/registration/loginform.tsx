import { FaFacebookF, FaGithub, FaGoogle, FaLinkedinIn } from "react-icons/fa";

const LoginForm = ({ toggleForm }) => {
  return (
    <form id="login-form">
      <h1>Sign In</h1>
      <div className="social-icons">
        <a href="#" className="icon">
          <FaGoogle />
        </a>
        <a href="#" className="icon">
          <FaFacebookF />
        </a>
        <a href="#" className="icon">
          <FaGithub />
        </a>
        <a href="#" className="icon">
          <FaLinkedinIn />
        </a>
      </div>
      <span>or use your email password</span>
      <input type="email" placeholder="Email" />
      <input type="password" placeholder="Password" />
      <button>Log In</button>
      <a>
        Don't Have an Account?{" "}
        <b className="toggle-text" onClick={toggleForm}>
          Sign Up
        </b>
      </a>
    </form>
  );
};

export default LoginForm;
