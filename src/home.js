import React from "react";
import { useState , useEffect } from "react";
import { Link } from "react-router-dom";

const HomePage=()=>{
    const [isAuthenticated , setauthenticated] = useState(false);

    useEffect(()=>{
        const check = localStorage.getItem('isAuthenticated');
        console.log(check);
        if(check=== 'true'){
            setauthenticated(true);
        }
    }, []);

    return(
        <div>
            <h1>Home Page</h1>
            <br></br>
            {isAuthenticated ? <h1><Link to ="/hospitals">Click here</Link> to go to hospitals list</h1>: <p>User is not authenticated</p>}
            <h1><Link to="/login">Login</Link>to our website</h1>
        </div>
    )
}

export default HomePage;