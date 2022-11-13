import React from "react";
import {
  FaFacebookF,
  FaGoogle,
  FaYoutube,
  FaPinterest,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
// import "../styling/"
export const Footer = () => {
  return (
    <div>
      <div
        className="footer"
        style={{
          height: "95vh",
          width: "90vw",
          background: "#212432",
          paddingTop: "10rem",
          paddingBottom: "6rem",
          paddingLeft: "6rem",
          paddingRight: "8rem",
        }}
      >
        <div
          className="footer-div1"
          style={{
            display: " flex",
            justifyContent: "space-between",
            marginBottom: "50px",
            flexWrap: "wrap",
          }}
        >
          <h2
            className="brand -dark"
            style={{
              fontSize: "1em",
              //   marginBlockStart: "0.83em",
              //   marginBlockEnd: "0.83em",
              //   marginInlineStart: "0px",
              //   marginInlineEnd: "0px",
            }}
          >
            <a href="/">Fitness Blender</a>
            <p style={{ width: "200px", fontSize: "1.4rem", color: "#858282" }}>
              WORKOUT COMPLETE<sup>™</sup>
            </p>
          </h2>
          <div
            className="footer-div1-list "
            style={{
              marginBottom: "2rem",
              lineHeight: "1.2em",
              marginTop: "-50px",
              display: "flex",
              marginRight: "5%",
              flexWrap: "wrap",
            }}
          >
            <ul style={{ margin: "0 20px", listStyleType: "none" }}>
              <li>
                <a
                  className="footer-div1-conta1"
                  href="#"
                  style={{
                    fontSize: "0.8rem",

                    letterSpacing: "0.05em",

                    color: "#fffefe",
                    fontWeight: "600",
                    textDecoration: "none",
                  }}
                >
                  WORKOUT & PROGRAMS
                </a>
              </li>
              <li>
                <a
                  className="footer-div1-conta"
                  href="workoutVideos.html"
                  style={{
                    fontSize: "0.8rem",
                    color: "#7b7f92",
                    color: "#a7aabb",
                    letterSpacing: "0.05em",
                    textDecoration: "none",
                  }}
                >
                  WORKOUT VIDEO
                </a>
              </li>
              <li>
                <a
                  className="footer-div1-conta"
                  href="#"
                  style={{
                    fontSize: "0.8rem",
                    color: "#7b7f92",
                    color: "#a7aabb",
                    letterSpacing: "0.05em",
                    textDecoration: "none",
                  }}
                >
                  CUSTOM WORKOUT
                </a>
              </li>
              <li>
                <a
                  className="footer-div1-conta"
                  href="workoutPrograms.html"
                  style={{
                    fontSize: "0.8rem",
                    color: "#7b7f92",
                    color: "#a7aabb",
                    letterSpacing: "0.05em",
                    textDecoration: "none",
                  }}
                >
                  WORKOUT PROGRAMS
                </a>
              </li>
              <li>
                <a
                  className="footer-div1-conta"
                  href="mealPlans.html"
                  style={{
                    fontSize: "0.8rem",
                    color: "#7b7f92",
                    color: "#a7aabb",
                    letterSpacing: "0.05em",
                    textDecoration: "none",
                  }}
                >
                  MEAL PLANS
                </a>
              </li>
            </ul>

            <ul style={{ margin: "0 20px", listStyleType: "none" }}>
              <li>
                <a
                  className="footer-div1-conta1"
                  href="#"
                  style={{
                    fontSize: "0.8rem",
                    color: "#7b7f92",
                    color: "#a7aabb",
                    letterSpacing: "0.05em",
                    color: "#fffefe",
                    fontWeight: "600",
                    textDecoration: "none",
                  }}
                >
                  HEALTHY LIVING
                </a>
              </li>
              <li>
                <a
                  className="footer-div1-conta"
                  href="fitnessPage.html"
                  style={{
                    fontSize: "0.8rem",
                    color: "#7b7f92",
                    color: "#a7aabb",
                    letterSpacing: "0.05em",
                    textDecoration: "none",
                  }}
                >
                  FITNESS
                </a>
              </li>
              <li>
                <a
                  className="footer-div1-conta"
                  href="healthPage.html"
                  style={{
                    fontSize: "0.8rem",
                    color: "#7b7f92",
                    color: "#a7aabb",
                    letterSpacing: "0.05em",
                    textDecoration: "none",
                  }}
                >
                  HEALTH
                </a>
              </li>
              <li>
                <a
                  className="footer-div1-conta"
                  href="nutritionPage.html"
                  style={{
                    fontSize: "0.8rem",
                    color: "#7b7f92",
                    color: "#a7aabb",
                    letterSpacing: "0.05em",
                    textDecoration: "none",
                  }}
                >
                  NUTRITION
                </a>
              </li>
              <li>
                <a
                  className="footer-div1-conta"
                  href="healthyRecipes.html"
                  style={{
                    fontSize: "0.8rem",
                    color: "#7b7f92",
                    color: "#a7aabb",
                    letterSpacing: "0.05em",
                    textDecoration: "none",
                  }}
                >
                  HEALTHY RECIPY
                </a>
              </li>
              <li>
                <a
                  className="footer-div1-conta"
                  href="#"
                  style={{
                    fontSize: "0.8rem",
                    color: "#7b7f92",
                    color: "#a7aabb",
                    letterSpacing: "0.05em",
                    textDecoration: "none",
                  }}
                >
                  EXPERT
                </a>
              </li>
            </ul>

            <ul style={{ margin: "0px 20px", listStyleType: "none" }}>
              <li>
                <a
                  className="footer-div1-conta1"
                  href="#"
                  style={{
                    fontSize: "0.8rem",
                    color: "#fffefe",
                    fontWeight: "600",
                    textDecoration: "none",
                  }}
                >
                  FB PLUS
                </a>
              </li>
              <li>
                <a
                  className="footer-div1-conta1"
                  href="#"
                  style={{
                    fontSize: "0.8rem",
                    color: "#fffefe",
                    fontWeight: "600",
                    textDecoration: "none",
                  }}
                >
                  COMMUNITY
                </a>
              </li>
              <li>
                <a
                  className="footer-div1-conta1"
                  href="#"
                  style={{
                    fontSize: "0.8rem",
                    color: "#fffefe",
                    fontWeight: "600",
                    textDecoration: "none",
                  }}
                >
                  BLOG
                </a>
              </li>
              <li>
                <a
                  className="footer-div1-conta1"
                  href="#"
                  style={{
                    fontSize: "0.8rem",
                    color: "#fffefe",
                    fontWeight: "600",
                    textDecoration: "none",
                  }}
                >
                  ABOUT US
                </a>
              </li>
              <li>
                <a
                  className="footer-div1-conta1"
                  href="#"
                  style={{
                    fontSize: "0.8rem",
                    color: "#fffefe",
                    fontWeight: "600",
                    textDecoration: "none",
                  }}
                >
                  CONTACT US
                </a>
              </li>
              <li>
                <a
                  className="footer-div1-conta1"
                  href="#"
                  style={{
                    fontSize: "0.8rem",
                    color: "#fffefe",
                    fontWeight: "600",
                    textDecoration: "none",
                  }}
                >
                  FAQ
                </a>
              </li>
              <li>
                <a
                  className="footer-div1-conta1"
                  href="#"
                  style={{
                    fontSize: "0.8rem",
                    color: "#fffefe",
                    fontWeight: "600",
                    textDecoration: "none",
                  }}
                >
                  STORE
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div
          className="footer-div1 footer-div1-copy  footer-div1-border"
          style={{ paddingTop: "50px", borderTop: " 1px solid #514166" }}
        >
          <p style={{ color: "white" }}>
            Copyright © 2020 Fitness Blender. All rights reserved.{" "}
            <a href="/page/terms-of-use-agreement">Terms and Conditions</a>{" "}
            <a href="/page/privacy-policy">Privacy Policy</a>
          </p>

          <ul
            className="app"
            style={{
              width: "300px",
              display: "flex",
              margin: "0 20px",
              listStyleType: "none",
            }}
          >
            <li>
              <a
                className="app-logo"
                href="https://www.youtube.com/user/FitnessBlender"
                target="_blank"
                style={{
                  color: "white",
                  fontSize: "25px",
                  marginRight: "20px",
                }}
              >
                <span className="iconfont-youtube-play">
                  <FaYoutube />
                </span>
              </a>
            </li>
            <li>
              <a
                className="app-logo"
                href="https://pinterest.com/FitnessBlender/"
                target="_blank"
                style={{
                  color: "white",
                  fontSize: "25px",
                  marginRight: "20px",
                }}
              >
                <span className="iconfont-pinterest">
                  <FaPinterest />
                </span>
              </a>
            </li>
            <li>
              <a
                className="app-logo"
                href="https://www.facebook.com/pages/FitnessBlendercom/151085874942542"
                target="_blank"
                style={{
                  color: "white",
                  fontSize: "25px",
                  marginRight: "20px",
                }}
              >
                <span className="iconfont-facebook">
                  <FaFacebookF />
                </span>
              </a>
            </li>
            <li>
              <a
                className="app-logo"
                href="https://instagram.com/fitnessblender/#"
                target="_blank"
                style={{
                  color: "white",
                  fontSize: "25px",
                  marginRight: "20px",
                }}
              >
                <span className="iconfont-instagram">
                  <FaInstagram />
                </span>
              </a>
            </li>
            <li>
              <a
                className="app-logo"
                href="https://twitter.com/FitnessBlender"
                target="_blank"
                style={{
                  color: "white",
                  fontSize: "25px",
                  marginRight: "20px",
                }}
              >
                <span className="iconfont-twitter">
                  <FaTwitter />
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
