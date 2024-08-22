import React, { useState } from "react";
import { FaEyeSlash, FaEye } from "react-icons/fa";
import SummaryApi from "../common";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    profilePic: "",
  });
  const [message, setMessage] = useState(""); // State สำหรับแสดงข้อความ

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setData((prev) => ({
          ...prev,
          profilePic: reader.result, // เก็บ base64 URL ของรูปภาพ
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (data.password !== data.confirmPassword) {
      setMessage("รหัสผ่านไม่ตรงกัน!");
      return;
    }

    try {
      const response = await fetch(SummaryApi.SignUp.url, {
        method: SummaryApi.SignUp.method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const dataApi = await response.json();

      if (dataApi.success) {
        setMessage("สมัครสมาชิกสำเร็จ!"); 
        setTimeout(() => {
          window.location.href = "/login"; // ไปที่หน้า Login ใน 2 วินาที
        }, 2000);
      } else if (dataApi.error) {
        setMessage(dataApi.message); 
      }
    } catch (error) {
      setMessage("เกิดข้อผิดพลาด! กรุณาลองใหม่อีกครั้ง."); 
    }
  };

  return (
    <section id="SignUp">
      <div className="mx-auto flex flex-col items-center justify-center rounded-r-full relative">
        <label htmlFor="profilePicUpload" className="cursor-pointer">
          <img
            src={data.profilePic || "logo512.png"}
            alt="Profile"
            width={100}
            height={100}
            className="rounded-full"
          />
          <span className="absolute bottom-0 left-0 right-0 text-center font-semibold text-gray-600 text-sm bg-white bg-opacity-75">
            Upload
          </span>
        </label>
        <input
          type="file"
          id="profilePicUpload"
          accept="image/*"
          onChange={handleFileChange}
          style={{ display: "none" }}
        />
      </div>

      <form className="pt-6 flex justify-center" onSubmit={handleSubmit}>
        <div className="container bg-gray-100" style={{ maxWidth: "470px" }}>
          <div className="border border-gray-700 p-5 rounded-lg">
            <div className="mb-2">
              <label className="text-gray-700 font-semibold">Name</label>
              <div className="bg-gray-200 p-2">
                <input
                  type="text"
                  placeholder="กรุณาระบุชื่อผู้ใช้"
                  name="name"
                  value={data.name}
                  onChange={handleOnChange}
                  className="w-full h-full outline-none bg-transparent"
                />
              </div>
            </div>

            <div className="mb-2">
              <label className="text-gray-700 font-semibold">Email</label>
              <div className="bg-gray-200 p-2">
                <input
                  type="email"
                  placeholder="กรุณาระบุอีเมล"
                  name="email"
                  value={data.email}
                  onChange={handleOnChange}
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
                  value={data.password}
                  onChange={handleOnChange}
                  className="w-full h-full outline-none bg-transparent"
                />
                <div
                  className="cursor-pointer text-xl"
                  onClick={() => setShowPassword((prev) => !prev)}
                >
                  <span>{showPassword ? <FaEye /> : <FaEyeSlash />}</span>
                </div>
              </div>
            </div>

            <div className="mb-4">
              <label className="text-gray-700 font-semibold">
                Confirm Password
              </label>
              <div className="bg-gray-200 p-2 flex">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="กรุณายืนยันรหัสผ่าน"
                  name="confirmPassword"
                  value={data.confirmPassword}
                  onChange={handleOnChange}
                  className="w-full h-full outline-none bg-transparent"
                />
                <div
                  className="cursor-pointer text-xl"
                  onClick={() => setShowConfirmPassword((prev) => !prev)}
                >
                  <span>{showConfirmPassword ? <FaEye /> : <FaEyeSlash />}</span>
                </div>
              </div>
            </div>

            <div>
              <button className="bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700 max-w-[150px] mx-auto">
                Sign Up
              </button>
            </div>

            {message && (
              <div className="mt-4 text-center text-red-600">{message}</div>
            )}
          </div>
        </div>
      </form>
    </section>
  );
};

export default SignUp;
