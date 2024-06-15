import React from "react";
import Carosel_img1 from "../Assests/Carosel_img1.png";
import Carosel_img2 from "../Assests/Carosel_img2.png";
import Carosel_img3 from "../Assests/Carosel_img3.png";
import bg from "../Assests/bg.jpg";
import "./In.css";
import Login from "../Login/Login";
import { Link } from "react-router-dom";
export default function In() {
  return (
    <div className="container pt-2">
      {/*<div className="centered">
        <img src={bg} alt="Background" height={540} />
      </div>*/}
      <div className="row">
        <div className="col-md-6 p-5 bg-dark text-white border border-danger border-4">
          <img src={bg} alt="Background" width="100%" />
        </div>

        <div className="col-md-6 p-4 pt-5 bg-danger  bg-opacity-51 border border-dark border-4">
          <h5 style={{ textAlign: "justify" }}>
            <i>
              Empowerment through technology, our crime management app ensures
              swift aid to victims and stores crucial data securely. With
              restricted access for case entry and universal access for
              information retrieval, it promotes community safety. Its emergency
              call feature triggers location sharing and activates nearby
              citizen assistance, ensuring no one is left helpless. Victims
              remain connected until rescue, fostering a safer environment
              through citizen and police collaboration.
            </i>
          </h5>

          <Link to="/Login">
            <center>
              <button className="btn btn-light fw-bold px-5 py-2 mt-4 border border-dark border-4 fs-4">
                LoginSignup
              </button>
            </center>
          </Link>
        </div>
      </div>

      {/*<div className="container  mt-4 ml-10">
        <div id="carouselExampleDark" className="carousel carousel-dark slide">
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to="0"
              class="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="10000">
              <img src={Carosel_img1} width="650" height="450" alt="..." />
              <div className="carousel-caption d-none d-md-block">
                <h5>Crime Prevention</h5>
              </div>
            </div>
            <div className="carousel-item" data-bs-interval="2000">
              <img src={Carosel_img2} width="650" height="450" alt="..." />
              <div className="carousel-caption d-none d-md-block">
                <h5>Cases</h5>
              </div>
            </div>
            <div className="carousel-item">
              <img src={Carosel_img3} width="650" height="450" alt="..." />
              <div className="carousel-caption d-none d-md-block">
                
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>*/}
    </div>
  );
}
