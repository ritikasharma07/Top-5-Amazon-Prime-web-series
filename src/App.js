import React from 'react';
import "./index.css";
import Cards from './Cards';
import data from './data';

function App(){
return(
    <>
    <section className="section">
    <h1 className="heading">Top 5 Amazon Prime web series</h1>
    <div className="cards-container">
    {data.map((val)=>{
      return(
        
        <Cards
      key={val.id}
    img={val.img}
    title={val.title}
    name={val.name}
    link={val.link}
    />
      )
    })}</div>
    </section>
    </>
  );}
export default App;


