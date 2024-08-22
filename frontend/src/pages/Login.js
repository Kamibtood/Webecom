import React, { useState } from 'react';
import { FaEyeSlash, FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const handleInputChange = (event) => {
    const { name, value } = event?.target;
    if (name && value) {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value
      }));
    }
  };

  const handleSubmit = async (event) => {
    if (event) {
      event.preventDefault();
    }
  };

  return (
    <section id="Login">
      <div className="bg-white w-full max-w-sd mx-auto text-8xl relative container p-11 flex items-center justify-center rounded-r-full">
        <div>
          <img src="logo512.png" alt="todo" width={100} height={100} />
        </div>
      </div>

      <form className="pt-6 flex justify-center" onSubmit={handleSubmit}>
        <div className="container bg-gray-100" style={{ maxWidth: "470px" }}>
          <div className="border border-gray-700 p-5 rounded-lg">
            <div className="mb-2">
              <label className="text-gray-700 font-semibold">Email</label>
              <div className="bg-gray-200 p-2">
                <input
                  type="email"
                  placeholder="กรุณาระบุอีเมล"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full h-full outline-none bg-transparent"
                />
              </div>
            </div>

            <div className="mb-4">
              <label className="text-gray-700 font-semibold">Password</label>
              <div className="bg-gray-200 p-2 flex">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="กรุณาระบุรหัสผ่าน"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="w-full h-full outline-none bg-transparent"
                />
                <div className="cursor-pointer text-xl" onClick={() => setShowPassword(!showPassword)}>
                  <span>
                    {showPassword ? <FaEye /> : <FaEyeSlash />}
                  </span>
                </div>
              </div>
              <Link to="/forgot-password" className="block w-fit ml-auto hover:underline hover:text-red-500">
                Forgot Password
              </Link>
            </div>

            <div>
              <button className="bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700 max-w-[150px] mx-auto">
                Login
              </button>
              <p className="my-4">
                <Link to="/sign-up" className="text-blue-700 px-1 hover:text-blue-900">
                  Sign Up
                </Link>
              </p>
            </div>
          </div>
        </div>
      </form>
    </section>
  );
};

export default Login;
