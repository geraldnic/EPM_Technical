import React from 'react'
import {Link} from "react-router-dom";

function Main() {
    
    const curr = new Date();
    const time = curr.getHours() + ':' + curr.getMinutes() + ':' + curr.getSeconds(); 
    var email = 'gerald@gmail.com';
    var nama = email.substring(0,email.indexOf('@'));
    var salam = '';
    if(curr.getHours() > 0 && curr.getHours() <= 12){
        salam = 'Selamat Siang';
    }
    else {
        salam = 'Selamat Malam';
    }
    return (
        <div>
            <div style={{backgroundColor:'blue'}}>
                <h2 style={{display:'inline-block', marginLeft:'20px'}}>{email}</h2>
                <Link to={`/Login`}>
                    <button style={{marginLeft:'840px'}}>Logout</button>
                </Link>
            </div>
            <div style={{textAlign:'center'}}>
                <h2>{salam}</h2>
                <h2>{nama}</h2>
                <h2>{time}</h2>
            </div>
        </div>
    )
}

export default Main
