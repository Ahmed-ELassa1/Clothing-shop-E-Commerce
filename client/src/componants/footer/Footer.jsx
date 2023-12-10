import React, { useState } from "react";
import footer from "./footer.module.css";
import payment from "../../img/payment.png";
import Swal from "sweetalert2/dist/sweetalert2.all.min";
const Footer = () => {
  const [emailInput, setEmailInput] = useState("");
  function sendEmail(e) {
    if (emailInput !== "") {
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Your email has been saved",
        showConfirmButton: true,
        timer: 1500,
      });
      setEmailInput("");
    } else {
      Swal.fire({
        position: "center",
        icon: "error",
        title: "Please Enter Your Email",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  }
  return (
    <>
      <div className={" " + footer.footer}>
        <div className={footer.upper}>
          <h2>newsletter</h2>
          <p>get timely updates from your favorite products.</p>
          <form className="row justify-content-center ">
            <input
              type="email"
              name="email"
              id="send-email"
              placeholder="Your Email"
              onChange={(e) => setEmailInput(e.target.value)}
              className=""
            />
            <button
              onClick={sendEmail}
              type="reset"
              className={footer.icon_container}
            >
              <i className="fa-solid fa-paper-plane"></i>
            </button>
          </form>
        </div>
        <div className={"row  " + footer.down}>
          <div className={"col-md-4 col-sm-12 mb-3 " + footer.right_part}>
            <h3>mancera...</h3>
            <p className="mb-2">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don’t look even
              slightly believable.
            </p>
            <div className={footer.icons}>
              <i
                className={"fa-brands fa-square-facebook " + footer.facebook}
              ></i>
              <i className={"fa-brands fa-instagram " + footer.instagram}></i>
              <i className={"fa-brands fa-twitter " + footer.twitter}></i>
              <i className={"fa-brands fa-pinterest-p " + footer.pinterest}></i>
            </div>
          </div>

          <div className={"col-md-4 col-sm-12 mb-3 " + footer.center_part}>
            <h4 className="">useful links</h4>
            <div className="row w-100">
              <p className="col-6">home</p>
              <p className="col-6">cart</p>
              <p className="col-6">man fashion</p>
              <p className="col-6">women fashion</p>
              <p className="col-6">accessories</p>
              <p className="col-6">my account</p>
              <p className="col-6">order tracking</p>
              <p className="col-6">Wishlist</p>
              <p className="col-6">my Wishlist</p>
              <p className="col-6">terms</p>
            </div>
          </div>

          <div className={"col-md-4 col-sm-12 mb-3 " + footer.left_part}>
            <h4 className="mb-4">contact</h4>
            <div className="row w-100 g-4">
              <i className="fa-solid fa-location-dot col-1"></i>
              <span className="col-11">
                622 Dixie Path , South Tobinchester 98336
              </span>
              <i className="fa-solid fa-phone col-1"></i>
              <span className="col-11">+1 234 56 78</span>
              <i className="fa-regular fa-envelope col-1"></i>
              <span className="col-11">contact@lama.dev</span>
            </div>
            <img src={payment} alt="" className="mt-3" />
          </div>
        </div>
      </div>
    </>
  );
};
export default Footer;
