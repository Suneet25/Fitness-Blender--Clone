import React from 'react'

export const Middle = () => {
  return (
    <div>
<div style={{width:"100%",height:"auto",border:"1px solid yellow",display:"grid",gridTemplateColumns:"repeat(2,1fr)"}}>
    <div style={{border:"1px solid blue",backgroundColor:"#12debb",color:"white"}}>
<h1 style={{width:"50%",margin:"auto",marginTop:"300px"}}>Feel Great.Body and Mind.</h1>
<p style={{width:"50%",margin:"auto"}}>Choose from hundreds of workouts, healthy recipes, relaxing meditations, and expert articles, for a whole body and mind approach to feeling great.</p>

        <button style={{color:"white",backgroundColor:"black",padding:"15px 30px",marginTop:"30px",borderRadius:"5px"}}><b>JOIN NOW</b></button>
    
    </div>
    <div style={{border:"1px solid blue",backgroundColor:"#12debb"}}>
        <img src="https://cloudfront.fitnessblender.com/assets/img/homepage/team-720.webp" alt="sss" />
    </div>
  
</div>
<div style={{width:"100%",height:"550px",border:"3px solid red",background: "linear-gradient(130deg,#ece6f8 0%,#f9e7f6 100%)"}}>
<h2 style={{fontSize:"2rem",fontWeight:"400"}}>Introducing
    <br />
    <span style={{fontSize:"2rem",fontWeight:"400",MARGIN:"0 0 1rem 0",marginRight:"8px"}}><b>FB</b></span>
    <span style={{color:"#4296cb",fontSize:"2rem",fontWeight:"400",lineHeight:"1.2em",marginRight:"8px"}}><b>Plus</b></span>
    Passes
</h2>
<p style={{    margin: "1rem auto",
    padding: "0",
    fontSize: "1rem",
    lineHeight: "1.6em",
    width:"30%",
    position: "relative",
    zIndex: "3",color:"#4e5262"}}>Passes give you full access to everything FB Plus has to offer, without a long-term subscription. Choose a pass that fits your budget and your schedule.</p>
    <button style={{color:"white",backgroundColor:"black",padding:"15px 30px",marginTop:"30px",borderRadius:"5px",marginTop:"0px"}}><b>BUY A PASS</b></button>
    <div>
    <img src="https://cloudfront.fitnessblender.com/assets/img/homepage/passes-720.webp" alt="hag" />
    </div>
</div>
    </div>
  )
}
