import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaCartPlus,
  FaSearch,
  FaShoppingBag,
} from "react-icons/fa";
import { AllRoutes } from "./AllRoutes";
import { AdminPage } from "./AdminPage";
import { Footer } from "./Footer";

export const NavBar = () => {
  return (
    <div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "200px 1000px 250px",

          height: "100px",
          width: "auto",
          justifyContent: "space-evenly",
        }}
      >
        <div
          className="logo"
          style={{
            height: "45px",
            width: "156px",

            margin: "auto",
            marginLeft: "150px",
          }}
        >
          <img
            src="	https://cloudfront.fitnessblender.com/assets/img/logos/fb-logo.svg"
            alt="asa"
          />
        </div>
        <div
          className="categories"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(9,1fr)",
            alignItems: "center",
            marginLeft: "150px",
            gap: "20px",
            justifyContent: "space-around",
          }}
        >
          <div>
            <h5>
              WORKOUTS<b></b>
            </h5>
          </div>
          <div>
            <h5>HEALTHY LIVING</h5>
          </div>
          <div>
            <Link style={{ textDecoration: "none" }} to="/community">
              <h5>Community</h5>
            </Link>
          </div>
          <div>
            <h5>ABOUT</h5>
          </div>
          <div>
            <h5>STORE</h5>
          </div>
          <div>
            <h5>MEMBERSHIP</h5>
          </div>

          <div>
            <Link style={{ textDecoration: "none" }} to="/login">
              <h5>Sign in</h5>
            </Link>
          </div>

          <div>
            <Link style={{ textDecoration: "none" }} to="/login">
              <h5>Admin</h5>
            </Link>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
        >
          <div>
            <FaSearch />
          </div>
          <div>
            <FaShoppingBag />
          </div>
        </div>
      </div>
    
    </div>
    
  );
};
