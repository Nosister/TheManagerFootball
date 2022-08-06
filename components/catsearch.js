import React, { useState } from "react";
import Image from "next/image";
import styles from '../styles/Home.module.css'
import defaultSports from './data.js'
import Select from './select.js'
import MainContent from "./maincontent";

export default function FootballSearch() {
    
    const [state, setState] = useState(null);


         function handler(e) {
        setState(e.target.value)
    }   


   



    const filtered = !state 
    ? defaultSports 
    : defaultSports.filter(sport => sport.category === state)


    
    return (

        <>
        

        <Select title={handler}/>
        <br/>
        <MainContent filter={filtered}  />
        

        </>
    )
}