import React from 'react'
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";

function Login() {
    return (
        <div style={{textAlign:"center"}}>
            <h2>Halaman Login</h2>
            <div>
                <h2 style={{marginRight:'110px'}}>Email</h2>
                <input type='text' style={{height:'40px'}}/>
                <h2 style={{marginRight:'70px'}}>Password</h2>
                <input type='password' style={{height:'40px'}}/>
                <br />
                {/* <Link to='/Main'> */}
                    <button type='submit' style={{marginTop:'20px', width:'180px', height:'40px'}}>LOGIN</button>
                {/* </Link> */}
      </div>
        </div>
    )
}



export default Login
