import React from "react";
import { Link } from "react-router-dom";
import UseFetch from "./fetcher.js";

const HospitalsList=()=>{
    const{data , loading , error} = UseFetch(`https://egypt-health-care-end-pointss.onrender.com/`);

    return(
        <div>
            <div>
                <h1> Hospitals list: </h1>
            </div>
            <div>
                {loading&& <p>Loading...</p>}
                {error && <p>Caught an error: {error}</p>}
                {data &&(
                    <ol>
                        {data.map((item , index)=>(
                            <li key={index}>{item.name}</li>
                        ))}
                    </ol>
                )}
               <h1><Link to="/home">Click here</Link> to return back to home page</h1> 
            </div>
        </div>
    )
}

export default HospitalsList;