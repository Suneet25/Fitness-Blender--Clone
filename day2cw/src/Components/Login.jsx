import React from 'react';
import { FaFacebookF, FaGoogle } from 'react-icons/fa';

export const Login = () => {
  return (
    <div>

<h1 style={{marginTop:"100px",textRendering: "optimizelegibility"}}>Sign In</h1>
<div style={{display:"flex",gap:"20px",justifyContent:"center",alignItems:"center"}}>
    <div><button style={{borderRadius:"5px",padding:"10px 80px",backgroundColor:"#3f66b6",borderColor:"#3f66b6",color:"white"}}><span ><FaFacebookF/></span>       FACEBOOK</button></div>
    <div><button style={{borderRadius:"5px",padding:"10px 80px",backgroundColor:"#db4a3c",borderColor:"#db4a3c",color:"white"}}><span ><FaGoogle/></span>      GOOGLE</button></div>
</div>
<br />
<br />
<br />
<hr />
<br />
<br />
<div>
    <input type="text" placeholder='Username' style={{padding:"10px 80px",marginBottom:"20px",textAlign:"start"}}/>
    <br />
    <input type="password" placeholder='Password' style={{padding:"10px 80px",marginBottom:"20px"}}/>
    <br />
    <input type="checkbox" style={{marginBottom:"20px"}}/><span>Remember me</span>
    <br />
    <button style={{borderRadius:"5px",padding:"10px 80px",marginBottom:"20px",borderColor:"#4296cb",color:"white",backgroundColor:"#4296cb"}}>SIGN IN</button>
    <br />
    <a style={{textDecoration:"none"}} rel="stylesheet" href="" >Forgot Password?</a>
    <br />
    <br />
    <br />
    <p>Not a member yet? <a style={{textDecoration:"none"}} href=""> Join now -- it’s free!</a></p>
</div>
    </div>
  )
}
