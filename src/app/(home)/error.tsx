"use client"

import { useEffect } from "react";

interface ErrorPage{
    error: Error;
    reset: () => void;
}

export default function Error({error, reset}:ErrorPage) {
    
    useEffect(() => {
        console.log(error)
    }, [])
    
    
    return(
        <div style={{
            padding: '1rem'
        }}>
            <h1>:C</h1>
            <p>Ha ocurrido un error</p>
            <button onClick={reset}>Intentar de nuevo</button>
        </div>
    )
}