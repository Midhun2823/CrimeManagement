import React, { useContext, useState } from "react";
import { toast } from "react-toastify";

import { useNavigate } from "react-router-dom";
import axios from "axios";
import { DataContext } from "../../Context/DataContext";

const Login = () => {
  const { url, setToken } = useContext(DataContext);
  const [state, setState] = useState("Login");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
  });

  const changeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setFormData((formData) => ({ ...formData, [name]: value }));
  };
  const navigate = useNavigate();
  const login = async (event) => {
    event.preventDefault();

    //now we create the logic to call the apis
    // to call the api we need axios support in frontend
    // create instance or the url
    let newUrl = url;
    if (state === "Login") {
      newUrl += "/api/user/login";
    } else {
      newUrl += "/api/user/register";
    }
    console.log(newUrl);

    // call the api
    // this url works in any situation like login or register
    const response = await axios.post(newUrl, formData);
    console.log(response.data.success + "   Responce");
    if (response.data.success) {
      // if it comes to here it means we logged in or registered in
      // we will get one token
      setToken(response.data.token);
      // save this token in local storage

      toast.success("Logged In Successfully");
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("user", response.data.user);
      navigate("/home");
      window.location.reload();
    } else {
      toast.error(response.data.message);
    }
  };

  return (
    <div className="container">
      <form
        onSubmit={login}
        className="login-popup-container border border-dark border-4"
      >
        <div className="row">
          <div className="col-md-3"></div>
          <div className="col-md-6 text-center bg-info my-4 py-4 bg-opacity-25">
            <h1 className="m-3">{state}</h1>
            <br></br>
            <div className="container px-5">
              {state === "Sign Up" ? (
                <>
                  <div className="input-group mb-3">
                    <input
                      name="name"
                      value={formData.name}
                      onChange={changeHandler}
                      type="text"
                      className="form-control"
                      placeholder="Name"
                      aria-label="Name"
                      aria-describedby="basic-addon1"
                    />
                  </div>
                  <div className="input-group mb-3">
                    <input
                      name="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={changeHandler}
                      type="tel"
                      className="form-control"
                      placeholder="Phone Number"
                      aria-label="Phone Number"
                      aria-describedby="basic-addon2"
                    />
                  </div>
                </>
              ) : null}

              <div className="input-group mb-3">
                <input
                  name="email"
                  value={formData.email}
                  onChange={changeHandler}
                  type="text"
                  className="form-control"
                  placeholder="Email"
                  aria-label="email"
                  aria-describedby="basic-addon4"
                />
              </div>
              <div className="input-group mb-3">
                <input
                  name="password"
                  value={formData.password}
                  onChange={changeHandler}
                  type="password"
                  className="form-control"
                  placeholder="Password"
                  aria-label="Password"
                  aria-describedby="basic-addon5"
                />
              </div>
              {state === "Sign Up" ? (
                <div className="input-group mb-3">
                  <input
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={changeHandler}
                    type="password"
                    className="form-control"
                    placeholder="Confirm Password"
                    aria-label="Confirm Password"
                    aria-describedby="basic-addon6"
                  />
                </div>
              ) : null}
            </div>
            {state === "Sign Up" ? (
              <div className="m-4">
                <span>Already have an account? </span>
                <span
                  onClick={() => {
                    setState("Login");
                  }}
                  className="fw-bold text-danger"
                >
                  Login Here
                </span>
              </div>
            ) : (
              <div className="m-4">
                <span>Create an account? </span>
                <span
                  onClick={() => {
                    setState("Sign Up");
                  }}
                  className="fw-bold text-danger"
                >
                  Click Here
                </span>
              </div>
            )}

            <div className="d-flex ms-5 ">
              <input type="checkbox" className="p-5" required />
              <span className="m-2">Agree to Terms and Conditions</span>
            </div>
            <br></br>
            <button
              type="submit"
              className="btn btn-outline-danger fw-bold fs-6"
            >
              {state === "Sign Up" ? "Create An Account" : "Login"}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
