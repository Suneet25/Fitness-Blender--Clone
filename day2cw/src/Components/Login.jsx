import React from 'react'

export const Login = () => {
  return (
    <div>
        import React from 'react'

export const Login = () => {
  return (
    <div>
        <div class="header">
        <h1 class="brand"><a href="#">Fitness Blender</a></h1>
        <div>
            <ul>
                <li>
                    <div class="header-menu">
                        <a href="#" class="menu">WORKOUT &amp; PROGRAMS &#9662</a>
                        <ul class="sub-menu" id="">
                          <li><a href="#" class="menu-content"><i class="icon -workout-videos" aria-hidden="true"></i> Workout Videos</a></li>
                          <li><a href="#" class="menu-content"><i class="icon -workout-programs" aria-hidden="true"></i></i>Workout Programs</a></li>
                          <li><a href="#" class="menu-content"><i class="icon -nutrition-programs" aria-hidden="true"></i>Meal Plans</a></li>
                          <li><a href="#" class="menu-content"><i class="icon -custom-workouts" aria-hidden="true"></i>Custom Workouts</a></li>
                          <li><a href="#" class="menu-content"><i class="icon -routines" aria-hidden="true"></i>Routines</a></li>
                        </ul>
                    </div>
                </li>

                <li>
                    <div class="header-menu">
                        <a href="#" class="menu">HEALTHY LIVING &#9662</a>
                        <ul class="sub-menu" id="">
                          <li><a href="#" className="menu-content"><i class="icon -fitness" aria-hidden="true"></i>FITNESS</a></li>
                          <li><a href="#" className="menu-content"><i class="icon -health" aria-hidden="true"></i>HEALTH</a></li>
                          <li><a href="#" className="menu-content"><i class="icon -nutrition" aria-hidden="true"></i>NUTRITION</a></li>
                          <li><a href="#" className="menu-content"><i class="icon -healthy-recipes" aria-hidden="true"></i>HEALTHY RECIPY</a></li>
                          <li><a href="#" className="menu-content"><i class="icon -experts" aria-hidden="true"></i>EXPERT</a></li>
                        </ul>
                    </div>
                </li>

                <li>
                    <div className="header-menu">
                        <a href="#" className="menu">COMMUNITY &#9662</a>
                        <ul className="sub-menu" id="">
                          <li><a href="#" className="menu-content"><i className="icon -community" aria-hidden="true"></i>COMUNITY</a></li>
                          <li><a href="#" className="menu-content"><i className="icon -blog" aria-hidden="true"></i>BLOG</a></li>
                        </ul>
                    </div>
                </li>

                <li>
                    <div className="header-menu">
                        <a href="#" className="menu">FB PLUS</a>
                    </div>
                </li>

                <li>
                    <div class="header-menu">
                        <a href="#" class="menu">ABOUT</a>
                    </div>
                </li>

                <li>
                    <div class="header-menu">
                        <a href="#" class="menu">STORE</a>
                    </div>
                </li>
            </ul>
            
        </div>

        <ul>
            <li>
                <div class="header-menu menu-login">
                    <a href="#" class="menu">
                        <div>Hi! Sign in</div>
                        <div>MY FITNESS &#9662</div>
                    </a>
                    <ul class="login" id="">
                      <h4>JOIN FOR FREE!</h4>
                      <div>Join for free and start building and tracking your workouts, get support from other Fitness Blender members and more!</div>
                      <li><a href="login.html"><button class="login-btn" >JOIN</button></a></li>
                      <li><a href="signIn.html"><button class="login-btn">Sign In</button></a></li>
                      <li><a href="afterLoginLanding.html"><button class="skip-btn">Skip</button></a></li>
                      
                    </ul>
                    <div class="header-menu last-logo">
                        <i class="material-icons-outlined">search</i>
                        <i class="material-icons-outlined">shopping_bag</i>
                    </div>
                </div>
            </li>
        </ul>
    </div>


    <div class="container">
        <h2 class="heading">Sign In</h2>
        <div class="google">
            <div>
                <i class="fab fa-facebook-f"></i>
                <h3>FACEBOOK</h3>
            </div>
            <div>
                <i class="fab fa-google"></i>
                <h3>GOOGLE</h3>
            </div>
            
        </div>
        <div style="margin-bottom: 30px;">or</div>
        <div id="successPopup">
            <h1>You are successfully created the account.</h1>
            <a href="signIn.html"><button class="login-btn">sign In</button></a>
        </div>
        <form id="signInForm">
            <input className="input" name="fname" type="text" placeholder="FirstName">
            <input className="input" name="lname" type="text" placeholder="LastName">
            <input className="input" name="email" type="email" placeholder="Email">
            <input className="input" type="text" name="userid" id="username" required placeholder="Username"/>
            <input className="input" type="password" name="pswrd" id="password" required placeholder="Password"/>
            <input className="input" type="text" name="pswrd1" id="password1" required placeholder="Confirm password"/>
            <input type="file" id="myFile" name="filename" accept="image/png, image/jpeg" onchange="updateFilename(this.value)">
            <div id="checkPass" >Password is not same.</div>

            <input type="button" onclick="check(this.form)" className="submitButton" value="Login"/>

        </form>
        <p className="medium light">
            By joining, you agree to the Fitness Blender
            <a href="/page/terms-of-use-agreement">Terms of Service</a> and
            <a href="/page/privacy-policy">Privacy Policy</a>
        </p>
    </div>
    <div id="display"></div>
    <img id="random" alt="">


    <footer className="footer">
        <div className="footer-div1">
            <h2 className="brand -dark"><a href="/">Fitness Blender</a>
                <p>WORKOUT COMPLETE<sup>™</sup></p>
            </h2>
            <div className="footer-div1-list ">
                <ul>
                    <li><a className="footer-div1-conta1" href="#">WORKOUT & PROGRAMS</a></li>
                    <li><a className="footer-div1-conta" href="#">WORKOUT VIDEO</a></li>
                    <li><a className="footer-div1-conta" href="#">CUSTOM WORKOUT</a></li>
                    <li><a className="footer-div1-conta" href="#">WORKOUT PROGRAMS</a></li>
                    <li><a className="footer-div1-conta" href="#">MEAL PLANS</a></li>
                </ul>

                <ul>
                    <li><a className="footer-div1-conta1" href="#">HEALTHY LIVING</a></li>
                    <li><a className="footer-div1-conta" href="#">FITNESS</a></li>
                    <li><a className="footer-div1-conta" href="#">HEALTH</a></li>
                    <li><a className="footer-div1-conta" href="#">NUTRITION</a></li>
                    <li><a className="footer-div1-conta" href="#">HEALTHY RECIPY</a></li>
                    <li><a className="footer-div1-conta" href="#">EXPERT</a></li>
                </ul>

                <ul>
                    <li><a className="footer-div1-conta1" href="#">FB PLUS</a></li>
                    <li><a className="footer-div1-conta1" href="#">COMMUNITY</a></li>
                    <li><a className="footer-div1-conta1" href="#">BLOG</a></li>
                    <li><a className="footer-div1-conta1" href="#">ABOUT US</a></li>
                    <li><a className="footer-div1-conta1" href="#">CONTACT US</a></li>
                    <li><a className="footer-div1-conta1" href="#">FAQ</a></li>
                    <li><a className="footer-div1-conta1" href="#">STORE</a></li>
                </ul>
            </div>
            
        </div>
        <div className="footer-div1 footer-div1-copy  footer-div1-border">
            <p>Copyright © 2020 Fitness Blender. All rights reserved. <a href="/page/terms-of-use-agreement">Terms
                and Conditions</a> <a href="/page/privacy-policy">Privacy Policy</a></p>

            <ul className="app">
                <li><a className="app-logo" href="https://www.youtube.com/user/FitnessBlender" target="_blank"><span class="iconfont-youtube-play"></span></a></li>
                <li><a className="app-logo" href="https://pinterest.com/FitnessBlender/" target="_blank"><span class="iconfont-pinterest"></span></span></a></li>
                <li><a className="app-logo" href="https://www.facebook.com/pages/FitnessBlendercom/151085874942542" target="_blank"><span class="iconfont-facebook"></span></a></li>
                <li><a className="app-logo" href="https://instagram.com/fitnessblender/#" target="_blank"><span class="iconfont-instagram"></span></a></li>
                <li ><a className="app-logo" href="https://twitter.com/FitnessBlender" target="_blank"><span class="iconfont-twitter"></span></a></li>
              </ul>
        </div>
    </footer>
    </div>
  )
}

    </div>
  )
}
