import React, { useContext } from "react";
import Carosel_img1 from "../Assests/Carosel_img1.png";
import Carosel_img2 from "../Assests/Carosel_img2.png";
import Carosel_img3 from "../Assests/Carosel_img3.png";
import cases from "../Assests/cases.jpg";
import safety from "../Assests/safety.jpg";
import alert from "../Assests/alert.jpg";
import "./Home.css";
import { DataContext } from "../../Context/DataContext";

import { Tilt } from "react-tilt";

const Home = () => {
  const { token } = useContext(DataContext);

  const defaultOptions = {
    reverse: false, // reverse the tilt direction
    max: 35, // max tilt rotation (degrees)
    perspective: 1000, // Transform perspective, the lower the more extreme the tilt gets.
    scale: 1.1, // 2 = 200%, 1.5 = 150%, etc..
    speed: 1000, // Speed of the enter/exit transition
    transition: true, // Set a transition on enter/exit.
    axis: null, // What axis should be disabled. Can be X or Y.
    reset: true, // If the tilt effect has to be reset on exit.
    easing: "cubic-bezier(.03,.98,.52,.99)", // Easing on enter/exit.
  };
  return (
    <div className="container mt-4">
      <div className="row justify-content-center">
        <div className="col-10">
          <div
            id="carouselExampleDark"
            className="carousel carousel-dark slide"
          >
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
                <img src={Carosel_img1} width="850" height="450" alt="..." />
                <div className="carousel-caption d-none d-md-block">
                  <h5>Crime Alert System</h5>
                </div>
              </div>
              <div className="carousel-item" data-bs-interval="2000">
                <img src={Carosel_img2} width="850" height="450" alt="..." />
                <div className="carousel-caption d-none d-md-block">
                  <h5>Cases</h5>
                </div>
              </div>
              <div className="carousel-item">
                <img src={Carosel_img3} width="850" height="450" alt="..." />
                <div className="carousel-caption d-none d-md-block"></div>
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
        </div>
        <div className="container mt-4">
          <div className="row">
            <div className="col-md-4  ">
              <Tilt
                options={defaultOptions}
                style={{ height: "100%", width: "100%" }}
              >
                <div className="m-3 p-2 border border-dark border-2 rounded-5">
                  <p className="text-danger fst-italic fs-2 fw-bold text-center text-decoration-underline">
                    Alert Messages
                  </p>
                  <p className="lead text-center">
                    Important alerts and notifications can be viewed.
                  </p>
                  <img
                  className="rounded-5 border border-5 border" src={alert} width="100%" height="200" alt="Alert Image" />
                </div>
              </Tilt>
            </div>
            <div className="col-md-4 ">
              <Tilt
                options={defaultOptions}
                style={{ height: "100%", width: "100%" }}
              >
                {" "}
                <div className="m-3 p-2 border border-dark border-2 rounded-5">
                  <p className="text-danger fst-italic fs-2 fw-bold text-center text-decoration-underline">
                    Case Studies
                  </p>
                  <p className="lead text-center">
                    Explore real-life case studies and learn from them.
                  </p>
                  <img
                  className="rounded-5 border border-5 border"
                    src={cases}
                    width="100%"
                    height="200"
                    alt="Case Study Image"
                  />
                </div>
              </Tilt>
            </div>
            <div className="col-md-4  ">
              <Tilt
                options={defaultOptions}
                style={{ height: "100%", width: "100%" }}
              >
                <div className="m-3 p-2 border border-dark border-2 rounded-5">
                  <p className="text-danger fst-italic fs-2 fw-bold text-center text-decoration-underline">
                    Safety Rules
                  </p>
                  <p className="lead text-center">
                    Learn the safety rules by following the guidelines.
                  </p>
                  <img
                  className="rounded-5 border border-5 border"
                    src={safety}
                    width="100%"
                    height="200"
                    alt="Case Study Image"
                  />
                </div>
              </Tilt>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
