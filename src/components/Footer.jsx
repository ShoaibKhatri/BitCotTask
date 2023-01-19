import React from "react";
import Facebook from "../assets/images/social/facebook-white.svg";
import Twitter from "../assets/images/social/twitter-white.svg";
import Instagram from "../assets/images/social/instagram-white.svg";
import AppStore from "../assets/images/store/app-store.svg";
import PlayStore from "../assets/images/store/play-store.svg";
import WindowsStore from "../assets/images/store/windows-store.svg";

const Footer = () => {
  return (
    <div className=" bg-dark position-absolute  w-100 footer-main">
      <div className="d-flex flex-wrap justify-content-sm-center justify-content-lg-start pb-2">
        <div className=" text-light">
          <span className="me-2 opacity-75 home">Home</span>
          <span className="mx-2">|</span>
        </div>
        <div className=" text-light">
          <span className="mx-2 opacity-75">Terms and Conditions</span>
          <span className="mx-2">|</span>
        </div>
        <div className="text-light">
          <span className="mx-2 opacity-75">Privacy Policy</span>
          <span className="mx-2">|</span>
        </div>
        <div className=" text-light">
          <span className="mx-2 opacity-75">Collection Statement</span>
          <span className="mx-2 opacity-75">|</span>
        </div>
        <div className=" text-light">
          <span className="mx-2 opacity-75">Help</span>
          <span className="mx-2">|</span>
        </div>
        <div className="text-light">
          <span className="mx-2 opacity-75"> Manage Account</span>
        </div>
      </div>

      <div className="pb-4 mb-4 ">
        <span className="text-light opacity-50 ">
          Copyright &#169; 2016 DEMO Streaming All Rights Reserved
        </span>
      </div>

      <div className=" w-100 d-md-flex justify-content-sm-center justify-content-lg-between align-items-center">
        <div className="d-flex justify-content-sm-center social-logo-main">
          <div className="mx-3">
            <img src={Facebook} width="30px" height="30px" alt="" />
          </div>
          <div className="mx-3">
            <img src={Twitter} width="30px" height="30px" alt="" />
          </div>
          <div className="mx-3">
            <img src={Instagram} width="30px" height="30px" alt="" />
          </div>
        </div>

        <div className=" d-flex flex-sm-row justify-content-sm-center store-logo-main">
          <div className="mx-3 m-3">
            <img
              src={AppStore}
              className="social-logo-img"
              width={"100%"}
              height="40px"
              alt=""
            />
          </div>
          <div className="mx-3 m-3">
            <img
              src={PlayStore}
              className="social-logo-img"
              width={"100%"}
              height="40px"
              alt=""
            />
          </div>
          <div className="mx-3 m-3">
            <img
              src={WindowsStore}
              className="social-logo-img"
              width={"100%"}
              height="40px"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
