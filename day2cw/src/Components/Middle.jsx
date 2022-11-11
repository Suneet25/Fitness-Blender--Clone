import React from "react";

export const Middle = () => {
  return (
    <div>
      <div
        style={{
          width: "100%",
          height: "auto",

          display: "grid",
          gridTemplateColumns: "repeat(2,1fr)",
        }}
      >
        <div
          style={{
            backgroundColor: "#12debb",
            color: "white",
          }}
        >
          <h1 style={{ width: "50%", margin: "auto", marginTop: "300px" }}>
            Feel Great.Body and Mind.
          </h1>
          <p style={{ width: "50%", margin: "auto" }}>
            Choose from hundreds of workouts, healthy recipes, relaxing
            meditations, and expert articles, for a whole body and mind approach
            to feeling great.
          </p>

          <button
            style={{
              color: "white",

              padding: "15px 30px",
              marginTop: "30px",
              borderRadius: "5px",
            }}
          >
            <b>JOIN NOW</b>
          </button>
        </div>
        <div style={{ backgroundColor: "#12debb" }}>
          <img
            src="https://cloudfront.fitnessblender.com/assets/img/homepage/team-720.webp"
            alt="sss"
          />
        </div>
      </div>
      <div
        style={{
          width: "100%",
          height: "550px",
          marginTop: "5px",
          background: "linear-gradient(130deg,#ece6f8 0%,#f9e7f6 100%)",
        }}
      >
        <h2 style={{ fontSize: "2rem", fontWeight: "400" }}>
          Introducing
          <br />
          <span
            style={{
              fontSize: "2rem",
              fontWeight: "400",
              MARGIN: "0 0 1rem 0",
              marginRight: "8px",
            }}
          >
            <b>FB</b>
          </span>
          <span
            style={{
              color: "#4296cb",
              fontSize: "2rem",
              fontWeight: "400",
              lineHeight: "1.2em",
              marginRight: "8px",
            }}
          >
            <b>Plus</b>
          </span>
          Passes
        </h2>
        <p
          style={{
            margin: "1rem auto",
            padding: "0",
            fontSize: "1rem",
            lineHeight: "1.6em",
            width: "30%",
            position: "relative",
            zIndex: "3",
            color: "#4e5262",
          }}
        >
          Passes give you full access to everything FB Plus has to offer,
          without a long-term subscription. Choose a pass that fits your budget
          and your schedule.
        </p>
        <button
          style={{
            color: "white",
            backgroundColor: "black",
            padding: "15px 30px",
            marginTop: "30px",
            borderRadius: "5px",
            marginTop: "0px",
          }}
        >
          <b>BUY A PASS</b>
        </button>
        <div>
          <img
            src="https://cloudfront.fitnessblender.com/assets/img/homepage/passes-720.webp"
            alt="hag"
          />
        </div>
      </div>
      <div
        style={{
          width: "100%",
          height: "auto",

          marginTop: "10px",
          display: "grid",
          gridTemplateColumns: "repeat(2,1fr)",
          gap: "10px",
        }}
      >
        <div>
          <div>
            <h1>Programs</h1>
            <p style={{ width: "50%", margin: "auto" }}>
              Professionally designed programs take the guesswork out of
              exercising.
            </p>
            <br />
            <a style={{ textDecoration: "none" }} href="">
              Browse All Programs
            </a>
          </div>
          <div>
            <img
              src="https://cloudfront.fitnessblender.com/assets/img/homepage/workouts-720.webp"
              alt=""
            />
          </div>
        </div>
        <div>
          <div>
            <h1>Workout Videos</h1>
            <p style={{ width: "50%", margin: "auto" }}>
              Exercise with certified personal trainers whether you’re at home
              or on the road.
            </p>
            <br />
            <a style={{ textDecoration: "none" }} href="">
              Find a Workout
            </a>
          </div>
          <div>
            <img
              src="https://cloudfront.fitnessblender.com/assets/img/homepage/programs-720.webp"
              alt=""
            />
          </div>
        </div>
        <div>
          <div
            style={{
              backgroundColor: "black",
              color: "white",
              paddingTop: "20px",
            }}
          >
            <h1>Wellness Articles</h1>
            <p style={{ width: "50%", margin: "auto" }}>
              Research-backed articles to help you care for your body and mind.
            </p>
            <br />
            <a style={{ textDecoration: "none" }} href="">
              Learn from Experts
            </a>
          </div>
          <div>
            <img
              src="https://cloudfront.fitnessblender.com/assets/img/homepage/articles-720.webp"
              alt=""
            />
          </div>
        </div>
        <div>
          <div style={{ paddingTop: "20px", backgroundColor: "lightgrey" }}>
            <h1>Healthy Recipes</h1>
            <p style={{ width: "50%", margin: "auto" }}>
              Fuel your day with recipes by Registered Dietitians and
              professional chefs.
            </p>
            <br />
            <a style={{ textDecoration: "none" }} href="">
              Find a Recipe
            </a>
          </div>
          <div style={{ backgroundColor: "lightgrey" }}>
            <img
              src="https://cloudfront.fitnessblender.com/assets/img/homepage/recipes-720.webp"
              alt=""
            />
          </div>
        </div>
      </div>

      {/* ----------------- */}

      <div
        style={{
          height: "auto",
          width: "100%",
          position: "relative",
          marginTop: "20px",
          textAlign: "center",
        }}
      >
        <img
          src="https://cloudfront.fitnessblender.com/assets/img/homepage/community-2160.webp"
          alt="sss"
        />
        <div style={{ position: "absolute", top: "10%", left: "27%" }}>
          <h1 style={{ fontFamily: "sans-serif" }}>Supportive Community</h1>
          <p style={{ width: "60%", margin: "auto" }}>
            Stay motivated and engaged with a little help from a supportive
            community of other members.
          </p>
          <a style={{ textDecoration: "none" }} href="">
            Become a Member
          </a>
        </div>
      </div>

      <hr />

      {/* ----------------- */}

      <div
        style={{
          width: "97%",
          height: "auto",

          margin: "auto",
        }}
      >
        <div style={{ textAlign: "left", marginLeft: "20px" }}>
          <h1>Not sure where to start?</h1>
          <p>
            Programs offer day-to-day guidance on an interactive calendar to
            keep you on track.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4,1fr)",
            boxShadow: "box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px",
            gap: "5px",
            height: "450px",
          }}
        >
          <div>
            <h4 style={{ textAlign: "left" }}>Perfect for Beginners</h4>
            <div>
              <img
                src="https://d18zdz9g6n5za7.cloudfront.net/plan/320/320-o_31_fb-low-impact-round-2-fat-loss-program-40-minutes-or-less.jpg"
                alt="sss"
              />
              <p style={{ color: "#4296cb" }}>4 Week Program - 34 Min/Day</p>
              <h3>
                FB Low Impact Round 2 - Build Muscle & Burn Fat - 40 Minutes or
                Less
              </h3>

              <p style={{ textAlign: "left", marginTop: "35px" }}>
                <b>$14.99</b>
              </p>
            </div>
          </div>
          <div>
            <h4 style={{ textAlign: "left" }}>Perfect for Beginners</h4>
            <div>
              <img
                src="https://d18zdz9g6n5za7.cloudfront.net/plan/320/320-o_29_4-week-fb-blend-burn-fat-build-muscle-tone-35-or-55-minutes-a-day.jpg"
                alt="sss"
              />
              <p style={{ color: "#4296cb" }}>4 Week Program - 34 Min/Day</p>
              <h3>
                FB Low Impact Round 2 - Build Muscle & Burn Fat - 40 Minutes or
                Less
              </h3>

              <p style={{ textAlign: "left", marginTop: "35px" }}>
                <b>$14.99</b>
              </p>
            </div>
          </div>
          <div>
            <h4 style={{ textAlign: "left" }}>Perfect for Beginners</h4>
            <div>
              <img
                src="https://d18zdz9g6n5za7.cloudfront.net/plan/320/320-o_28_fb-30-4-week-fat-loss-program-for-busy-people-round-4.jpg"
                alt="sss"
              />
              <p style={{ color: "#4296cb" }}> 4 Week Program- 30 Min/Day </p>
              <h3>FB 30 - Fat Loss Program For Busy People (Round 4)</h3>

              <p style={{ textAlign: "left", marginTop: "35px" }}>
                <b>$14.99</b>
              </p>
            </div>
          </div>
          <div>
            <h4 style={{ textAlign: "left" }}>Perfect for Beginners</h4>
            <div>
              <img
                src="https://d18zdz9g6n5za7.cloudfront.net/plan/320/320-o_7_fb-bodyweight-bodyweight-only-fat-loss-program.jpg"
                alt="sss"
              />
              <p style={{ color: "#4296cb" }}>4 Week Program - 34 Min/Day</p>
              <h3
                style={{
                  fontSize: "1.6rem",
                  lineHeight: "1.2em",
                  color: "#2c2e3a",
                }}
              >
                FB Low Impact Round 2 - Build Muscle & Burn Fat - 40 Minutes or
                Less
              </h3>

              <p style={{ textAlign: "left", marginTop: "35px" }}>
                <b>$14.99</b>
              </p>
            </div>
          </div>
        </div>
      </div>
      <p
        style={{
          textAlign: "left",
          marginLeft: "20px",
          marginTop: "20px",
          textDecoration: "none",
          color: "#4296cb",
        }}
      >
        View All Programs
      </p>
    </div>
  );
};
