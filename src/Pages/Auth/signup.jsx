import React from "react";
import logo from "../../assets/logo.jpg"; // Adjust the path to your logo file
import workImage from "../../assets/work.png"; // Adjust the path to your work image file
import ellipseImage from "../../assets/ellipse.png"; // Adjust the path to your ellipse image file
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Link } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();
  const [formData, setformData] = useState({
    email: "",
    name: "",
    password: "",
  });

  const handleInputChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setformData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log("email",formData.email)
    // console.log("name",formData.name)
    // console.log("password",formData.password)
    try {
      const resp = await fetch("https://careerdhrishti-backend.onrender.com/api/user/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/JSON",
        },
        body: JSON.stringify(formData),
      });
      const res = await resp.json();
      console.log(res);
      navigate("/signin");
    } catch (error) {
      console.log(error);
    } finally {
      setformData({
        email: "",
        name: "",
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

      {/* Container for the signup form and image */}
      <div className="mx-auto max-w-7xl px-4 py-8 relative z-10 bg-gray-200  border-primary pt-2 pb-2 rounded-lg shadow-lg">
        <div className="flex justify-between items-stretch">
          {/* Signup form */}
          <div className="flex flex-col w-full md:w-1/2">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-primary md:text-2xl">
                CareerDrishti.ai
              </h1>
              <h1 className="text-sm text-black md:text-2xl">
                Please Sign up to continue..
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
                    htmlFor="name"
                    className="block mb-2 text-sm font-medium text-primary"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="bg-gray-50 border border-gray-300 text-primary sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                    placeholder="John Doe"
                    required
                    value={formData.name}
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
                  Create an account
                </button>
                <p className="text-sm font-light text-primary">
                  Already have an account?{" "}
                  <Link
                    to={"/signin"}
                    className="font-medium text-primary-600 hover:underline"
                  >
                    Login here
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

export default Signup;
