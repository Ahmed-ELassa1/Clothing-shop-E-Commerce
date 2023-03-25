import React, { useState } from "react";
import signCss from "./signin.module.css";
import Register from "../register/Register";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { googleProvider, auth } from "../../config/Firebase";
import Joi from "joi";
import Navbar from "../../componants/navbar/Navbar";
const Signin = () => {
  // const [user, setUser] = useState(null);
  const [userLoggedin, setUserLoggedin] = useState({
    email: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [loginError, setLoginError] = useState("");
  let [validateError, setValidateError] = useState([]);

  const navigate = useNavigate();
  function checkUser(e) {
    let myuser = { ...userLoggedin };
    myuser[e.target.name] = e.target.value;
    setUserLoggedin(myuser);
  }

  function validateData() {
    let schema = Joi.object({
      email: Joi.string()
        .required()
        .email({ tlds: { allaw: ["com", "org", "net"] } }),
      password: Joi.string()
        .required()
        .pattern(new RegExp(/^[A-Z][a-z]{4,12}[0-9]+$/))
        .message({
          "string.pattern.base":
            "Password should have a minimum length of 4 characters, first letter must be capital and At least 1 numeric character ,{firstName}",
        }),
    });
    return schema.validate(userLoggedin, { abortEarly: false });
  }

  async function signin(e) {
    e.preventDefault();
    let valid = validateData();
    setIsLoading(true);
    if (valid.error == null) {
      setIsLoading(true);
      signInWithEmailAndPassword(
        auth,
        userLoggedin.email,
        userLoggedin.password
      )
        .then((res) => {
          navigate("/");
          localStorage.setItem("user",JSON.stringify(res._tokenResponse.localId
            ))
          return setUserLoggedin(res);
        })
        .catch((error) => {
          return setLoginError(
            error?.message?.split("/")?.[1]?.split(")")?.[0]
            );
          });
      setIsLoading(false);
    } else {
      setValidateError(valid.error.details);
    }
    console.log(loginError);
  }

  async function signinWithGoogle(e) {
    e.preventDefault();
    signInWithPopup(auth, googleProvider)
      .then((res) => {
        navigate("/");
        return setUserLoggedin(res);
      })
      .catch((error) => {
        return setLoginError(error.message);
      });
  }
  return (
    <>
    <Navbar/>
      <div className={signCss.sign}>
        <div className={signCss.overlay}>
          <div className={signCss.form_container}>
            <h2>sign in</h2>
            <form className="row" onSubmit={signin}>
              
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                className="col-12"
                onChange={checkUser}
              />
                  {validateError?.map((e) => e?.context?.label === "email") ? (
                  <div className={" text-danger " + signCss.validate_error}>
                    {
                      validateError?.filter(
                        (e) => e?.context?.label === "email"
                      )?.[0]?.message
                    }
                  </div>
                ) : (
                  <div className="d-none"></div>
                )}
              <input
                type="password"
                name="password"
                id="password"
                placeholder="password"
                className="col-12"
                onChange={checkUser}
              />
    {validateError?.map((e) => e?.context?.label === "password") ? (
                  <div className={" text-danger " + signCss.validate_error}>
                    {
                      validateError?.filter(
                        (e) => e?.context?.label === "password"
                      )?.[0]?.message
                    }
                  </div>
                ) : (
                  ""
                )}
              <button
                type="submit"
                className="col-12"
              >
                login
              </button>
              {loginError ? (
                <p className="text-danger text-center text-capitalize fs-5 fw-bold w-100 my-0">
                  {loginError}
                </p>
              ) : (
                ""
              )}
            </form>
            <button
              type="submit"
              onClick={signinWithGoogle}
              className="col-12"
            >
              signin with google
            </button>
            <Link className={signCss.create_account} to={"/register"}>
              creat a new account
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signin;
