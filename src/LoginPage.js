import React from "react";
import {Link} from 'react-router-dom';
import {users} from "./userLoginInfo.js";
import { useState  } from "react";



const   LoginPage= ()=>{
    const [username , setusername] = useState('');
    const [password , setpassword] = useState('');
    const [error , seterror] = useState('');

    const handleLogin=()=>{
        const user = users.find(user=> user.username === username && user.password === parseInt(password , 10) );
        console.log(username);
        console.log(password);
        console.log(user);
        if(user){
            localStorage.setItem('isAuthenticated' , 'true');
            
        }
        else{
            localStorage.setItem('isAuthenticated' , 'false');
            seterror('Invalid username or password');
        }
    }

    return (
        <>
        <div>
            <h1>Login Page</h1>
        </div>
        <div>
            <div>
                <label>Username:</label>
                <br></br>
                <input type="text" value={username} onChange={e=> setusername(e.target.value)}></input>
            </div>
            <div>
                <label>Password:</label>
                <br></br>
                <input type= "password" value={password} onChange={e=> setpassword(e.target.value)}></input>
            </div>
            <button onClick={handleLogin}>Login</button>
            
            {error&& <p style={{color:'red'}}>{error}</p>}
            <h1><Link to="/home">Click here to return to home page</Link></h1>
            
        </div>
        </>
    )
       
      
    
}

export default LoginPage;