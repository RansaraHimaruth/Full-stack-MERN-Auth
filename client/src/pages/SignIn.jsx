import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
// import axios from "axios";

export default function SignIn() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({});
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  //with fetch api

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const response = await fetch("/api/auth/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      setLoading(false);
      if (data.success === false) {
        setError(true);
        return;
      }
      setError(false);
      navigate("/");
    } catch (error) {
      setLoading(false);
      setError(true);
    }
  };

  //with axios
  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     setLoading(true);
  //     const response = await axios.post("/api/auth/signup", formData);
  //     console.log(response.data);
  //     setLoading(false);
  //     setError(false);
  //   } catch (error) {
  //     setLoading(false);
  //     setError(true);
  //     console.log(error.response.data);
  //   }
  // };

  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl text-center font-bold my-7">Sign In</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="email"
          name=""
          id="email"
          placeholder="Email"
          className="bg-slate-200 p-3 rounded-lg"
          onChange={handleChange}
        />
        <input
          type="password"
          name=""
          id="password"
          placeholder="Password"
          className="bg-slate-200 p-3 rounded-lg"
          onChange={handleChange}
        />
        <button
          disabled={loading}
          className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80"
        >
          {loading ? "Loading..." : "Sign In"}
        </button>
      </form>
      <div className="flex gap-2 mt-5">
        <p>Don&#39;t Have an Account? </p>
        <Link to="/sign-up">
          <span className="text-blue-500">Sign up</span>
        </Link>
      </div>
      <p className="text-red-700 mt-5">{error && "Something went wrong"}</p>
    </div>
  );
}
