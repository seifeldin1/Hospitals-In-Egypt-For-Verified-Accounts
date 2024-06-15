import React, { useEffect, useState } from "react";

const UseFetch=(url)=>{
    const [data,setData]=useState('');
    const [loading,setLoading]=useState(true);
    const [error,setError]=useState('');

    useEffect(()=>{
        const fetchURL =async ()=>{
            try{
                const response = await fetch(url);
                if(!response.ok) throw new Error('Failed to fetch data');
                const data = await response.json();
                setData(data);
                setLoading(false);
            }
            catch(e){
                setError(e.message);
                setLoading(false);
            }
        }
        fetchURL();
    } , [url])

    

    return{data , loading , error};
}

export default UseFetch;
