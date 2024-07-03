import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/logo.jpg";
import workImage from "../../assets/work.png";
import ellipseImage from "../../assets/ellipse.png";

function Signin() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const resp = await fetch("http://localhost:5000/api/auth/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        });
        const res = await resp.json();
        localStorage.setItem("token", res.token);
        localStorage.setItem("userName", res.token.username); // Store the username
        console.log(res.token.username);
        if (res.message !== "invalid Credentials") {
            navigate("/");
            alert("login successful, click Ok to continue");
        } else {
            setErrorMessage("Invalid credentials. Please try again.");
        }
    } catch (error) {
        console.log(error);
        setErrorMessage("An error occurred. Please try again.");
    } finally {
        setFormData({
            email: "",
            password: "",
        });
    }
};


  return (
    <section className="relative bg-white flex justify-center items-center h-screen">
      {/* Ellipse background */}
      <div
        className="absolute inset-0 bg-cover bg-no-repeat bg-center"
        style={{ backgroundImage: `url(${ellipseImage})` }}
      ></div>

      {/* Back to Home */}
      <div className="absolute top-4 right-4">
        <Link to="/" className="text-primary text-lg font-semibold">
          ← Back to Home
        </Link>
      </div>

      {/* Container for the signin form and image */}
      <div className="mx-auto max-w-7xl px-4 py-8 relative z-10 bg-gray-200 border-primary pt-2 pb-2 rounded-lg shadow-lg">
        <div className="flex justify-between items-stretch">
          {/* Signin form */}
          <div className="flex flex-col w-full md:w-1/2">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-primary md:text-2xl">
                CareerDrishti.ai
              </h1>
              <h1 className="text-sm text-black md:text-2xl">
                Please Log in to continue..
              </h1>
              <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-primary"
                  >
                    Your email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-primary sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                    placeholder="name@company.com"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-primary"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-primary sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                    required
                    value={formData.password}
                    onChange={handleInputChange}
                  />
                  {errorMessage && (
                    <p className="text-sm text-red-600">{errorMessage}</p>
                  )}
                </div>
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="terms"
                      aria-describedby="terms"
                      type="checkbox"
                      className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300"
                      required
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="terms" className="font-light text-primary">
                      I accept the{" "}
                      <a
                        className="font-medium text-primary-600 hover:underline"
                        href="#"
                      >
                        Terms and Conditions
                      </a>
                    </label>
                  </div>
                </div>
                <button
                  type="submit"
                  className="w-full text-black bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-primary"
                >
                  Login into account
                </button>
                <p className="text-sm font-light text-primary">
                  Don't have an account?{" "}
                  <Link
                    to={"/signup"}
                    className="font-medium text-primary-600 hover:underline"
                  >
                    Signup here
                  </Link>
                </p>
              </form>
            </div>
          </div>
          {/* Image */}
          <div className="hidden md:flex md:w-1/2 bg-grey-100">
            <img src={workImage} alt="Work" className="w-full rounded-lg" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Signin;
