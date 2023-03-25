import React, { useState } from "react";
import registerCss from "./register.module.css";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./../../config/Firebase";
import Joi from "joi";
import { useNavigate } from "react-router-dom";
import Navbar from "../../componants/navbar/Navbar";

const Register = () => {
  const [userRegister, setUserRegister] = useState({
    userName: "",
    email: "",
    password: "",
    repassword: "",
  });
  let [validateError, setValidateError] = useState([]);
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [registerError, setRegisterError] = useState("");
  function addUser(e) {
    let myuser = { ...userRegister };
    myuser[e.target.name] = e.target.value;
    setUserRegister(myuser);
  }

  function validateData() {
    let schema = Joi.object({
      userName: Joi.string().required().min(3).max(10),
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
      repassword: Joi.any().required().valid(Joi.ref("password")).messages({
        "any.only": "Password must match",
        "string.empty": "password is not allowed to be empty",
      }),
    });
    return schema.validate(userRegister, { abortEarly: false });
  }

  async function registeration(e) {
    e.preventDefault();
    let valid = validateData();
    if (valid.error == null) {
      setIsLoading(true);
      createUserWithEmailAndPassword(
        auth,
        userRegister.email,
        userRegister.password
      )
        .then((res) => res && navigate("/signin"))
        .catch((error) => {
          return setRegisterError(error.message.split(" ").splice(2, 1));
        });

      setIsLoading(false);
    } else {
      setValidateError(valid.error.details);
    }
  }

  return (
    <>
      <Navbar />
      <div className={registerCss.register}>
        <div className={registerCss.overlay}>
          <div className={registerCss.form_container}>
            <h2>create an account</h2>
            <form className="row" onSubmit={registeration}>
              <div className="col-md-6 col-sm-12 m-0 p-1">
                <input
                  onChange={addUser}
                  type="text"
                  name="userName"
                  id="userName"
                  placeholder="Enter Your Name"
                />
                {validateError?.map((e) => e?.context?.label === "userName") ? (
                  <div className={" text-danger " + registerCss.validate_error}>
                    {
                      validateError?.filter(
                        (e) => e?.context?.label === "userName"
                      )?.[0]?.message
                    }
                  </div>
                ) : (
                  <div className="d-none"></div>
                )}
              </div>
              <div className="col-md-6 col-sm-12 m-0 p-1">
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter Your Email"
                  onChange={addUser}
                />
                {validateError?.map((e) => e?.context?.label === "email") ? (
                  <div className={" text-danger " + registerCss.validate_error}>
                    {
                      validateError?.filter(
                        (e) => e?.context?.label === "email"
                      )?.[0]?.message
                    }
                  </div>
                ) : (
                  <div className="d-none"></div>
                )}
              </div>
              <div className="col-md-6 col-sm-12 m-0 p-1">
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Enter Your Password"
                  onChange={addUser}
                />
                {validateError?.map((e) => e?.context?.label === "password") ? (
                  <div className={" text-danger " + registerCss.validate_error}>
                    {
                      validateError?.filter(
                        (e) => e?.context?.label === "password"
                      )?.[0]?.message
                    }
                  </div>
                ) : (
                  ""
                )}
              </div>
              <div className="col-md-6 col-sm-12 m-0 p-1">
                <input
                  type="password"
                  name="repassword"
                  id="repassword"
                  placeholder="confirm password"
                  onChange={addUser}
                />
                {validateError.map(
                  (e) => e?.context?.label === "repassword"
                ) ? (
                  <div className={" text-danger " + registerCss.validate_error}>
                    {
                      validateError?.filter(
                        (e) => e?.context?.label === "repassword"
                      )?.[0]?.message
                    }
                  </div>
                ) : (
                  ""
                )}
              </div>
              <button onClick={registeration} type="button">
                create
              </button>
              {registerError ? (
                <p className="text-danger text-center text-capitalize fs-5 fw-bold w-100 my-0">
                  email already exists {registerError}
                </p>
              ) : (
                ""
              )}
              {/* {isLoading ? (
                <button type="button">
                  <i className="fa fa-spinner"></i>
                </button>
              ) : (
                <button onClick={logOut} type="button">
                  {" "}
                  logout
                </button>
              )} */}
            </form>

            <p>
              data in accordance with the <span> PRIVACY POLICY </span>
              By creating an account, I consent to the processing of my personal
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
