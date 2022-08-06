import defaultSports from "./data"
import { useState } from "react"
import Image from "next/image"
import likebt from "../public/likebt.png"


export default function MainContent({filter, clickLink}) {

const [quote,setQuote] = useState(null);
const [like, setLike] = useState(0)

const emptyArray = []

const filterQuote = !quote ? emptyArray : defaultSports.filter(coach => coach.name === quote);

    return (

        <>
        

        <div className="">
        <div className="gridcol12 push">{filter.map( (sport) => 
        <div key={sport.id} className="gridspan4" >
        <div className="gridcol6">
        
        <div className="imagesize gridspan3">
        <Image width={400} height={500} src={sport.image} className="rounded-xl"/>
        </div>

        <div className="text gridspan3">
        <h1><strong>{sport.category}</strong></h1>
        <div>{sport.name}         <button className="like" onClick={() => setLike(sport.like += 1)}>Like | {sport.like}</button></div>

        <p onClick={() => setQuote(sport.name)}>{sport.quote} </p> 

        
        <div >    
        
        </div>
        </div>




        </div>



        </div>
        
        
        )}    
        </div>

        <div className="bgset" onClick={() => setQuote(null)}>
        
        {filterQuote.map((manQuote, index) => <div key={index} > 
        

        <div className="gridcol12extra">
        <div className="gridspan1"/>
        <div className="gridspan4 ">
        <Image width={400} height={500} src={manQuote.image} className="rounded-xl"/>
        </div>
        <div className="gridspan5 textpopup">
        <h1> {manQuote.name} </h1>
        <p>{manQuote.longquote} </p>
        </div>
        <div className="gridspan2"/>
        </div>
        
        </div>)}
           
            
        </div> 

        </div>
        


<style jsx>{`

.push {
    margin-left : 10px;
    margin-right : 10px;
}



.gridcol12 {
    display : grid;
    grid-template-columns: repeat(12, minmax(0, 1fr));
    column-gap: 15px;
    row-gap: 20px;
}


@media screen and (max-width: 600px) {
    .gridcol12 {
        display : grid;
        grid-template-columns: repeat(1, minmax(0, 1fr));
        column-gap: 15px;
        row-gap: 20px;
    }
}

.gridcol12extra {
    display : grid;
    grid-template-columns: repeat(12, minmax(0, 1fr));
    column-gap: 15px;
    row-gap: 20px;
}

.gridcol6 {
    display : grid;
    grid-template-columns: repeat(6, minmax(0, 1fr));
    column-gap: 8px;
}



.gridspan1 {
    grid-column: span 1 / span 1;
}

.gridspan2 {
    grid-column: span 2 / span 2;
}

.gridspan3 {
    grid-column: span 3 / span 3;
}

.gridspan4 {
    grid-column: span 4 / span 4;
}


.gridspan5 {
    grid-column: span 5 / span 5;
}

.gridspan12 {
    grid-column: span 12 / span 12;
}

.imagesize {
    width : 100%;
    filter: drop-shadow(5px 10px 10px rgb(0 0 0 / 0.5));
}


.flexset {
    display : flex;
    flex-direction : row;
}

.text > h1 {
    font-size: 1.5rem;
}

.text > p {
    text-decoration: underline;
    color : #ffb400;
    cursor : pointer
}

.textpopup > h1 {
    font-size: 2.5rem;
    color : white;


}

.textpopup > p {
    font-size: 1.3rem;
    color : white;

}

.bgset {
    background-color: rgb(0,0,0, .8);
    padding-top: 15vh;
    padding-bottom: 20vh;
    position : absolute;
    top: 0;
}

.like {
    cursor: pointer;
    border: solid;
    border-radius: 6px;
    border-color: blue;
    color: white ;
    background-color: #6699FF;
    padding-left: 3px;
    padding-right: 3px;
    border-width: thin;
}


`}</style>        
        </>


    )


}