import React from 'react'
import {NavLink} from "react-router-dom";
export const NavBar = () => {
  return (
    <div>
        <div style={{display:"grid",gridTemplateColumns:"200px 900px 250px",border:"1px solid black",height:"100px",width:"auto"}}>
<div className='logo' style={{height:"45px",width:"156px",border:"1px solid red",margin:"auto"}}>
<img src="	https://cloudfront.fitnessblender.com/assets/img/logos/fb-logo.svg" alt="asa" />
</div>
<div className='categories' style={{border:"1px solid red",display:"grid",gridTemplateColumns:"repeat(7,1fr)",textAlign:"center",justifyContent:"center",margin:"auto"}}>
    <div style={{border:"1px solid blue"}}>WORKOUTS</div>
    <div style={{border:"1px solid blue"}}>PROGRAMS</div>
    <div style={{border:"1px solid blue"}}>HEALTHY LIVING</div>
    <div style={{border:"1px solid blue"}}>COMMUNITY</div>
    <div style={{border:"1px solid blue"}}>ABOUT</div>
    <div style={{border:"1px solid blue"}}>STORE</div>
    <div style={{border:"1px solid blue"}}>MEMBERSHIP</div>
   
</div>
<div className='signin' style={{border:"1px solid red",display:"grid",gridTemplateColumns:"repeat(2,1fr)"}}>
    <div style={{border:"1px solid green"}}>
        <p>Hi Sign In</p>
        <div>MY FITNESS</div>
    </div>
    <div style={{border:"1px solid green"}}></div>
</div>
</div>
    </div>
  )
}
