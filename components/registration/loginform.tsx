import { FaFacebookF, FaGithub, FaGoogle, FaLinkedinIn } from "react-icons/fa";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { logInUser } from "@/lib/registration";

const LoginForm = ({ toggleForm }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [isRouterReady, setIsRouterReady] = useState(false); // State to wait for router readiness
  const router = useRouter();

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle login submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await logInUser(formData);

      if (response.success) {
        //Successful log in then redirect
        //TODO: Handle session or token
        alert("Logged in successfully!");
        localStorage.setItem("userSession", JSON.stringify(response));
        router.push("/home");
      } else {
        alert("Login failed. Check credentials.");
      }
    } catch (error) {
      console.error("Login failed:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <form
      id="login-form"
      onSubmit={handleSubmit}
      className="flex flex-col justify-center items-center"
    >
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
      <input
        type="email"
        name="email"
        placeholder="Email"
        onChange={handleChange}
        value={formData.email}
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        onChange={handleChange}
        value={formData.password}
      />
      <button type="submit">Log In</button>
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
